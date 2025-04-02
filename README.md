
# 🎵 Music Booking App API

## 📌 Project Overview
The **Music Booking App API** is a RESTful web service designed to handle artist profiles, event listings, and booking transactions. Built using **TypeScript, Express, and Node.js**, it follows a service-based architecture with separate layers for controllers, services, and repositories.

## ⚙️ Installation & Setup
### 1️⃣ Clone Repository
```bash
git clone https://github.com/auscay/music-app-api.git
cd music-app-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Copy the example environment file and update it with your credentials:
```bash
cp .env.example .env
```
Then, edit the `.env` file with your preferred values:
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

### 4️⃣ Run the Server
```bash
npm run dev  # Development mode
npm start    # Production mode
```

## 🚀 Features
- **Artist Management**: Create, view, update, and delete artist profiles.
- **Event Management**: Artists can create and manage events.
- **Booking System**: Users can book tickets for events.
- **Security**: Includes rate limiting and HTTP security headers.
- **Scalability**: Well-structured API design for future expansion.
- **Database**: Uses MongoDB with Mongoose for data modeling.

## 🛠️ Tech Stack
- **Node.js** & **Express** - Backend framework.
- **TypeScript** - Statically typed JavaScript.
- **MongoDB** & **Mongoose** - Database & ODM.
- **dotenv** - Environment variable management.
- **helmet** - Security headers.
- **express-rate-limit** - Prevents abuse.

## 📂 Project Structure
```
src/
 ├── controllers/      # Handles request-response logic
 ├── services/         # Business logic layer
 ├── repository/       # Database operations
 ├── routes/           # API routes
 ├── database/models/  # Mongoose schemas
 ├── config/           # Configuration files
 └── index.ts         # Server entry point
```

## 📖 API Endpoints

### **🎤 Artist Routes**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/artists`  | Get all artists |
| POST   | `/api/artists/create` | Create a new artist |
| GET    | `/api/artists/:id` | Get an artist by ID |
| PUT    | `/api/artists/:id` | Update an artist |
| DELETE | `/api/artists/:id` | Delete an artist |

### **🎫 Event Routes**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/events`  | Get all events |
| POST   | `/api/events/create` | Create a new event |
| GET    | `/api/events/:id` | Get an event by ID |
| PUT    | `/api/events/:id` | Update an event |
| DELETE | `/api/events/:id` | Delete an event |

### **📅 Booking Routes**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/bookings`  | Get all bookings |
| POST   | `/api/bookings/create` | Create a booking |
| GET    | `/api/bookings/:id` | Get a booking by ID |
| DELETE | `/api/bookings/:id` | Cancel a booking |

## 🔒 Security Features
- **Helmet**: Protects against common security vulnerabilities.
- **Rate Limiting**: Prevents API abuse by limiting requests per user.
- **Input Validation**: Ensures correct data is submitted.

## 🛠️ Testing
Use **Postman** or **cURL** to test the API endpoints live on this postman collection: [Music Booking App API](https://documenter.getpostman.com/view/28440801/2sB2cSgiHA)

## 📜 License
This project is licensed under the **MIT License**.

## ✨ Contributors
- **Auscay** - [GitHub](https://github.com/auscay)

---
🔥 **Happy Coding!** 🚀
```
