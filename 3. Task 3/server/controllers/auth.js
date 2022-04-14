const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        data: 'Invalid credentials',
        succeeded: false,
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        data: 'Invalid credentials',
        succeeded: false,
      });
    }

    res.json({
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
  login,
};
