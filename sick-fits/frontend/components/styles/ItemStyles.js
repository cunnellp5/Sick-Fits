import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    height: 400px;
    object-fit: cover;
    width: 100%;
  }
  p {
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
    padding: 0 3rem;
  }
  .buttonList {
    background: var(--lightGray);
    border-top: 1px solid var(--lightGray);
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    width: 100%;
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
