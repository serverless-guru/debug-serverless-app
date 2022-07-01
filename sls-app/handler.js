module.exports.hello = async (event) => {
  const a = 2;
  const b = 3;
  const result = a + b;
  return {
    statusCode: 200,
    body: JSON.stringify({ result })
  };
};
