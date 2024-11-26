import Alert from "react-bootstrap/Alert";
import {
  BsCheckCircle,
  BsInfoCircle,
  BsExclamationCircle,
  BsXCircle,
} from "react-icons/bs";

function Message({ msg, variant, children }) {
  return (
    <Alert
      className="d-flex flex-row align-items-center"
      style={{ height: "82px", width: "300px" }}
      key={variant}
      variant={variant}
      dismissible
    >
      {children}
      <h6 className="ps-2">{msg}</h6>
    </Alert>
  );
}

function Success({ msg }) {
  return (
    <Message msg={msg} variant="success">
      <BsCheckCircle className="w-25 h-100" />
    </Message>
  );
}

function Info({ msg }) {
  return (
    <Message msg={msg} variant="info">
      <BsInfoCircle className="w-25 h-100" />
    </Message>
  );
}

function Warning({ msg }) {
  return (
    <Message msg={msg} variant="warning">
      <BsExclamationCircle className="w-25 h-100" />
    </Message>
  );
}

function Error({ msg }) {
  return (
    <Message msg={msg} variant="danger">
      <BsXCircle className="w-25 h-100" />
    </Message>
  );
}

export { Success, Info, Warning, Error };
