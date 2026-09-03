import { useNavigate, useParams } from 'react-router-dom';
import {
  BackButton,
  Body,
  Content,
  Footnote,
  Headline,
  Page,
  Receipt,
  ReceiptBrand,
  ReceiptFooter,
  ReceiptLines,
  ReceiptRow,
  ReceiptRowTotal,
  Tear,
} from '@/pages/error/Error404.style';

const NOT_FOUND_LINES = [
  'ITEM NOT FOUND',
  'NOT IN THE SYSTEM',
  'NOT OUT THE BACK',
  'NOT UNDER THE COUNTER',
];

export default function Error404() {
  const navigate = useNavigate();
  const params = useParams();
  // the URL is the only trustworthy signal that they're inside a table's flow —
  // a value left in storage from an earlier visit shouldn't send a fresh
  // visitor to some random table's menu.
  const tableNumber = /^\d+$/.test(params.tableNumber ?? '')
    ? params.tableNumber
    : null;

  const goBack = () => navigate(tableNumber ? `/${tableNumber}/menu` : '/');

  return (
    <Page>
      <Receipt data-cy="error-receipt">
        <ReceiptBrand>DELICE</ReceiptBrand>
        <Tear />
        <ReceiptRow>
          <span>1 × PAGE</span>
          <span>404</span>
        </ReceiptRow>
        <ReceiptLines>
          {NOT_FOUND_LINES.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </ReceiptLines>
        <Tear />
        <ReceiptRowTotal>
          <span>TOTAL</span>
          <span>$0.00</span>
        </ReceiptRowTotal>
        <ReceiptFooter>NO CHARGE FOR A WRONG TURN</ReceiptFooter>
      </Receipt>

      <Content>
        <Headline data-cy="error-title">Not on file.</Headline>
        <Body>
          The link you followed has either moved or expired. The menu, however,
          is exactly where you left it.
        </Body>
        <BackButton type="button" onClick={goBack} data-cy="error-back">
          {tableNumber ? 'Back to the menu' : 'Back to the start'}
        </BackButton>
        <Footnote>Error 404</Footnote>
      </Content>
    </Page>
  );
}
