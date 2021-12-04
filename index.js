const { app, port } = require("./server");

// server-side
const server = require("http").createServer(app);


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});