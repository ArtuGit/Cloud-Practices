module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! The function executed successfully!',
        input: event,
        env1: process.env.ENV1,
        env2: process.env.ENV2,
      },
      null,
      2
    ),
  };
};
