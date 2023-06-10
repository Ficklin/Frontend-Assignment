import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { Button, Form, Dropdown } from "react-bootstrap";
import axios from "axios";

// I cannot get this component to display to verify functionality and design.

function CustAdvFeature(props) {
  const params = useParams();
  const { getProduct } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [search, setSearch] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (params.id) {
      const { id, fruitName, description, location, price } = getProduct(
        params.id
      );
      setProduct({ id, fruitName, description, location, price });
    }
  }, [getProduct, params.id]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/products?q=${search}`
      );
      setProduct(response.data.product);
      setSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSort = async (e, sortOrder) => {
    let { product } = e.target.value;
    setSortValue(product.price);
    return await axios
      .get(
        `http://localhost:3001/products?_sort=${product.price}&_order=${sortOrder}`
      )
      .then((response) => {
        setSortValue(response.data);
      })
      .catch((err) => console.log(err));
  };
  const filter300 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/products?price_gte=0&price_lte=300"
      );
      setFilter(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filter700 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/products?price_gte=301&price_lte=700"
      );
      setFilter(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterMore701 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/products?price_gte=701"
      );
      setFilter(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <div className="container-fluid">
      <>
        <div>
          <Button
            variant="dark"
            onChange={(e) => handleSort(e, "asc")}
            value={sortValue}
          >
            Price Ascending
          </Button>{" "}
          <Button variant="dark" onChange={(e) => handleSort(e, "desc")}>
            Price Descending
          </Button>
          <Form className="d-inline-flex p-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={search}
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </Form>
          <Dropdown className="d-inline-flex p-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Price Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={filter300}>Up to $300</Dropdown.Item>
              <Dropdown.Item onClick={filter700}>
                Between $301 to $700
              </Dropdown.Item>
              <Dropdown.Item onClick={filterMore701}>701 or more</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>
    </div>
  );
}

export default CustAdvFeature;
