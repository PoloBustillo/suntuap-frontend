import { useState } from "react";
// import default react-pdf entry
import { Document, Page } from "react-pdf";
import { SizeMe } from "react-sizeme";
import { pdfjs } from "react-pdf";
import { Button, Col, Row } from "reactstrap";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(props) {
  const [file, setFile] = useState("/sample.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <SizeMe
      monitorHeight
      refreshRate={128}
      refreshMode={"debounce"}
      render={({ size }) => (
        <div>
          <Row className="my-4">
            <Col className="ml-4">
              <Button
                color="info"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Anterior
              </Button>
              <Button
                color="info"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Siguiente
              </Button>
            </Col>
            <Col className="m-auto">
              <p>
                Página {pageNumber || (numPages ? 1 : "--")} de{" "}
                {numPages || "--"}
              </p>
            </Col>
          </Row>

          <Document
            file={props.file ? props.file : file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <div>
              <Page width={size.width} pageNumber={pageNumber} />
            </div>
          </Document>
          <Row className="my-4">
            <Col>
              <Button
                color="info"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Anterior
              </Button>
              <Button
                color="info"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Siguiente
              </Button>
            </Col>
            <Col className="mx-auto">
              <p>
                Página {pageNumber || (numPages ? 1 : "--")} de{" "}
                {numPages || "--"}
              </p>
            </Col>
          </Row>
        </div>
      )}
    />
  );
}
