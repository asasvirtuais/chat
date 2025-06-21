import React from 'react'

export interface MessageMenuItemData {
  id: string
  label: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

export interface MessageMenuProps {
  items: MessageMenuItemData[]
  className?: string
  trigger?: React.ReactNode
}

export const MessageMenu: React.FC<MessageMenuProps> = ({ 
  items, 
  className, 
  trigger = '⋯' 
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleItemClick = (item: MessageMenuItemData) => {
    if (!item.disabled) {
      item.onClick?.()
      setIsOpen(false)
    }
  }

  return (
    <div className={`message-menu ${className || ''}`} ref={menuRef}>
      <button
        type="button"
        className="message-menu__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </button>
      {isOpen && (
        <ul className="message-menu__list">
          {items.map((item) => (
            <li key={item.id} className="message-menu__item">
              <button
                type="button"
                className={`message-menu__option ${item.disabled ? 'message-menu__option--disabled' : ''}`}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.icon && <span className="message-menu__icon">{item.icon}</span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MessageMenu