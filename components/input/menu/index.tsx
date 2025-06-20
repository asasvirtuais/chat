import React from 'react';

export interface InputMenuItemData {
  id: string;
  label: string;
  value: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
}

export interface InputMenuProps {
  items: InputMenuItemData[];
  onSelect?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const InputMenu: React.FC<InputMenuProps> = ({ 
  items, 
  onSelect, 
  className, 
  placeholder = 'Select an option...' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleSelect = (item: InputMenuItemData) => {
    if (!item.disabled) {
      setSelectedValue(item.value);
      setIsOpen(false);
      item.onClick?.(item.value);
      onSelect?.(item.value);
    }
  };

  const selectedItem = items.find(item => item.value === selectedValue);

  return (
    <div className={`input-menu ${className || ''}`}>
      <button
        type="button"
        className="input-menu__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem.label : placeholder}
      </button>
      {isOpen && (
        <ul className="input-menu__list">
          {items.map((item) => (
            <li key={item.id} className="input-menu__item">
              <button
                type="button"
                className={`input-menu__option ${item.disabled ? 'input-menu__option--disabled' : ''}`}
                onClick={() => handleSelect(item)}
                disabled={item.disabled}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputMenu;