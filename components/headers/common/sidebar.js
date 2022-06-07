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
                Afiliación
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">proceso</a>
                </li>
                <li>
                  <a href="#">documentos</a>
                </li>
                <li>
                  <a href="#">eventos</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Vaquerias
                <span className="sub-arrow"></span>
              </a>
              <ul>

                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sección 1
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">eventos</a>
                    </li>
                    <li>
                      <a href="#">finanzas</a>
                    </li>
                    <li>
                      <a href="#">noticias</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sección 2
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">eventos</a>
                    </li>
                    <li>
                      <a href="#">finanzas</a>
                    </li>
                    <li>
                      <a href="#">noticias</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sección 3
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">eventos</a>
                    </li>
                    <li>
                      <a href="#">finanzas</a>
                    </li>
                    <li>
                      <a href="#">noticias</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sección 4
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">eventos</a>
                    </li>
                    <li>
                      <a href="#">finanzas</a>
                    </li>
                    <li>
                      <a href="#">noticias</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sección 5
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">eventos</a>
                    </li>
                    <li>
                      <a href="#">finanzas</a>
                    </li>
                    <li>
                      <a href="#">noticias</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Otros
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">Blog 1</a>
                </li>
                <li>
                  <a href="#">Blog 2</a>
                </li>
                <li>
                  <a href="#">Blog 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
