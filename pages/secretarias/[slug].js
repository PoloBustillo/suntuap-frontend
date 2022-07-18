import React, { useEffect, useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col } from "reactstrap";
import { getInformacion } from "../../services";
import { useRouter } from "next/router";

const Collection = (props) => {
  console.log(props);

  const router = useRouter();

  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <CommonLayout information={props.info} parent="SUNTUAP" title="SECRETARIAS">
      <section className="collection section-b-space ratio_square ">
        <Container>
          <Row className="partition-collection"></Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "kaskkda" } }],
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps() {
  const res = await getInformacion();
  return {
    props: {
      info: { ...res.attributes },
    },
    revalidate: 10, // In seconds
  };
}
export default Collection;
