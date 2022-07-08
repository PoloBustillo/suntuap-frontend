import React, { useEffect } from "react";
import NavBar from "./common/navbar";
import CartContainer from "../containers/CartContainer";
import Currency from "./common/currency";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import { Media, Container, Row, Col, Input } from "reactstrap";
import SearchOverlay from "./common/search-overlay";

const HeaderThree = (props) => {
  /*=====================
         Pre loader
         ==========================*/

  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display: none";
    }, 2000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove("fixed");
      } else document.getElementById("sticky").classList.add("fixed");
    } else {
      document.getElementById("sticky").classList.remove("fixed");
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header id="sticky" className="sticky header-2 header-6">
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBarDark
          information={props.information}
          topClass="top-header d-sm-block"
        />

        <Container>
          <Row>
            <Col>
              <div className="main-menu border-section border-top-0">
                <div className="menu-right pull-right">
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={"/assets/images/icon/search.png"}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="12">
              <div className="main-nav-center">
                <NavBar />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <SearchOverlay />
    </div>
  );
};

export default HeaderThree;
