import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./ProductForm.css";

function ProductForm() {
  let params = useParams();
  let [product, setProduct] = useState({
    id: params.productId,
    fruitName: "",
    description: "",
    location: "",
    price: "",
    imageUrl: "",
  });

  let { getProduct, addProduct, updateProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  let { id, fruitName, description, location, price, imageUrl } = product;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await getProduct(id).then((product) => setProduct(product));
    }
    fetch();
  }, [id, getProduct]);

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product);
    } else {
      return updateProduct(product);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addOrUpdate().then((product) => navigate(`/admin`));
  }

  return (
    <div className="formBody productFormview">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="productForm-label">Product Name</Form.Label>
          <Form.Control
            className="productForm-control"
            type="text"
            name="fruitName"
            value={fruitName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="productForm-label">Description</Form.Label>
          <Form.Control
            className="productForm-control"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="productForm-label">Location</Form.Label>
          <Form.Control
            className="productForm-control"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="productForm-label">
            Price (Note: Enter numbers only.)
          </Form.Label>
          <Form.Control
            className="productForm-control"
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="productForm-label">Image Link</Form.Label>
          <Form.Control
            className="productForm-control"
            type="img"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="btnformat">
          <Button type="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductForm;
