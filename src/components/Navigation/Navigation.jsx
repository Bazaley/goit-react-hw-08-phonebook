import { selectToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { List, Item, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <List>
        <Item>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </Item>
        <Item>
          {token && <NavLinkStyled to="/addContact">Add Contact</NavLinkStyled>}
        </Item>
        <Item>
          {token && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
