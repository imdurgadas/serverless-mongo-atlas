const { connectDatabase } = require("../database/db");
const User = require("../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { email } = event.pathParameters;
    userObj = await User.findOne({ email });

    if (userObj) {
      return {
        statusCode: 200,
        body: JSON.stringify(userObj),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Requested user not present" }),
      };
    }
  } catch (err) {
    console.error(err);
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
