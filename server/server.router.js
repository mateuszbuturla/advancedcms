const mainNavController = require('./controllers/mainNavController');
const homePageController = require('./controllers/homePageController');
const subpageController = require('./controllers/subpageController');
const navigationController = require('./controllers/navigationController');

module.exports = (app) => {

    app.get('/api/getmainNav', mainNavController.getMainNav);
    app.post('/api/editmainnav', mainNavController.editMainNav);

    app.get('/api/gethomepage', homePageController.getHomePage);
    app.post('/api/edithomepage', homePageController.editHomePage);

    app.post('/api/getonesubpage', subpageController.getOneSubpages);
    app.get('/api/getallsubpages', subpageController.getAllSubpages);
    app.post('/api/editcreatesubpage', subpageController.editCreateSubpage);
    app.post('/api/removesubpage', subpageController.removeSubpage);

    app.get('/api/getallnavigations', navigationController.getAllNavigations);
    app.post('/api/editcreatenavigation', navigationController.editCreateNavigation);
}