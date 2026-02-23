// Creating a basic HTTP server using Node.js core module.
// The server handles multiple routes like Home, About, Contact, Product, Help, and Profile.
// It responds with simple text messages based on the requested URL.

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, "url");
    if (req.url === "/") {
        res.write("Welcome to my Home Page!");
        res.end();
    } else if (req.url === "/about") {
        res.write("This is the About Page!");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Contact Page!");
        res.end();
    } else if (req.url === "/product") {
        res.write("Product Page - List of all products!");
        res.end();
    } else if (req.url === "/help") {
        res.write("Help Page!");
        res.end();
    } else if (req.url === "/profile") {
        res.write("User Profile Page!");
        res.end();
    } else {
        res.write("Page Not Found!");
        res.end();
    }
});

server.listen(8000, () => {
    console.log("Server started at port 8000");
});