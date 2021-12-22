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
      <div className="flex justify-center md:px-60 p-1 mb-5">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            className: "signatureCanvas",
          }}
        />
      </div>

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

      <div className="flex flex-col sm:flex-row justify-center p-1">
        <button
          onClick={save}
          type="submit"
          className="w-25 m-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          შენახვა
        </button>
        <button
          onClick={clear}
          type="submit"
          className="w-25 m-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          გასუფთავება
        </button>

        <button
          disabled={imageURL ? false : true}
          onClick={reset}
          type="submit"
          className={`w-25 m-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            imageURL ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 "
          }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          წაშლა
        </button>
      </div>
    </>
  );
}

export default Signature;
