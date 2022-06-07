import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass, botonNombre }) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${img})` }} className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1 style={{ color: "whitesmoke" }}>{desc}</h1>
                  <Link href={link}>
                    <a className={`btn btn-solid ${btnClass ? btnClass : ""}`}>
                      {botonNombre ? botonNombre : "Entra"}{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;
