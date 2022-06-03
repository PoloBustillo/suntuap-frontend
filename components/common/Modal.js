/** @format */

import React, { useState } from "react";
import { Col, Media, Row, Modal, ModalBody, Form, Button } from "reactstrap";
import offerBanner from "../../public/assets/images/Banner.jpeg";
import TextTransition, { presets } from "react-text-transition";
import { getModalInfo } from "../../services";
import { logError } from "../../utils/logger";

const ModalComponent = () => {
  const [modal, setModal] = useState(true);
  const TEXTS = ["Vence", "Construi", "Mejora", "Triunfa"];
  const toggle = () => setModal(!modal);
  const [index, setIndex] = React.useState(0);
  const [modalInfo, setModalInfo] = React.useState();

  React.useEffect(async () => {
    (async () => {
      try {
        let modalInfo = await getModalInfo();
        setModalInfo(modalInfo);
        setModal(modalInfo.attributes.Habilitado)
      } catch (error) {
        console.log(error);
        logError(`No se obtuvo modal`, ModalComponent.name, { error });
      }
    })();


    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="theme-modal modal-md"
      centered
    >
      <div>
        <ModalBody className="modal1">
          <Row className="compare-modal">
            <Col lg="12">
              <div className="modal-bg">
                <Button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <span aria-hidden="true">&times;</span>
                </Button>
                <div className="offer-content">
                  <Media
                    style={{ width: "100%" }}
                    src={modalInfo ? modalInfo.attributes.Imagen ? modalInfo.attributes.Imagen.data.attributes.url : offerBanner : offerBanner}
                    className="margin-auto img-fluid blur-up lazyload"
                    alt=""
                  />

                  <Row>
                    <Col>
                      <div className="banner-text">
                        <h2 style={{ fontSize: "2vw" }}>
                          Solo <span>Unidos </span>
                          <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.wobbly}
                            inline={true}
                          />
                          remos
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        type="submit"
                        className="btn btn-solid"
                        id="mc-submit"
                        onClick={() => {
                          window.open(
                            modalInfo.attributes.BotonModal.link.data.attributes.url,
                            "_blank"
                          );
                        }}
                      >
                        {modalInfo ? modalInfo.attributes.BotonModal.Nombre : "Accede"}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ModalComponent;
