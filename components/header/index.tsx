import React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { MoreVertical } from 'lucide-react';
import { HeaderTitle } from './title';

export interface HeaderProps {
  title: string;
  onTitleChange?: (value: string) => void;
  onMenuClick?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  title,
  onTitleChange,
  onMenuClick,
  className 
}) => {
  return (
    <HStack 
      as="header" 
      justifyContent="space-between" 
      alignItems="center"
      className={className}
      p={4}
    >
      <HeaderTitle 
        value={title} 
        onChange={onTitleChange}
        placeholder="Enter chat title..."
      />
      <IconButton
        aria-label="Menu options"
        size="sm"
        variant="ghost"
        onClick={onMenuClick}
      ><MoreVertical /></IconButton>
    </HStack>
  );
};

export default Header;