import React, { useEffect, useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col } from "reactstrap";
import { getInformacion, getPeriodicos } from "../../services";
import { Document, Page } from "react-pdf";

const MasterCollection = ({ img, data, type, about, link, btn, info }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Col lg="3" md="6">
      <div className="collection-block">
        <div>
          <Document
            file={"./Periodico.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="collection-content">
          <h3>{data.attributes.Nombre}</h3>
          <a
            href={data.attributes.Periodico.data.attributes.url}
            className="btn btn-outline"
          >
            Leer
          </a>
        </div>
      </div>
    </Col>
  );
};

const Collection = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      let news = await getPeriodicos();
      console.log(news);
      setNews(news);
    })();
  }, []);

  return (
    <CommonLayout information={props.info} parent="SUNTUAP" title="MISION">
      <section className="collection section-b-space ratio_square ">
        <Container>
          <Row className="partition-collection"></Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export async function getStaticProps() {
  const res = await getInformacion();
  return {
    props: {
      info: { ...res.attributes },
    },
    revalidate: 10, // In seconds
  };
}
export default Collection;
