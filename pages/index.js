import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Noticias";
import TimeBanner from "../components/common/Time-banner";
import Parallax from "./layouts/Fashion/Components/Parallax";
import ServiceLayout from "../components/common/Service/service1";
import Blog from "../components/common/Blog/peliculas";
import Instagram from "../components/common/instagram/instagram1";
import HeaderTwo from "../components/headers/header-two";

import Paragraph from "../components/common/Mensajes";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import { getInformacion } from "../services";
import VideoSection from "./layouts/Beauty/components/Video-Section";

const Fashion = (props) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/sun_logo.jpeg"}
        />
      </Helmet>
      <ModalComponent />
      <HeaderTwo
        info={props.info}
        logoName={"logo.png"}
        topClass="top-header"
      />
      <Banner />
      <TimeBanner />
      {/* <CollectionBanner />
      <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
      <Parallax /> 
      <ServiceLayout sectionClass="border-section small-section" />

      <div className="section-b-space">
        <VideoSection />
      </div>
      <Blog type="fashion" title="title1" inner="title-inner1" />

      <Instagram type="fashion" />*/}
      <MasterFooter
        information={props.info}
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export async function getStaticProps() {
  const res = await getInformacion();
  return {
    props: {
      info: { ...res.attributes },
    },
    revalidate: 10, // In seconds
  };
}

export default Fashion;
