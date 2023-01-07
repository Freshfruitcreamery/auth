'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('scopes', [
      {
        id: 'sca2eiidiedd-sskkdkdjjdcd',
        name: 'Create Buyer',
        description: 'Create Buyer Scope',
        code: 'CREATE_BUYER',
        role_id: 'qwWjsjjjs-snnndjjralds',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('scopes', null, {});
  },
};
