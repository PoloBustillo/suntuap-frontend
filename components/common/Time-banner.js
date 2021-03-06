import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { getContadorInfo } from "../../services";
import CountdownComponent from "./widgets/countdownComponent";

const TimeBanner = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      let data = await getContadorInfo();
      setData(data.attributes);
    })();
  }, []);

  return (
    <section>
      <Container style={{ cursor: "pointer" }}>
        <Link target={"_blank"} href={data.Link ? data.Link : ""}>
          <Row className="banner-timer">
            <Col md="6">
              <div className="banner-text">
                <h2>
                  <span>{data.Titulo}</span>
                </h2>
              </div>
            </Col>
            <Col md="6">
              <CountdownComponent date={data.Fin_evento} />
            </Col>
          </Row>
        </Link>
      </Container>
    </section>
  );
};

export default TimeBanner;
