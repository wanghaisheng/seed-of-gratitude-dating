'use strict';

// 登录记录
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  playerId: {
    type: String,
    required: true
  },
  shortId: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  roleType: {
    type: Number,
    required: true
  },
  // 创建时间
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const BlockRoleUpgradeRecord = mongoose.model('BlockRoleUpgradeRecord', schema);
export default BlockRoleUpgradeRecord;
