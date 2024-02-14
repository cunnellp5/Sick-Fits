import PropTypes from 'prop-types';
import UpdateProduct from '../components/UpdateProduct';

const UpdatePage = ({ query }) => (
  <div>
    <UpdateProduct id={query.id} />
  </div>
);

UpdatePage.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default UpdatePage;
