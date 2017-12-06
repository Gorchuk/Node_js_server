const http = require('http');

const html = `
	<!doctype>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Awesome serwer</title>
			<link rel="stylesheet" href="app.css">
		</head>
	

		<body>
			<h1>Awesome Server</h1>
			<button>Click me</button>
			<p>Hello World!</p>

			<script src="app.js"></script>
		</body>
	</html>
`;


const css = `
	body {
		margin: 0;
		padding: 0;
		text-align: center;
	}

	h1 {
		background-color: #FFFF00;
		color: white;
		padding: .5em;
		font-family: 'Consolas';
	}
`;


const js = `
	const button = document.querySelector('button');
	button.addEventListener('click', event => alert('Node.js action'));
`;

http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html'});
			res.end(html);
			break;

		case '/app.css':
			res.writeHead(200, { 'Content-Type': 'text/css'});
			res.end(css);
			break;

		case '/app.js':
			res.writeHead(200, { 'Content-Type': 'text/javascript'});
			res.end(js);
			break;

		default:
			res.writeHead(404, { 'Content-Type': 'text/plain'});
			res.end('404 Not found');
	}
	
}).listen(7000, () => console.log('Server is working!'));




// https://nodejs.org/api/http.html
// http://localhost:7000/