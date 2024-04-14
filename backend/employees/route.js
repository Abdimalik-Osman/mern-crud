const express = require("express");
const {
  createEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
  getSingleEmployee,
} = require("./controller.js");

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getSingleEmployee);
router.post("/",  createEmployee);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports =  router;
