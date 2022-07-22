import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Collapse, Input } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";

const Brand = () => {
  const context = useContext(FilterContext);
  const isChecked = context.isChecked;
  const filterChecked = context.filterChecked;
  const [isOpen, setIsOpen] = useState(false);
  const toggleBrand = () => setIsOpen(!isOpen);

  var { loading, data } = [];

  return (
    <div className="collection-collapse-block open">
      <h3 className="collapse-block-title" onClick={toggleBrand}>
        Eventos
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
            {!data || !data.getBrands || data.getBrands.length === 0 || loading
              ? "loading"
              : data &&
                data.getBrands.brand.map((brand, index) => (
                  <div
                    className="custom-control custom-checkbox collection-filter-checkbox"
                    key={index}
                  >
                    <Input
                      checked={context.selectedBrands.includes(brand)}
                      onChange={() => {
                        context.handleBrands(brand, isChecked);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id={brand}
                    />
                    <label className="custom-control-label" htmlFor={brand}>
                      {brand}
                    </label>
                  </div>
                ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Brand;
