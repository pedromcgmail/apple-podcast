import PropTypes from 'prop-types';
const CardContainer = ({children, className}) => {
  
  return (
  <div className={`border-2 customDropShadow p-2 ${className}`}>
    {children}
  </div> 
  )
}

CardContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

export default CardContainer