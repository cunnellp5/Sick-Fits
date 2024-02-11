import Link from 'next/link';
import Nav from './Nav';
import Logo from './styles/Logo';
import HeaderStyles from './styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
};

export default Header;
