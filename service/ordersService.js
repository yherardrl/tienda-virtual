const faker = require('faker');

class OrdersService {
  constructor() {
    this.orders = [];
    this.generatorOrders();
  }

  generatorOrders() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.orders.push({
        id: faker.datatype.uuid(),
        date: faker.datatype.datetime(),
        user: faker.name.firstName(),

        products: [
          {
            productName: faker.commerce.product(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
          },
          {
            productName: faker.commerce.product(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
          },
        ],
        total: parseInt(faker.commerce.price(), 10),
      });
    }
  }

  createOrder(data) {
    const newOrder = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findOrders() {
    return this.orders;
  }

  findOneOrder(id) {
    return this.orders.find((order) => order.id === id);
  }

  updateOrder(id, data) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index === -1) {
      throw new Error({
        message: 'order not found',
      });
    }
    const orderUpdated = this.orders[index];
    this.orders[index] = {
      ...orderUpdated,
      ...data,
    };
    return this.order[index];
  }

  deleteOrder(id) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index === -1) {
      throw new Error({
        message: 'order not found',
      });
    }
    this.orders.splice(index, 1);
    return id;
  }
}

module.exports = OrdersService;
