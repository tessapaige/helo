module.exports = {
  login: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.login([username, password]).then(response => {
      res.status(200).send(response);
    });
  },
  register: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.register([username, password]).then(response => {
      res.status(200).send(response);
    });
  },
  getAllPosts: (req, res) => {
    const db = req.app.get("db");
    db.getAllPosts().then(response => {
      res.status(200).send(response);
    });
  }
};
