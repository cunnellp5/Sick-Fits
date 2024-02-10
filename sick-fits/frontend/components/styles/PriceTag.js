import styled from 'styled-components';

const PriceTag = styled.span`
  background: var(--red);
  color: white;
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  padding: 5px;
  position: absolute;
  right: -3px;
  top: -3px;
  transform: rotate(3deg);
`;

export default PriceTag;
