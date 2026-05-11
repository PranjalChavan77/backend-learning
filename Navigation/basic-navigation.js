const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/home') {
    res.write('<h1>Welcome to Home Page</h1>');
    return res.end();
  } else if (req.url === '/men') {
    res.write('<h1>Mens Page</h1>');
    return res.end();
  } else if (req.url === '/women') {
    res.write('<h1>Womens Page</h1>');
    return res.end();
  } else if (req.url === '/kids') {
    res.write('<h1>Kids Page</h1>');
    return res.end();
  } else if (req.url === '/cart') {
    res.write('<h1>Cart Page</h1>');
    return res.end();
  }
  
  res.write(`
    <html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
   <head>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kid's</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
   </head>
</body>
</html>
    `);
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});