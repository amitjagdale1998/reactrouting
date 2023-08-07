import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Zoom(props) {
  console.log(props.imageUrl);
  const image = props.imageUrl;
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const imageUrl = `${image}`;
  const imageName = `${image}`; // The name you want to give to the downloaded image

  const handleDownload = () => {
    alert("hello");
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "auto", padding: "auto" }}>
          <img
            style={{
              height: "80vh",
              width: "100%",
            }}
            src={props.imageUrl}
          ></img>{" "}
          <button onClick={() => handleDownload()}>Download</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Zoom;
