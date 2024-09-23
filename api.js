// api.js
exports.handler = async (event, context) => {
  const data = {
    message: "Server hosted successfully",
    subject: "Web application development",
    students: [
      { id: "22120181", name: "Nguyễn Duy Lâm" },
      { id: "22120183", name: "Nguyễn Đặng Minh Lân" },
      { id: "22120186", name: "Huỳnh Tấn Lộc" },
    ],
  };

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
