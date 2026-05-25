import { faker } from "@faker-js/faker";

export const fakeProducts = () => {
  return Array.from({ length: 25 }, (_, idx) => {
    return {
      productId: idx + 1,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 100, max: 500 }),
    };
  });
};
