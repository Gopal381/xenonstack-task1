A web application designed for users to discover, invest in, and manage property visits. The application allows users to sign up, view property listings, and track their visits.

Table of Contents

Features
Technologies Used
Getting Started
Prerequisites
Installation
Running the Application
Usage
API Endpoints
Contributing


Features:

User authentication (sign up and sign in)
Property listings with images and details
Manage property visits (upcoming, completed, and pending)
Responsive design for desktop and mobile devices
User-friendly interface with easy navigation


Technologies Used:

Frontend:

React
React Router
Tailwind CSS
Axios
React Toastify

Backend:

Node.js
Express
MongoDB
Mongoose

Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB (locally or Atlas)
A package manager like npm or yarn

Installation
Clone the repository:

git clone https://github.com/yourusername/property-listing-app.git
Navigate to the project directory:

cd property-listing-app
Install dependencies:

For the frontend:


cd client
npm install
For the backend:

cd server
npm install
Running the Application
Start the backend server:

cd server
npm start
Make sure your MongoDB server is running.

Start the frontend application:

Open a new terminal window:


cd client
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Usage

Sign Up: Create a new account to access property listings and manage visits.
Sign In: Log in to your account to view and manage your property visits.
View Listings: Browse through available properties, including images and details.
Manage Visits: Keep track of your visits, including their statuses.

API Endpoints

Authentication

POST /api/register: Register a new user.
POST /api/login: Log in an existing user.
Properties

GET /api/properties: Get all properties.
GET /api/properties/:id: Get a specific property by ID.

Visits

GET /api/visits: Get all visits for the logged-in user.
POST /api/visits: Schedule a new visit for a property.
PUT /api/visits/:id: Update the status of a visit.
DELETE /api/visits/:id: Delete a visit.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.


Screenshots
----------------------------------------------------------------------

![](![{23F839E4-6774-411D-A216-86C40BF7961D}](https://github.com/user-attachments/assets/5751d8c2-978c-4d2f-aebd-65707425302e)
)
