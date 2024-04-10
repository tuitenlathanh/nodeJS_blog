class NewController {
   

    // [get]/news
    index(req, res) {
        res.render('news');
    }
    // [get]/news/slug
    show(req, res) {
        res.send('new slug deteail!!!');
    }
}

module.exports = new NewController();