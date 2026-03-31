# 🎓 Student CRUD Backend (Node.js + MySQL)

A simple and scalable **Student Management Backend Application** built using **Node.js, Express, and MySQL**.  
This project performs full **CRUD operations (Create, Read, Update, Delete)** on student data.

---

## 🚀 Features

- ✅ Create new student
- 📄 Read all students
- 🔍 Get student by ID
- ✏️ Update student details
- ❌ Delete student
- 🧩 MVC Architecture (Model-Controller-Routes)
- 🌐 RESTful APIs

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Tools:** Postman, Git  

---

## 📁 Project Structure


student-crud/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── studentController.js
│
├── models/
│ └── studentModel.js
│
├── routes/
│ └── studentRoutes.js
│
├── app.js
├── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/student-crud-backend.git
cd student-crud-backend
2️⃣ Install Dependencies
npm install
3️⃣ Setup MySQL Database
CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(50)
);
4️⃣ Configure Database

Update config/db.js with your MySQL credentials:

host: "localhost",
user: "root",
password: "your_password",
database: "studentdb"
5️⃣ Run Server
node app.js

Server will start at:

http://localhost:3000
📌 API Endpoints
Method	Endpoint	Description
POST	/students	Create student
GET	/students	Get all students
GET	/students/:id	Get student by ID
PUT	/students/:id	Update student
DELETE	/students/:id	Delete student
🧪 Sample Request Body
{
  "name": "Nayan",
  "email": "nayan@gmail.com",
  "course": "MCA"
}
📷 Testing

Use tools like:

Postman
Thunder Client (VS Code)
🔥 Future Improvements
🔐 JWT Authentication
✅ Input Validation (Joi)
📦 Use ORM (Sequelize)
☁️ Deployment (Render / Railway)
🎨 Frontend Integration (React)
👨‍💻 Author

Nayan Bonde
📍 Pune, India

⭐ Support

If you like this project, give it a ⭐ on GitHub!
