'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [
      {
        id: 'eyyfhds1jjjfjjs2nnda-1dns',
        name: 'Admin Client',
        secret: 'ADMIN',
        url: 'https://console.freshfruitcreamery.com',
        product_id: '183377484-fjfjeii3883822s',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {});
  },
};
