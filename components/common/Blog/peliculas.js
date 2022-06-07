/** @format */

import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";


import { Slider3 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";
import { getProyeccionesInfo } from "../../../services";



const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      let data = await getProyeccionesInfo();
      console.log("PRO", data)
      setData(data)
    })();


  }, [])
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h4>últimas proyecciones</h4>
                <h2 className={inner}>ciclo de cine</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider {...Slider3} className="slide-3 no-arrow ">
                {data &&
                  data.map((item, index) => (
                    <Col md="12" key={index}>
                      <Link href={`/blogs/blog_detail`}>
                        <div className="classic-effect">
                          <Media src={item.attributes.poster.data.attributes.url} className="img-fluid" alt="" />
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.attributes.Titulo}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <div
                            dangerouslySetInnerHTML={{ __html: item.attributes.Sinopsis }}
                          />

                        </Link>
                        <hr className="style1" />
                        <h6>fecha: {item.attributes.Fecha}</h6>
                      </div>
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;
