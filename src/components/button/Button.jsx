import './Button.css'

function Button( { children, type, disabled, clickHandler, className }) {
    return (
      <button type={type} disabled={disabled} onClick={clickHandler} className={className}>
          {children}
      </button>
    );
}

export default Button;