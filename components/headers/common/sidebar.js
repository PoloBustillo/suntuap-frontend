import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import {
  getDelegaciones,
  getDocumentos,
  getNoticiasMenu,
  getSecretarias,
  getSuntuapMenu,
  getVaquerias,
} from "../../../services";
import Link from "next/link";

const SideBar = () => {
  const [data, setData] = useState([]);
  const [dataDelegaciones, setDataDelegaciones] = useState([]);
  const [dataDocumentos, setDataDocumentos] = useState([]);
  const [dataSuntuap, setDataSuntuap] = useState([]);
  const [dataNoticias, setDataNoticias] = useState([]);
  const [dataVaquerias, setDataVaquerias] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await getDelegaciones();
      setDataDelegaciones(data);
    })();

    (async () => {
      let data = await getSecretarias();
      setData(data);
    })();

    (async () => {
      let data = await getDocumentos();
      setDataDocumentos(data);
    })();

    (async () => {
      let data = await getSuntuapMenu();
      setDataSuntuap(data);
    })();

    (async () => {
      let data = await getNoticiasMenu();
      setDataNoticias(data);
    })();

    (async () => {
      let data = await getVaquerias();
      setDataVaquerias(data);
    })();
  }, []);

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
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                SUNTUAP
                <span className="sub-arrow"></span>
              </a>
              <ul>
                {dataSuntuap.map((menuItem) => {
                  return (
                    <li>
                      <Link href={menuItem.attributes.Menu.URL.url}>
                        {menuItem.attributes.Menu.Nombre}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                Directorio
                <span className="sub-arrow"></span>
              </a>

              <ul className="mega-menu clothing-menu">
                <Row m="0">
                  {data.map((secretaria) => {
                    return (
                      <Col xl="4">
                        <li>
                          <a onClick={(e) => handleSubmenu(e)}>
                            {secretaria.attributes.Secretaria}
                            <span className="sub-arrow"></span>
                          </a>
                          {secretaria.attributes.Miembro.map((miembro) => {
                            return (
                              <ul>
                                <li style={{ fontSize: "5 px" }}>
                                  <a
                                    href={secretaria.attributes.URL.url}
                                    style={{ fontSize: "5 px" }}
                                  >
                                    <i
                                      style={{
                                        fontSize: "12px",
                                        color: "#bbb",
                                        textAlign: "center",
                                      }}
                                      className="fa fa-user"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    {miembro.Nombre}
                                  </a>
                                  <a
                                    href={secretaria.attributes.URL.url}
                                    style={{
                                      fontSize: "5 px",
                                      overflow: "overlay",
                                    }}
                                  >
                                    <i
                                      style={{
                                        fontSize: "8px",
                                        color: "#bbb",
                                        textAlign: "center",
                                      }}
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    {miembro.Email}
                                  </a>
                                </li>
                              </ul>
                            );
                          })}
                        </li>
                      </Col>
                    );
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
                  {dataDelegaciones.map((delegaciones) => {
                    return (
                      <li>
                        <a
                          href={delegaciones.attributes.Delegacion.URL.url}
                          onClick={(e) => handleSubmenu(e)}
                        >
                          {delegaciones.attributes.Delegacion.Nombre}
                        </a>
                      </li>
                    );
                  })}
                </Row>
              </ul>
            </li>
            <li>
              <a href="/afiliacion">Afiliación</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Documentos Básicos
                <span className="sub-arrow"></span>
              </a>

              <ul>
                {dataDocumentos.map((doc) => {
                  console.log(doc.attributes.Menu.URL);
                  if (doc.attributes.Menu.Submenu.length != 0) {
                    let subMenus = doc.attributes.Menu.Submenu.map((menu) => {
                      return (
                        <li>
                          <Link href={menu.URL}>{menu.Nombre}</Link>
                        </li>
                      );
                    });
                    return (
                      <li>
                        <Link href={doc.attributes.Menu.URL.url}>
                          <a onClick={(e) => handleSubmenu(e)}>
                            {doc.attributes.Menu.Nombre}
                            <span className="sub-arrow"></span>
                          </a>
                        </Link>

                        <ul>{subMenus}</ul>
                      </li>
                    );
                  } else {
                    return (
                      <li>
                        <Link href={doc.attributes.Menu.URL.url}>
                          <a>{doc.attributes.Menu.Nombre}</a>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Noticias/Comunicados
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <Row m="0">
                  {dataNoticias.map((noticias) => {
                    return (
                      <li>
                        <Link href={noticias.attributes.Menu.URL.url}>
                          {noticias.attributes.Menu.Nombre}
                        </Link>
                      </li>
                    );
                  })}
                </Row>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Proyecto de vivienda
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <Row m="0">
                  {dataVaquerias.map((doc) => {
                    if (doc.attributes.Menu.Submenu.length != 0) {
                      let subMenus = doc.attributes.Menu.Submenu.map((menu) => {
                        return (
                          <li>
                            <a href={menu.URL}>{menu.Nombre}</a>
                          </li>
                        );
                      });
                      return (
                        <li>
                          <a
                            href={doc.attributes.Menu.URL.url}
                            onClick={(e) => handleSubmenu(e)}
                          >
                            {doc.attributes.Menu.Nombre}
                            <span className="sub-arrow"></span>
                          </a>

                          <ul>{subMenus}</ul>
                        </li>
                      );
                    } else {
                      return (
                        <li>
                          <a
                            href={doc.attributes.Menu.URL}
                            onClick={(e) => handleSubmenu(e)}
                          >
                            {doc.attributes.Menu.Nombre}
                          </a>
                        </li>
                      );
                    }
                  })}
                </Row>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
