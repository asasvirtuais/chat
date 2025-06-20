import React from 'react';

export interface MenuItemData {
  id: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface HeaderMenuProps {
  items: MenuItemData[];
  className?: string;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ items, className }) => {
  return (
    <nav className={`header-menu ${className || ''}`}>
      <ul className="header-menu__list">
        {items.map((item) => (
          <li key={item.id} className="header-menu__item">
            <button
              className={`header-menu__button ${item.disabled ? 'header-menu__button--disabled' : ''}`}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;