const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const projectSchema = new Schema(
  {
    title: String,
    description: String,
    tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
