'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        id: '183377484-fjfjeii3883822s',
        name: 'Freshfruit Main',
        description: 'Freshfruitcreamery Main product',
        product_code: 'FFM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
