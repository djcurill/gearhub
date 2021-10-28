const express = require('express');
const config = require('./config/options.js');
const dbUtils = require('./utils/db');
const { Post } = require('./resources/post.model');

console.log(config.dbConnectionString);

dbUtils
  .connect(config.dbConnectionString)
  .then(async (connection) => {
    const post = await Post.create({
      title: 'Evil Following 2021 Large Frame',
      price: 6500,
      description: 'A couple of bumps and bruises',
    });
    console.log(await post.find({ price: 6500 }));
  })
  .catch((e) => console.error(e));
