const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generateData();
  }

  generateData() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        address: faker.address.country(),
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }
  findOne(id) {
    return this.users.find((user) => user.id === id);
  }

  update(id, change) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error({
        message: 'user not found',
      });
    }
    const userUpdate = this.users[index];
    this.users[index] = {
      ...userUpdate,
      ...change,
    };
    return this.users[index];
  }
  delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error({
        message: 'user not found',
      });
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
