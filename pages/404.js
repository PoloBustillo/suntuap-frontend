import React from "react";
import CommonLayout from "../components/shop/common-layout";
import { Container, Row, Col } from "reactstrap";
import { getInformacion } from "../services";

const Page404 = (props) => {
  return (
    <CommonLayout information={props.info} parent="home" title="404">
      <section className="p-0">
        <Container>
          <Row>
            <Col sm="12">
              <div className="error-section">
                <h1>404</h1>
                <h2>page not found</h2>
                <a href="/" className="btn btn-solid">
                  back to home
                </a>
              </div>
            </Col>
          </Row>
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
export default Page404;
