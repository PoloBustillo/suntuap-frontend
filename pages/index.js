import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import TopCollection from "../components/common/Collections/Collection3";
import Parallax from "./layouts/Fashion/Components/Parallax";
import ServiceLayout from "../components/common/Service/service1";
import Blog from "../components/common/Blog/peliculas";
import Instagram from "../components/common/instagram/instagram1";
import LogoBlock from "../components/common/logo-block";
import HeaderTwo from "../components/headers/header-two";
import { Product4 } from "../services/script";
import Paragraph from "../components/common/Paragraph";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import { getInformacion } from "../services";

const Fashion = (props) => {
  return (
    <>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/sun_logo.jpeg"} />
      </Helmet>
      <ModalComponent />
      <HeaderTwo information={props.info} logoName={"logo.png"} topClass="top-header" />
      <Banner />

      <Blog type="fashion" title="title1" inner="title-inner1" />



      <CollectionBanner />
      <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
      <TopCollection
        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Product4}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
      />
      <Parallax />

      <ServiceLayout sectionClass="border-section small-section" />

      <Instagram type="fashion" />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterFooter
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
  const res = await getInformacion()
  return {
    props: {
      info: { ...res.attributes },
    },
    revalidate: 10, // In seconds
  }
}

export default Fashion;
