import Alert from "react-bootstrap/Alert";
import { BsInfoCircle } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

function Message({ msg, variant, children }) {
  return (
    <Alert
      className="d-flex flex-row align-items-center"
      style={{ height: "82px", width: "300px" }}
      key={variant}
      variant={variant}
    >
      {children}
      <h6 className="ps-2">{msg}</h6>
    </Alert>
  );
}

function Info({ msg }) {
  return (
    <Message msg={msg} variant="info">
      <BsInfoCircle className="w-25 h-100" />
    </Message>
  );
}

function Error({ msg }) {
  return (
    <Message msg={msg} variant="danger">
      <BsExclamationCircle className="w-25 h-100" />
    </Message>
  );
}

export { Info, Error };
