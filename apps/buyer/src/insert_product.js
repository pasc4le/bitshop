import React, { useState } from "react";
import { submitProduct, submitStall } from "./lib/product.ts"; // Import the function

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
    shipping: [],
  });

  const [form, setForm] = useState({
    privateKey: "",
    publicKey: "",
    stallName: "",
    stallDescription: "",
    shippingZones: [{ name: "", cost: "", regions: "" }],
  });

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleChangeStall = (e, index, field) => {
    const value = e.target.value;
    if (field !== "shippingZones") {
      setForm({
        ...form,
        [field]: value,
      });
    } else {
      const newShippingZones = [...form.shippingZones];
      newShippingZones[index][e.target.name] = value;
      setForm({
        ...form,
        shippingZones: newShippingZones,
      });
    }
  };

  const addShippingZone = () => {
    setForm({
      ...form,
      shippingZones: [
        ...form.shippingZones,
        { name: "", cost: "", regions: "" },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Perform submission logic here
  };

  const handleArrayChange = (e, key, index, subIndex = null) => {
    const arr = [...formData[key]];

    if (subIndex !== null) {
      arr[index][subIndex] = e.target.value;
    } else {
      arr[index] = e.target.value;
    }

    setFormData({ ...formData, [key]: arr });
  };

  // const addElementToArraySpec = (key, initialVal = "") => {
  //   const arr = [...formData[key], initialVal];
  //   setFormData({ ...formData, [key]: arr });
  // };

  const addSpecToArray = () => {
    const arr = [...formData.specs, ["", ""]];
    setFormData({ ...formData, specs: arr });
  };

  const addZoneToArray = () => {
    const newObj = { id: "", cost: "" };
    const arr = [...formData.shipping, newObj];
    setFormData({ ...formData, shipping: arr });
    console.log(newObj);
  };

  const addElementToArray = (key) => {
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const isHttpsLink = (link) => /^https:\/\//.test(link);

  const handleSubmitProduct = (e) => {
    e.preventDefault(); // Prevent default form submission
    submitProduct(formData);
  };

  const handleSubmitStall = (e) => {
    e.preventDefault(); // Prevent default form submission
    submitStall(form);
  };

  return (
    <div>
      <h2>Stall Insertion:</h2>
      <form onSubmit={handleSubmitStall}>
        <input
          type="text"
          placeholder="Private Key"
          value={form.privateKey}
          onChange={(e) => handleChangeStall(e, null, "privateKey")}
        />
        <input
          type="text"
          placeholder="Public Key"
          value={form.publicKey}
          onChange={(e) => handleChangeStall(e, null, "publicKey")}
        />
        <input
          type="text"
          placeholder="Stall Name"
          value={form.stallName}
          onChange={(e) => handleChangeStall(e, null, "stallName")}
        />
        <input
          type="text"
          placeholder="Stall Description"
          value={form.stallDescription}
          onChange={(e) => handleChangeStall(e, null, "stallDescription")}
        />
        <div>
          Insert shipping zones below:
          <br />
          {form.shippingZones.map((zone, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={zone.name}
                onChange={(e) => handleChangeStall(e, index, "shippingZones")}
              />
              <input
                type="number"
                name="cost"
                placeholder="Cost"
                value={zone.cost}
                onChange={(e) => handleChangeStall(e, index, "shippingZones")}
              />
              <input
                type="text"
                name="regions"
                placeholder="Regions (comma-separated)"
                value={zone.regions}
                onChange={(e) => handleChangeStall(e, index, "shippingZones")}
              />
            </div>
          ))}
          <button type="button" onClick={addShippingZone}>
            +
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <h2>Product Insertion:</h2>
        <form onSubmit={handleSubmitProduct}>
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
            Shipping Zones (must be a subset of those of the stall):
            {formData.shipping.map((spec, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="One of the shipping zones of the stall"
                  value={spec[0]}
                  onChange={(e) =>
                    handleArrayChange(e, "shipping", index, "id")
                  }
                />
                <input
                  type="number"
                  placeholder="Additional cost of item"
                  value={spec[1]}
                  onChange={(e) =>
                    handleArrayChange(e, "shipping", index, "cost")
                  }
                />
              </div>
            ))}
            <button type="button" onClick={addZoneToArray}>
              +
            </button>
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
            <button
              type="button"
              onClick={() => addElementToArray("categories")}
            >
              +
            </button>
          </label>
          <br />
          <label>
            Specs:
            {formData.specs.map((spec, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Spec type"
                  value={spec[0]}
                  onChange={(e) => handleArrayChange(e, "specs", index, 0)}
                />
                <input
                  type="text"
                  placeholder="Spec value"
                  value={spec[1]}
                  onChange={(e) => handleArrayChange(e, "specs", index, 1)}
                />
              </div>
            ))}
            <button type="button" onClick={addSpecToArray}>
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
    </div>
  );
};

export default ProductInsert;
