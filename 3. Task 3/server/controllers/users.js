const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const createUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      data: user,
      succeeded: true,
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: 'Internal error',
      succeeded: false,
    });
  }
};

module.exports = {
  createUser,
};
