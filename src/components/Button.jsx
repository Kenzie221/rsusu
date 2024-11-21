import PropTypes from 'prop-types';
export const Button = (props) => {

  return (
    <button disabled={props.disabled}  onClick={props.onClick} className={`
      disabled:bg-gray-300
      
    
         
            block border-2     
             ${props.className}
            ` }>{props.children}</button>
  )
}


Button.propTypes={
  children:PropTypes.node.isRequired,
  disabled:PropTypes.bool,
  onClick:PropTypes.func.isRequired,

  className:PropTypes.string,
}

Button.defaultProps={
  disabled:false,
  onClick:()=>{},
  className:""
}