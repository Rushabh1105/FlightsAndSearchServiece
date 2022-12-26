'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNo : "Boing 777",
        capacity : 400,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        modelNo : "Boing 747",
        capacity : 350,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        modelNo : "Boing 727",
        capacity : 330,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        modelNo : "Airbus A380",
        capacity : 400,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        modelNo : "Airbus A320",
        capacity : 300,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
