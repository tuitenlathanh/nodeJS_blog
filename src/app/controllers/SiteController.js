class SiteController {
    // [get]/
    index(req, res) {
        res.render('home');
    }
    // [get]/sreach
    sreach(req, res) {
        res.render('sreach');
    }
}

module.exports = new SiteController();