const homePageController = require('./controllers/homePageController');

module.exports = (app) => {

    app.post('/api/edithomepage', homePageController.editHomePage);

}