import PropTypes from 'prop-types';

const Page = ({children, cool}) => {
  return (
        <div>
            <h2>Hey! I'm the page component</h2>
            {children}
            <h3>{cool}</h3>
        </div>
    )
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

export default Page;