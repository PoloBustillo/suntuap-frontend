import React from "react";
import { useRouter } from "next/router";
import CommonLayout from "../../../../components/shop/common-layout";
import { Container, Form, Input, Label, Media, Row, Col } from "reactstrap";
import { getInformacion } from "../../../../services";
import { Document, Page } from "react-pdf";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../../../../components/pdf-viewer"), {
  ssr: false,
});

const PeriodicoContent = (props) => {
  const router = useRouter();
  const id = router.query.slug;
  const url = router.query.url;
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <CommonLayout information={props.info} parent="SUNTUAP" title={id}>
      <section className="blog-detail-page section-b-space ratio2_3">
        <Container>
          <Row>
            <Col sm="12" className="blog-detail">
              <Row>
                <PDFViewer file={url} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "kaskkda" } }],
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps() {
  const res = await getInformacion();
  return {
    props: {
      info: { ...res.attributes },
    },
    revalidate: 10, // In seconds
  };
}
export default PeriodicoContent;
