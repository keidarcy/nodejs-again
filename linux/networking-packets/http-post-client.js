const http = require("http");

const req = http.request(
  { method: "POST", url: "/", host: "localhost", port: 3000 },
  function (res) {
    console.log(res.statusCode);
    res.pipe(process.stdout);
  }
);
req.end("HEllo\n");
