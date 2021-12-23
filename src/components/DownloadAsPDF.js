import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadAsPDF = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    const divHeight = input.clientHeight;
    const divWidth = input.clientWidth;
    const ratio = divHeight / divWidth;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      const width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();
      height = ratio * width;

      pdf.addImage(imgData, "JPEG", 0, 0, width - 20, height - 10);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };

  return <button onClick={downloadPdfDocument}>Download Pdf</button>;
};

export default DownloadAsPDF;
