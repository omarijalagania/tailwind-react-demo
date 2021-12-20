import React, { useState } from "react";
import QRCode from "react-qr-code";

function QR() {
  const [qr, setQr] = useState("https://www.google.ge");

  return (
    <div className="flex justify-center">
      <div className="p-20">
        <QRCode value={qr} />
        <input
          className="mt-3 p-1 w-full border-2"
          onChange={(e) => setQr(e.target.value)}
          type="text"
          value={qr}       
        />
      </div>
    </div>
  );
}

export default QR;
