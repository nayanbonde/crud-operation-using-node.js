const studentModel = require("../models/studentModel");

// CREATE
exports.createStudent = (req, res) => {
    studentModel.createStudent(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student added", result });
    });
};

// READ ALL
exports.getStudents = (req, res) => {
    studentModel.getStudents((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// READ ONE
exports.getStudentById = (req, res) => {
    const id = req.params.id;
    studentModel.getStudentById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// UPDATE
exports.updateStudent = (req, res) => {
    const id = req.params.id;
    studentModel.updateStudent(id, req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student updated" });
    });
};

// DELETE
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    studentModel.deleteStudent(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Student deleted" });
    });
};