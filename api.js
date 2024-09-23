// Import the express module
const express = require("express");

// Create an express application
const app = express();

// Define the port where the server will listen
const port = 3000;

// Define the route for the API
app.get("/api", (req, res) => {
  // Data to be returned by the API
  const data = {
    message: "Server hosted successfully",
    subject: "Web application development",
    students: [
      { id: "22120181", name: "Nguyễn Duy Lâm" },
      { id: "22120183", name: "Nguyễn Đặng Minh Lân" },
      { id: "22120186", name: "Huỳnh Tấn Lộc" },
    ],
  };
  // Send the data as a JSON response
  res.json(data);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api`);
});
