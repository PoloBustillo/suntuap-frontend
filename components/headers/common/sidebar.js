import React, { Fragment } from "react";
import { Row, Col, Media } from "reactstrap";

const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
        <nav>
          <a href={null} onClick={closeNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Atrás
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            <li>
              <a href="/">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                Eventos
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu clothing-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>Culturales</h5>
                        <ul>
                          <li>
                            <a href="#">Proyecciones</a>
                          </li>
                        </ul>
                        <h5>Políticos</h5>
                        <ul>
                          <li>
                            <a href="#">evento 1</a>
                          </li>
                          <li>
                            <a href="#">evento 2</a>
                          </li>
                          <li>
                            <a href="#">evento 3</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>Sociales</h5>
                        <ul>
                          <li>
                            <a href="#">evento 1</a>
                          </li>
                          <li>
                            <a href="#">evento 2</a>
                          </li>
                          <li>
                            <a href="#">evento 3</a>
                          </li>
                          <li>
                            <a href="#">evento 4</a>
                          </li>
                          <li>
                            <a href="#">evento 5</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <a href="#" className="mega-menu-banner">
                        <Media src={"/assets/images/mega-menu/fashion.jpg"} alt="" className="img-fluid" />
                      </a>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Secretarías
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">Finanzas</a>
                </li>
                <li>
                  <a href="#">Relaciones Exteriores</a>
                </li>
                <li>
                  <a href="#">Prensa y propaganda</a>
                </li>
                <li>
                  <a href="#" >
                    Formación Política
                  </a>
                </li>
                <li>
                  <a href="#" >
                    Vivienda
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                footwear
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">sport shoes</a>
                </li>
                <li>
                  <a href="#">formal shoes</a>
                </li>
                <li>
                  <a href="#">casual shoes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">watches</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Accessories
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">fashion jewellery</a>
                </li>
                <li>
                  <a href="#">caps and hats</a>
                </li>
                <li>
                  <a href="#">precious jewellery</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    more..
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">necklaces</a>
                    </li>
                    <li>
                      <a href="#">earrings</a>
                    </li>
                    <li>
                      <a href="#">wrist wear</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleSubThreeMenu(e)}>
                        accessories
                        <span className="sub-arrow"></span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">ties</a>
                        </li>
                        <li>
                          <a href="#">cufflinks</a>
                        </li>
                        <li>
                          <a href="#">pockets squares</a>
                        </li>
                        <li>
                          <a href="#">helmets</a>
                        </li>
                        <li>
                          <a href="#">scarves</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => handleSubFourMenu(e)}>
                            more...
                            <span className="sub-arrow"></span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">accessory gift sets</a>
                            </li>
                            <li>
                              <a href="#">travel accessories</a>
                            </li>
                            <li>
                              <a href="#">phone cases</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">belts & more</a>
                    </li>
                    <li>
                      <a href="#">wearable</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">house of design</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                beauty & personal care
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">makeup</a>
                </li>
                <li>
                  <a href="#">skincare</a>
                </li>
                <li>
                  <a href="#">premium beaty</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    more
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">fragrances</a>
                    </li>
                    <li>
                      <a href="#">luxury beauty</a>
                    </li>
                    <li>
                      <a href="#">hair care</a>
                    </li>
                    <li>
                      <a href="#">tools & brushes</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">home & decor</a>
            </li>
            <li>
              <a href="#">kitchen</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
