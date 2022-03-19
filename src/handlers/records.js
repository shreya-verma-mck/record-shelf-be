const Boom = require('@hapi/boom');
const models = require('../../models');
const { RECORD_NOT_FOUND_ERROR } = require('../constants/errors');

const getRecords = async (request, h) => {
  const records = await models.records.findAll({
    attributes: ['id', 'name', 'imageUrl'],
    include: [
      {
        model: models.artists,
        attributes: ['id', 'name'],
      },
      {
        model: models.genres,
        attributes: ['id', 'name', 'imageUrl'],
      }
    ]
  });
  return h.response(records);
};

const getLikesByRecordId = async (request, h) => {
  const { id: recordId } = request.params;
  const record = await models.records.findByPk(recordId);
  if (!record) {
    throw Boom.badRequest(RECORD_NOT_FOUND_ERROR);
  }
  const likesByRecordId = await models.likes.findAll({
    attributes: ['id', 'userId'],
    where: {
      isLiked: true
    },
    include: [
      {
        model: models.records,
        attributes: [],
        where: {
          id: recordId
        }
      }
    ]
  });
  const { id: userId } = request.auth.credentials;
  return h.response({
    likesCount: likesByRecordId.length,
    isLiked: likesByRecordId.some((like) => like.userId === userId)
  });
};

const updateLikesByRecordId = async (request, h) => {
  const { id: recordId } = request.params;
  const record = await models.records.findByPk(recordId);
  if (!record) {
    throw Boom.badRequest(RECORD_NOT_FOUND_ERROR);
  }

  const likesByRecordId = await models.likes.findAll({
    attributes: ['id', 'userId', 'isLiked'],
    include: [
      {
        model: models.records,
        attributes: [],
        where: {
          id: recordId
        }
      }
    ]
  });
  const { id: userId } = request.auth.credentials;
  const likeByRecordIdAndUserId = likesByRecordId.find((like) => like.userId === userId);

  let likeCountChange = request.payload.isLiked ? 1 : -1;
  if (likeByRecordIdAndUserId) {
    if (likeByRecordIdAndUserId.isLiked === request.payload.isLiked) {
      likeCountChange = 0;
    } else {
      await models.likes.update({
        isLiked: request.payload.isLiked
      }, { where: { recordId, userId } });
    }
  } else {
    await models.likes.create({
      isLiked: request.payload.isLiked,
      recordId,
      userId
    });
  }
  return h.response({
    likesCount: likesByRecordId.filter((like) => like.isLiked).length + likeCountChange,
    isLiked: request.payload.isLiked,
  });
};

module.exports = {
  getRecords,
  getLikesByRecordId,
  updateLikesByRecordId
};
