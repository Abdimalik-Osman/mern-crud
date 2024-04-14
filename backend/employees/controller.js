const Employee = require("./model.js");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.send({ status: "success", employees });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
exports.getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);
    res.send({ status: "success", data: employee });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {

    const employee = await Employee.create(req.body);

    res.status(201).send({
      status: "sucess",
      message: "employee created successfully",
      data: employee,
    });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;


    const updateEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!updateEmployee)
      return res
        .status(400)
        .json({ status: false, message: "Invalid action, Nothing to update" });

    res.status(201).send({
      status: "success",
      message: "employee updated successfully",
      data: updateEmployee,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {


    const deletedEmployee = await Employee.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    if (!deletedEmployee)
      return res
        .status(400)
        .json({ status: false, message: "Invalid action, Nothing to delete" });

    res.send({
      status: "success",
      message: "employee deleted successfully",
      data: deletedEmployee,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
