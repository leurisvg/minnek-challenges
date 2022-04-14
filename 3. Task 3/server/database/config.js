const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database online');
  } catch (e) {
    console.log(e);
    throw new Error('Database error');
  }
};

module.exports = {
  dbConnection,
};
