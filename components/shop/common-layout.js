import React, { useEffect, useState } from "react";
import HeaderThree from "../headers/header-three";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import MasterFooter from "../footers/common/MasterFooter";
import { getInformacion } from "../../services";

const CommonLayout = ({ children, title, parent, subTitle, information }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
      </Helmet>
      <HeaderThree
        information={information}
        topClass="top-header"
        logoName="logo.png"
      />
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />
      <>{children}</>
      <MasterFooter
        information={information}
        footerClass={`footer-light `}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
      />
    </>
  );
};

export default CommonLayout;
