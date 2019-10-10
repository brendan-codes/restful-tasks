module.exports = function(error) {
    console.log("Server error", error);

    this.json(error);
  };
