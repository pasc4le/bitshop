export const submitProduct = (formData) => {
  const {
    stall_id,
    name,
    price,
    quantity,
    images,
    specs,
    description,
    categories,
    privateKey,
    publicKey,
  } = formData;

  const Product = {
    stall_id,
    name,
    price,
    quantity,
    images,
    specs,
    description,
    categories,
  };

  console.dir("Submitted Product:", Product);
};
