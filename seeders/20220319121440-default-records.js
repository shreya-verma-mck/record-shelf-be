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
      image_url: 'https://i.ibb.co/CbB9sfK/genre-rock.png'
    }, {
      id: 2,
      name: 'pop',
      image_url: 'https://i.ibb.co/wY1mY1k/genre-pop.png'

    }, {
      id: 3,
      name: 'country',
      image_url: 'https://i.ibb.co/879d2mW/genre-country.png'
    }, {
      id: 4,
      name: 'bollywood',
      image_url: 'https://i.ibb.co/R64VT9G/genre-bollywood.png'
    }], {});

    await queryInterface.bulkInsert('records', [{
      id: 1,
      name: 'in the end',
      image_url: 'https://i.ibb.co/dtzyDNy/song-5.png',
      genre_id: 2,
      artist_id: 1
    }, {
      id: 2,
      name: 'sickness',
      image_url: 'https://i.ibb.co/hXvCxCM/song-4.png',
      genre_id: 2,
      artist_id: 2
    }, {
      id: 3,
      name: 'wow',
      image_url: 'https://i.ibb.co/CMwcL0z/song-3.png',
      genre_id: 2,
      artist_id: 3
    }, {
      id: 4,
      name: 'hollywood\'s bleeding',
      image_url: 'https://i.ibb.co/PcfyMqq/song-2.png',
      genre_id: 2,
      artist_id: 3
    }, {
      id: 5,
      name: 'rockstar',
      image_url: 'https://i.ibb.co/3Rj0drv/song-1.png',
      genre_id: 2,
      artist_id: 3
    }, {
      id: 6,
      name: 'black heart',
      image_url: 'https://i.ibb.co/x8fbGd8/song-6.png',
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
