import React, { useState, useRef } from "react";

import SignatureCanvas from "react-signature-canvas";

import "./sigCanvas.css";

function Signature() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  const reset = () => {
    setImageURL(null);
  };
  return (
    <>
      <h1 className="text-center mb-5">ელექტრონული ხელმოწერა</h1>
      <div className="flex flex-col justify-center">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            className: "signatureCanvas",
          }}
        />

        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px",
            }}
          />
        ) : null}
        {/* Button to trigger save canvas image */}
        <button onClick={save}>Save</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Remove Signature</button>
      </div>
    </>
  );
}

export default Signature;
