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

  return <button className="ml-10 mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={downloadPdfDocument}>PDF ფაილის გადმოწერა</button>;
};

export default DownloadAsPDF;
