let Task = require('mongoose').model('Task');
let errorHandler = require('./helpers/error-handler');


module.exports = {
    index(req, res) {
      Task.find(req.body)
        .then(tasks => res.json(tasks)) // all responses just spit json
        .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
      Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    create(req, res) {
      Task.create(req.body)
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    update(req, res) {
      Task.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(task => res.json(task))
        .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
      Task.findOneAndDelete({_id: req.params.id})
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    },
  };