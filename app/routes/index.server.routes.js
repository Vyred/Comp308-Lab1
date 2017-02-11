
module.exports = function (app) {
    const index = require('../controllers/index.server.controller');
    app.get('/projects', index.renderProducts);
    app.get('/services', index.renderServices);
    app.get('/', index.renderIndex);
};
