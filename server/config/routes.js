let tasks = require('./../controllers/tasks'); // controller require

module.exports = function(app){
    app.get('/tasks/', tasks.index)
    app.get('/tasks/:id', tasks.show)
    app.post('/tasks/', tasks.create)
    app.put('/tasks/:id', tasks.update)
    app.delete('/tasks/:id', tasks.destroy); // passing in controller methods that take req and res can be done this way


    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
};