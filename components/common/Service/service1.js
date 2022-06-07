import React from "react";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
} from "../../../services/script";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "Misión",
    service: "....",
  },
  {
    link: svgservice,
    title: "Visión",
    service: "...",
  },
  {
    link: svgoffer,
    title: "Objetivos",
    service: "...",
  },
];

const ServiceLayout = ({ sectionClass }) => {
  return (
    <Container style={{ paddingBottom: "70px" }} >
      <section className={sectionClass}>
        <Row >
          {Data.map((data, index) => {
            return (
              <Col md="4" className="service-block" key={index}>
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default ServiceLayout;
