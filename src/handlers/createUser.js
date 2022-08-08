const { connectDatabase } = require("../database/db");
const User = require("../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { email, password, name } = JSON.parse(event.body);
    let userObj = {
      email,
      name,
      password,
    };
    userObj = await User.create(userObj);
    return {
      statusCode: 201,
      body: JSON.stringify(userObj),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
