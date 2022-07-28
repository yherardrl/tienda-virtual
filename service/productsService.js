const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generateData();
  }

  generateData() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 4000);
    });
  }

  async findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  async update(id, change) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product no found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product no found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
