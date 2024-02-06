import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children, cool }) => {
  return (
    <div>
      <Header></Header>
      <h2>Hey! I'm the page component</h2>
      {children}
      <h3>{cool}</h3>
    </div>
  );
};

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Page;
