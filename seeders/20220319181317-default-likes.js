module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('likes', [{
      user_id: 1,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 2,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 3,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 4,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 5,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 6,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 7,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 8,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 9,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 10,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 11,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 12,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 13,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 14,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 15,
      record_id: 1,
      is_liked: true
    }, {
      user_id: 13,
      record_id: 2,
      is_liked: true
    }, {
      user_id: 14,
      record_id: 2,
      is_liked: true
    }, {
      user_id: 15,
      record_id: 2,
      is_liked: true
    }, {
      user_id: 1,
      record_id: 3,
      is_liked: true
    }]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('likes', null, {});
  }
};
