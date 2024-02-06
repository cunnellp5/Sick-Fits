import styled from 'styled-components';

const Logo = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  z-index: 2;

  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default Logo;
