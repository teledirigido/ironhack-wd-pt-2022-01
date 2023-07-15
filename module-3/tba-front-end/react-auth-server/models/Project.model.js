const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  // owner will be added later on
});

module.exports = model("Project", projectSchema);
