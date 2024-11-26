import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Success, Info, Warning, Error } from "./Alerts";
import { AppContext } from "./AppContext";

function FlashMessage() {
  const { flash } = useContext(AppContext);
  console.log(flash.getMessage());
  useEffect(() => {
    flash.hideMessage();
    console.log(flash.getMessage());
  }, []);

  const msg = flash.getMessage();

  if (!msg || !msg.visible) return <></>;

  let alert = <></>;

  switch (msg.variant) {
    case "success":
      alert = <Success msg={msg.text} />;
      break;
    case "info":
      alert = <Info msg={msg.text} />;
      break;
    case "warning":
      alert = <Warning msg={msg.text} />;
      break;
    case "error":
      alert = <Error msg={msg.text} />;
      break;
    default:
  }

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">{alert}</Row>
    </Container>
  );
}

export default FlashMessage;
