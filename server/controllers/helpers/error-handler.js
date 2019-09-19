module.exports = function(error) {
    let errorsObject = {
      err: true,
      errors: null,
      db_error: error
    }

    let errors = [];
    console.log(error.errors);

    if (error.errors) {
      errors = Object.keys(error.errors)
                  .map(field => error.errors[field].message);
    } else if (typeof error === 'string') {
      errors.push(error);
    } else if (error.message) {
      errors.push(error.message);
    } else {
      errors.push('something went wrong!');
    }

    errorsObject.errors = errors;
    this.json(errorsObject);
};