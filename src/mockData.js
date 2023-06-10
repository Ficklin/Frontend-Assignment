const { faker } = require("@faker-js/faker");

module.exports = () => {
  let data = { products: [] };
  for (let i = 0; i < 12; i++) {
    data.products.push({
      id: i,
      fruitName: faker.commerce.productAdjective(),
      description: faker.lorem.sentence(20),
      location: faker.location.country(),
      price: faker.commerce.price(),
      imageUrl: faker.image.urlLoremFlickr({ category: "fruit" }),
    });
  }
  return data;
};
