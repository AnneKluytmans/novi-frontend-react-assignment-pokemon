import './ErrorMessage.css';

function ErrorMessage({ message }) {
    return (
        <div className="outer-content-container">
            <h2 className="error-message">{message}</h2>
        </div>
    );
}

export default ErrorMessage;