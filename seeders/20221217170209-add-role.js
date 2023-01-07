'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        id: 'qwWjsjjjs-snnndjjralds',
        name: 'Super Admin',
        description: 'Super Administrators ',
        code: 'SUPER_ADMIN',
        product_id: '183377484-fjfjeii3883822s',
        client_id: 'eyyfhds1jjjfjjs2nnda-1dns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  },
};
