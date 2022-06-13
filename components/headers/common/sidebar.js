import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Media } from "reactstrap";
import { getContadorInfo, getSecretarias } from "../../../services";

const SideBar = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      let data = await getSecretarias();
      setData(data)
    })();
  }, [])

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
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                SUNTUAP
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="/mision-suntuap">Misión</a>
                </li>
                <li>
                  <a href="/vision-suntuap">Visión</a>
                </li>
                <li>
                  <a href="/hitoria-suntuap">Historia</a>
                </li>
                <li>
                  <a href="/organigrama" >
                    Organigrama
                  </a>
                </li>
                <li>
                  <a href="/padron" >
                    Padrón
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                Directorio
                <span className="sub-arrow"></span>
              </a>

              <ul className="mega-menu clothing-menu">
                <Row m="0">
                  {data.map(secretaria => {
                    return (
                      <Col xl="4">
                        <li>
                          <a href="#" onClick={(e) => handleSubmenu(e)}>
                            {secretaria.attributes.Nombre}
                            <span className="sub-arrow"></span>
                          </a>
                          <ul >
                            <li style={{ fontSize: "10px" }}>
                              <a href="#">{secretaria.attributes.Encargado}</a>
                              <a href="#">{secretaria.attributes.Email}</a>
                            </li>
                          </ul>
                        </li>
                      </Col>
                    )
                  })}
                </Row>

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
      </div >
    </Fragment >
  );
};

export default SideBar;
