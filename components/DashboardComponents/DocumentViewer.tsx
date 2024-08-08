"use client"

import { siteMetadata } from "@/lib/siteMetaData";
import DocViewer, { PDFRenderer } from "react-doc-viewer";

const DocumentViewer = () => {
  const pdfUrl = `${siteMetadata.siteUrl}`;

  const documents = [
    { uri: pdfUrl, fileType: 'application/pdf' }
  ];

  return (
    <DocViewer
      pluginRenderers={[PDFRenderer]}
      documents={documents}
    />
  );
};

export default DocumentViewer;
