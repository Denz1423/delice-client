import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeliceLogo from '@/assets/Delice.svg';
import agent from '@/services/api/agent';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart } from '@/services/state/CartSlice';
import {
  selectCartProducts,
  selectCartTotal,
} from '@/services/state/CartSelectors';
import { useMediaQuery } from '@/pages/checkout/useMediaQuery';
import {
  Band,
  BandSub,
  BandTitle,
  BigTitle,
  Confirmation,
  DesktopBody,
  DesktopButton,
  DesktopHeader,
  Fallback,
  FallbackButton,
  FallbackText,
  FallbackTitle,
  Group,
  Lede,
  Line,
  LineName,
  LineQty,
  LineTotal,
  Lines,
  MicroLabel,
  MobileBody,
  MobileFooter,
  Page,
  PaidLabel,
  PaidRow,
  PaidValue,
  PanelHeading,
  PrimaryButton,
  ReceiptPanel,
  Stats,
  StatValue,
  TablePill,
  Tile,
  Tiles,
  TileValue,
  TickCircle,
} from '@/pages/checkout/CheckoutSuccess.style';

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

/** A short, quotable reference from the order id (which may be a long GUID). */
const shortCode = (id: string) => {
  if (!id) return '…';
  const clean = id
    .replace(/[^a-z0-9]/gi, '')
    .slice(0, 8)
    .toUpperCase();
  return clean.length > 4 ? `${clean.slice(0, 4)}-${clean.slice(4)}` : clean;
};

function Tick({ boxSize }: { boxSize: number }) {
  const size = Math.round(boxSize * 0.47);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2f3a22"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function CheckoutSuccess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tableFromStore = useAppSelector((state) => state.tableNumber);
  const cart = useAppSelector((state) => state.cart.cart);
  const liveProducts = useAppSelector(selectCartProducts);
  const liveTotal = useAppSelector(selectCartTotal);
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  // The cart is cleared once the order is placed, so snapshot it on mount.
  const [receipt] = useState(() => ({
    lines: (liveProducts ?? []).map((product) => ({
      id: product.id,
      name: product.name,
      qty: product.quantity,
      lineTotal: product.price * product.quantity,
    })),
    total: liveTotal,
    table: params.tableNumber ?? tableFromStore ?? '',
  }));
  const [orderId, setOrderId] = useState('');
  const placedRef = useRef(false);

  useEffect(() => {
    if (placedRef.current || receipt.lines.length === 0) return;
    placedRef.current = true;

    agent.Orders.create({ ...cart, tableNumber: receipt.table })
      .then((response) => setOrderId(response?.orderId ?? ''))
      .catch((err) => console.log(err))
      .finally(() => dispatch(clearCart()));
  }, [dispatch, cart, receipt]);

  const orderMore = () => {
    dispatch(clearCart());
    navigate(receipt.table ? `/${receipt.table}/menu` : '/');
  };

  if (receipt.lines.length === 0) {
    return (
      <Page>
        {isDesktop && (
          <DesktopHeader>
            <img src={DeliceLogo} alt="Delice" />
            {receipt.table ? (
              <TablePill>Table {receipt.table}</TablePill>
            ) : null}
          </DesktopHeader>
        )}
        <Fallback>
          <FallbackTitle>All done</FallbackTitle>
          <FallbackText>
            There&apos;s no recent order to show here.
          </FallbackText>
          <FallbackButton type="button" onClick={orderMore}>
            {receipt.table ? 'Back to the menu' : 'Start over'}
          </FallbackButton>
        </Fallback>
      </Page>
    );
  }

  const orderLines = (
    <Lines>
      {receipt.lines.map((line, index) => (
        <Line
          key={line.id}
          style={{ animationDelay: `${index * 45}ms` }}
          data-cy={`success-line-${line.name}`}
        >
          <LineQty>{line.qty}×</LineQty>
          <LineName>{line.name}</LineName>
          <LineTotal>{formatMoney(line.lineTotal)}</LineTotal>
        </Line>
      ))}
    </Lines>
  );

  if (isDesktop) {
    return (
      <Page>
        <DesktopHeader>
          <img src={DeliceLogo} alt="Delice" />
          <TablePill data-cy="tableNumber-container">
            Table {receipt.table}
          </TablePill>
        </DesktopHeader>
        <DesktopBody>
          <Confirmation>
            <TickCircle $size={70}>
              <Tick boxSize={70} />
            </TickCircle>
            <BigTitle data-cy="success-title">
              Your order has been placed
            </BigTitle>
            <Lede>The kitchen has your order.</Lede>
            <Stats>
              <div>
                <MicroLabel>Order</MicroLabel>
                <StatValue data-cy="success-order-code" title={orderId}>
                  {shortCode(orderId)}
                </StatValue>
              </div>
              <div>
                <MicroLabel>Table</MicroLabel>
                <StatValue>{receipt.table}</StatValue>
              </div>
              <div>
                <MicroLabel>Paid</MicroLabel>
                <StatValue>{formatMoney(receipt.total)}</StatValue>
              </div>
            </Stats>
            <DesktopButton
              type="button"
              onClick={orderMore}
              data-cy="order-more-button"
            >
              Order something else
            </DesktopButton>
          </Confirmation>

          <ReceiptPanel>
            <PanelHeading>Your order</PanelHeading>
            {orderLines}
            <PaidRow>
              <PaidLabel>Paid</PaidLabel>
              <PaidValue data-cy="success-total">
                {formatMoney(receipt.total)}
              </PaidValue>
            </PaidRow>
          </ReceiptPanel>
        </DesktopBody>
      </Page>
    );
  }

  return (
    <Page>
      <Band>
        <TickCircle $size={64}>
          <Tick boxSize={64} />
        </TickCircle>
        <BandTitle data-cy="success-title">
          Your order has been placed
        </BandTitle>
        <BandSub>{formatMoney(receipt.total)} · card</BandSub>
      </Band>

      <MobileBody>
        <Tiles>
          <Tile>
            <MicroLabel>Order</MicroLabel>
            <TileValue data-cy="success-order-code" title={orderId}>
              {shortCode(orderId)}
            </TileValue>
          </Tile>
          <Tile>
            <MicroLabel>Table</MicroLabel>
            <TileValue>{receipt.table}</TileValue>
          </Tile>
        </Tiles>

        <Group>
          <MicroLabel>Coming to you</MicroLabel>
          {orderLines}
          <PaidRow>
            <PaidLabel>Paid</PaidLabel>
            <PaidValue data-cy="success-total">
              {formatMoney(receipt.total)}
            </PaidValue>
          </PaidRow>
        </Group>
      </MobileBody>

      <MobileFooter>
        <PrimaryButton
          type="button"
          onClick={orderMore}
          data-cy="order-more-button"
        >
          Order something else
        </PrimaryButton>
      </MobileFooter>
    </Page>
  );
}
