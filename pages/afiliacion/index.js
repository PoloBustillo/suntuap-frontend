import React, { useEffect, useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col } from "reactstrap";
import { getInformacion, getPeriodicos } from "../../services";
import { Document, Page } from "react-pdf";
import dynamic from "next/dynamic";
import ProductList from "../shop/common/productList";
import FilterPage from "../shop/common/filter";

const PDFViewer = dynamic(() => import("../../components/pdf-viewer"), {
  ssr: false,
});

const Collection = (props) => {
  const [news, setNews] = useState([]);
  const [sidebarView, setSidebarView] = useState(false);
  const openCloseSidebar = () => {
    if (sidebarView) {
      setSidebarView(!sidebarView);
    } else {
      setSidebarView(!sidebarView);
    }
  };

  useEffect(() => {
    (async () => {
      let news = await getPeriodicos();
      console.log(news);
      setNews(news);
    })();
  }, []);

  return (
    <CommonLayout information={props.info} parent="SUNTUAP" title="Afiliación">
      <section className="section-b-space ratio_asos">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <ProductList
                colClass="col-xl-3 col-6 col-grid-box"
                openSidebar={() => openCloseSidebar(sidebarView)}
              />
              <FilterPage
                sm="3"
                sidebarView={sidebarView}
                closeSidebar={() => openCloseSidebar(sidebarView)}
              />
            </Row>
          </Container>
        </div>
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
