import React, { useState } from "react";
import { submitProduct } from "./lib/product"; // Import the function

const ProductInsert = () => {
  const [formData, setFormData] = useState({
    stall_id: "",
    name: "",
    price: "",
    quantity: "",
    images: [],
    specs: [],
    description: "",
    categories: [],
  });

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleArrayChange = (e, key, index) => {
    const arr = [...formData[key]];
    arr[index] = e.target.value;
    setFormData({ ...formData, [key]: arr });
  };

  const addElementToArray = (key) => {
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const isHttpsLink = (link) => /^https:\/\//.test(link);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    submitProduct(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Private Key:
          <input
            type="password"
            onChange={(e) => handleInputChange(e, "privateKey")}
          />
        </label>
        <br />

        <label>
          Public Key:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, "publicKey")}
          />
        </label>
        <br />
        <label>
          Stall ID:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, "stall_id")}
          />
        </label>
        <br />

        <label>
          Name:
          <input type="text" onChange={(e) => handleInputChange(e, "name")} />
        </label>
        <br />

        <label>
          Price:
          <input
            type="number"
            onChange={(e) => handleInputChange(e, "price")}
          />
        </label>
        <br />

        <label>
          Quantity:
          <input
            type="number"
            onChange={(e) => handleInputChange(e, "quantity")}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea onChange={(e) => handleInputChange(e, "description")} />
        </label>
        <br />

        <label>
          Categories:
          {formData.categories.map((cat, index) => (
            <input
              key={index}
              type="text"
              value={cat}
              onChange={(e) => handleArrayChange(e, "categories", index)}
            />
          ))}
          <button type="button" onClick={() => addElementToArray("categories")}>
            +
          </button>
        </label>
        <br />

        <label>
          Images:
          {formData.images.map((img, index) => (
            <div key={index}>
              <input
                type="text"
                value={img}
                onChange={(e) => handleArrayChange(e, "images", index)}
              />
              {!isHttpsLink(img) && <span>Not a valid HTTPS link</span>}
            </div>
          ))}
          <button type="button" onClick={() => addElementToArray("images")}>
            +
          </button>
        </label>
        <br />

        {/* Add more fields like 'specs' if needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductInsert;
