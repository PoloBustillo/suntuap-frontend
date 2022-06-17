import React, { useEffect, useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Media, Row, Col } from "reactstrap";
import { getPeriodicos } from "../../../services";
import { Document, Page } from 'react-pdf';

const MasterCollectionData = [
  {
    img: "/assets/images/collection/1.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/3.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/5.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/6.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/7.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/8.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/9.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/11.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
];

const MasterCollection = ({ img, data, type, about, link, btn }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Col lg="3" md="6">
      <div className="collection-block">
        <div>

          <Document file="https://res.cloudinary.com/suntuap-cms-cloudinary/image/upload/v1655177352/Resistencia_Sindical_Octubre_eb102be597.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="collection-content">

          <h3>{data.attributes.Nombre}</h3>
          <a href={link} className="btn btn-outline">
            Leer
          </a>
        </div>
      </div>
    </Col>
  );
};

const Collection = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    (async () => {
      let news = await getPeriodicos()
      console.log(news)
      setNews(news)
    })();

  }, [])

  return (
    <CommonLayout parent="SUNTUAP" title="Periódico">
      <section className="collection section-b-space ratio_square ">
        <Container>
          <Row className="partition-collection">
            {news.map((data, i) => {
              return (
                <MasterCollection
                  key={i}
                  img={"/assets/images/collection/1.jpg"}
                  data={data}
                />
              );
            })}
          </Row>

        </Container>
      </section>
    </CommonLayout>
  );
};

export default Collection;
