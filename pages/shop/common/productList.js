import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";

const GET_PRODUCTS = gql`
  query products(
    $type: _CategoryType!
    $indexFrom: Int!
    $limit: Int!
    $color: String!
    $brand: [String!]!
    $sortBy: _SortBy!
    $priceMax: Int!
    $priceMin: Int!
  ) {
    products(
      type: $type
      indexFrom: $indexFrom
      limit: $limit
      color: $color
      brand: $brand
      sortBy: $sortBy
      priceMax: $priceMax
      priceMin: $priceMin
    ) {
      total
      hasMore
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const router = useRouter();
  const [limit, setLimit] = useState(8);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [sortBy, setSortBy] = useState("AscOrder");
  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();

  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname);
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  var { loading, data, fetchMore } = [];

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: data.products.items.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            setIsLoading(false);
            return {
              products: {
                __typename: prev.products.__typename,
                total: prev.products.total,
                items: [
                  ...prev.products.items,
                  ...fetchMoreResult.products.items,
                ],
                hasMore: fetchMoreResult.products.hasMore,
              },
            };
          },
        }),
      1000
    );
  };

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <div className="top-banner-wrapper">
              <a href={null}>
                <Media
                  src={"/afiliacion.png"}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </a>
              <Row className="partition-collection">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdAR2QsRuFcsjgieVaCS75a2wxoVk8i4-rASnTe619IPlNATg/viewform?embedded=true"
                  width="100%"
                  height="6036"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Cargando…
                </iframe>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;
