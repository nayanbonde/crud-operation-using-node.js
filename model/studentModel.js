const db = require("../config/db");

// CREATE
exports.createStudent = (data, callback) => {
    const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";
    db.query(sql, [data.name, data.email, data.course], callback);
};

// READ ALL
exports.getStudents = (callback) => {
    db.query("SELECT * FROM students", callback);
};

// READ ONE
exports.getStudentById = (id, callback) => {
    db.query("SELECT * FROM students WHERE id = ?", [id], callback);
};

// UPDATE
exports.updateStudent = (id, data, callback) => {
    const sql = "UPDATE students SET name=?, email=?, course=? WHERE id=?";
    db.query(sql, [data.name, data.email, data.course, id], callback);
};

// DELETE
exports.deleteStudent = (id, callback) => {
    db.query("DELETE FROM students WHERE id=?", [id], callback);
};