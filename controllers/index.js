function index(req, res, next) {
    res.render('index.ejs', { title: 'Dev Skills' });
  }

module.exports = {
    index
}