const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve the static index.html file
app.use(express.static(path.join(__dirname)));

// API route
app.get("/api", (req, res) => {
  const notion = {
    message: "Server hosted successfully",
    subject: "Web application development",
    students: [
      { id: "22120181", name: "Nguyễn Duy Lâm" },
      { id: "22120183", name: "Nguyễn Đặng Minh Lân" },
      { id: "22120186", name: "Huỳnh Tấn Lộc" },
    ],
  };

  res.json(notion);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
