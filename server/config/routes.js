let tasks = require('./../controllers/tasks'); // controller require

module.exports = function(app){
    app.get('/tasks/', tasks.index)
    app.post('/tasks/', tasks.create)
    app.get('/tasks/:id', tasks.show)
    app.put('/tasks/:id', tasks.update)
    app.delete('/tasks/:id', tasks.destroy);

    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
};