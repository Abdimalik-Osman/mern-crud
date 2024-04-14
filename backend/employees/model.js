const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Employee schema
const EmployeeSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
   
  
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Export the Employee model
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
