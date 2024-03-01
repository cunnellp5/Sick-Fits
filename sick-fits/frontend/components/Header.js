import Link from 'next/link';
import Nav from './Nav';
import Logo from './styles/Logo';
import HeaderStyles from './styles/HeaderStyles';
import Cart from './Cart';
import Search from './Search';

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Sick Fits</Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </HeaderStyles>
);

export default Header;
