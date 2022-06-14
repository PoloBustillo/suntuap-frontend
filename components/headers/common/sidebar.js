import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Media } from "reactstrap";
import { getContadorInfo, getDelegaciones, getSecretarias } from "../../../services";

const SideBar = () => {
  const [data, setData] = useState([])
  const [dataDelegaciones, setDataDelegaciones] = useState([])

  useEffect(() => {

    (async () => {
      let data = await getDelegaciones();
      setDataDelegaciones(data)
    })();

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
                            <li>
                              <a href="#" style={{ fontSize: "8 px" }}><i style={{ fontSize: "12px", color: "#bbb", textAlign: 'center' }} className="fa fa-user" aria-hidden="true"></i> {secretaria.attributes.Encargado}</a>
                              <a href="#" style={{ fontSize: "7 px" }}><i style={{ fontSize: "12px", color: "#bbb", textAlign: 'center' }} className="fa fa-envelope" aria-hidden="true"></i> {secretaria.attributes.Email}</a>
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
                Delegaciones
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <Row m="0">
                  {dataDelegaciones.map(delegaciones => {
                    return (

                      <li>
                        <a href="#" onClick={(e) => handleSubmenu(e)}>
                          {delegaciones.attributes.Nombre}
                        </a>
                      </li>

                    )
                  })}
                </Row>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Afiliación
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">Padrón</a>
                </li>
                <li>
                  <a href="#">Miembros Activos</a>
                </li>
                <li>
                  <a href="#">Jubilados</a>
                </li>
                <li>
                  <a href="#">Adjudicatarios</a>
                </li>
                <li>
                  <a href="#">Afiliaciones</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Documentos Básicos
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">Contrato Colectivo de Trabajo</a>
                </li>
                <li>
                  <a href="#">Estatutos</a>
                </li>
                <li>
                  <a href="#">Comparación entre contratos colectivos</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubmenu(e)}>
                    Publicaciones
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Periódico sindical Resistencia</a>
                    </li>
                    <li>
                      <a href="#">Convocatorias</a>
                    </li>
                    <li>
                      <a href="#">Fotografías</a>
                    </li>
                    <li>
                      <a href="#">Videos</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Bibliografía sindical</a>
                </li>
                <li>
                  <a href="#">Historia obrera</a>
                </li>

              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Proyecto de vivienda
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


          </ul>
        </nav>
      </div >
    </Fragment >
  );
};

export default SideBar;
