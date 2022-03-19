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
    await queryInterface.bulkInsert('artists', [{
      id: 1,
      name: 'linkin park',

    }, {
      id: 2,
      name: 'grey daze',

    }, {
      id: 3,
      name: 'post malone',

    }, {
      id: 4,
      name: 'stone temple pilots',

    }], {});

    await queryInterface.bulkInsert('genres', [{
      id: 1,
      name: 'rock',
      image_url: 'https://drive.google.com/file/d/1WhFUpQMJdrs4XKtaOuDtxw4owkvO8Enn/view?usp=sharing'
    }, {
      id: 2,
      name: 'pop',
      image_url: 'https://drive.google.com/file/d/185sjUXjE3j3_-8-Dp1opDJFJtpExafRM/view?usp=sharing'

    }, {
      id: 3,
      name: 'country',
      image_url: 'https://drive.google.com/file/d/1sfmfzHBE_aZyc2VW64_OQpVY5-PryLP2/view?usp=sharing'
    }, {
      id: 4,
      name: 'bollywood',
      image_url: 'https://drive.google.com/file/d/1DgJrr6caaRXI80mhmSFb0krdceGBTzi6/view?usp=sharing'
    }], {});

    await queryInterface.bulkInsert('records', [{
      name: 'in the end',
      image_url: 'https://drive.google.com/file/d/1FBTkvejJi0vGQPt85Kdj30UXkDoOJrKY/view?usp=sharing',
      genre_id: 2,
      artist_id: 1
    }, {
      name: 'sickness',
      image_url: 'https://drive.google.com/file/d/1xCTm7wr8skiyABJ_fJboqpUqQU_VCGtl/view?usp=sharing',
      genre_id: 2,
      artist_id: 2
    }, {
      name: 'wow',
      image_url: 'https://drive.google.com/file/d/1LlTRCJp-svam-Gab9LdY4bWQL8iaC-8Q/view?usp=sharing',
      genre_id: 2,
      artist_id: 3
    }, {
      name: 'hollywood\'s bleeding',
      image_url: 'https://drive.google.com/file/d/1Y6jNFK09d3Kb0F03e9pL9iHiomvOFpDy/view?usp=sharing',
      genre_id: 2,
      artist_id: 3
    }, {
      name: 'rockstar',
      image_url: 'https://drive.google.com/file/d/1nzH4ynlIk_k4usZJyeKygrWqOXUr2yXX/view?usp=sharing',
      genre_id: 2,
      artist_id: 3
    }, {
      name: 'black heart',
      image_url: 'https://drive.google.com/file/d/1nR5Q0rxJU9mhTh2YYTXiopImyJXY2dRu/view?usp=sharing',
      genre_id: 2,
      artist_id: 4
    }], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('records', null, {});
    await queryInterface.bulkDelete('genres', null, {});
    await queryInterface.bulkDelete('artists', null, {});
  }
};
