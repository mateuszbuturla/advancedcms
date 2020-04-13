const homePageController = require('./controllers/homePageController');
const subpageController = require('./controllers/subpageController');

module.exports = (app) => {

    app.get('/api/gethomepage', homePageController.getHomePage);
    app.post('/api/edithomepage', homePageController.editHomePage);

    app.post('/api/getonesubpage', subpageController.getOneSubpages);
    app.get('/api/getallsubpages', subpageController.getAllSubpages);
    app.post('/api/editcreatesubpage', subpageController.editCreateSubpage);
}