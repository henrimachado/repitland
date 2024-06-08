import React from 'react';
import { MenuItemContainer } from './MenuItem.style';


interface MenuItemProps {
  icon: React.ReactElement;
  title: string;
}
const MenuItem = ({ icon, title } : MenuItemProps ) => {

  return (
    <MenuItemContainer>
      {icon}  
      {title}
    </MenuItemContainer>
  );
};
export default MenuItem;
