const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  user: { type: String, required: true },
  res_id: { type: String, required: true }
});


module.exports = mongoose.model("Favourite", favouriteSchema);
