const functions = require('@google-cloud/functions-framework');

functions.http('mul', (req, res) => {
  result = {};
  result['X'] = req.body.X;
  result['Y'] = req.body.Y;
  result['Result'] = req.body.X * req.body.Y;

  res.send(result);
});
