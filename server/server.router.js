const homePageController = require('./controllers/homePageController');
const subpageController = require('./controllers/subpageController');

module.exports = (app) => {

    app.post('/api/edithomepage', homePageController.editHomePage);
    app.get('/api/gethomepage', homePageController.getHomePage);

    app.post('/api/editcreatesubpage', subpageController.editCreateSubpage);
}