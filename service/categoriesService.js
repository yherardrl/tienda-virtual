const faker = require('faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.categoriesGenerator();
  }

  categoriesGenerator() {
    const limit = 6;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      });
    }
  }
  createCategory(data) {
    const newCtegory = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCtegory);
  }

  findCategory() {
    return this.categories;
  }

  findOneCategory(id) {
    return this.categories.find((category) => category.id === id);
  }

  updateCategory(id, change) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new Error({
        message: 'Category not found',
      });
    }
    const updateCategory = this.categories[index];
    this.categories[index] = {
      ...updateCategory,
      ...change,
    };
    return this.categories[index];
  }

  deleteCategory(id) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new Error({
        message: 'Category not found',
      });
    }
    return this.categories.splice(index, 1);
  }
}

module.exports = CategoriesService;
