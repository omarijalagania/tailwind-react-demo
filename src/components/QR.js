import React, { useState } from "react";
import QRCode from "react-qr-code";

function QR() {
  const [qr, setQr] = useState("https://www.facebook.com");

  return (
    <div className="p-20">
      <QRCode value={qr} />
      <input
        className="m-3 border-2"
        onChange={(e) => setQr(e.target.value)}
        type="text"
        value={qr}
      />
    </div>
  );
}

export default QR;
