import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";
import { getBannerData } from "../../../../services";

const Data = [
  {
    img: "home1",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home2",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      let data = await getBannerData();
      console.log(data)
      let newData = data.map((oldData) => {
        return {
          img: oldData.attributes.Imagen.data.attributes.url,
          title: oldData.attributes.Subtitulo,
          desc: oldData.attributes.Titulo,
          link: oldData.attributes.Boton.URL.url,
          botonNombre: oldData.attributes.Boton.Nombre,
        }
      })
      setData(newData)
    })();


  }, [])

  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
                botonNombre={data.botonNombre}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
