import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import firebase from "../../../config/base";
import { useRouter } from "next/router";
import { getInformacion } from "../../../services";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const [information, setInformation] = useState({})
  useEffect(() => {
    (async () => {
      let data = await getInformacion()

      setInformation(data.attributes)
    })();
  }, [])

  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <a href={`tel:${information.Telefono}`}>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>Tel: {information.Telefono}
                  </li>
                </a>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> Mi Cuenta
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`/page/account/login`}>
                      <a>Acceder</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/page/account/register`}>
                      <a>Registrar</a>
                    </Link>
                  </li>
                  <li onClick={() => { console.log("LOGOUT") }}>
                    <a>Salir</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
