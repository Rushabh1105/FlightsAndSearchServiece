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

    await queryInterface.bulkInsert('Airports',[
      {
        name : 'INDIRA GANDHI INTERNATIONAL AIRPORT ', 
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'SAFDARJUNT AIRPORT ', 
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'IPALAM AIRPORT ', 
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : ' Kempegowda International Airport ', 
        cityId : 4,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'Chhatrapati Shivaji Maharaj International AIRPORT T1', 
        cityId : 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'Chhatrapati Shivaji Maharaj International AIRPORT T2 ', 
        cityId : 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'Chennai International Airport ', 
        cityId : 5,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'Pune International Airport ', 
        cityId : 10,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : 'Devi Ahilya Bai Holkar Airport ', 
        cityId : 13,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ],{});



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
