import { KeyboardEvent } from 'react';
import {
  MenuTitle,
  TabButton,
  TabList,
  TitleRow,
} from '@/pages/menu/MenuTabs.style';

export interface MenuTab {
  key: string;
  label: string;
}

interface Props {
  tabs: MenuTab[];
  value: string;
  onChange: (key: string) => void;
}

export default function MenuTabs({ tabs, value, onChange }: Props) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const current = tabs.findIndex((t) => t.key === value);
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(current + dir + tabs.length) % tabs.length];
    onChange(next.key);
    e.currentTarget
      .querySelector<HTMLElement>(`[data-cy="tab-${next.key}"]`)
      ?.focus();
  };

  return (
    <TitleRow>
      <MenuTitle>Menu</MenuTitle>
      <TabList
        role="tablist"
        aria-label="Menu categories"
        data-cy="menu-tabs"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab) => {
          const active = tab.key === value;
          return (
            <TabButton
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              $active={active}
              onClick={() => onChange(tab.key)}
              data-cy={`tab-${tab.key}`}
            >
              {tab.label}
            </TabButton>
          );
        })}
      </TabList>
    </TitleRow>
  );
}
