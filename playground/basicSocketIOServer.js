
                        const http = require('http');
                        const socketIo = require('socket.io');

                        // Create an HTTP server
                        const server = http.createServer((req, res) => {
                            res.writeHead(200, { 'Content-Type': 'text/plain' });
                            res.end('Socket.io Server is running');
                        });

                        // Attach Socket.io to the server
                        const io = socketIo(server);

                        // Listen for client connections
                        io.on('connection', (socket) => {
                            console.log('A user connected');

                            // Handle messages from the client
                            socket.on('message', (msg) => {
                                console.log('Message received: ' + msg);
                                // Send a response back to the client
                                socket.emit('message', 'Message received: ' + msg);
                            });

                            // Handle client disconnection
                            socket.on('disconnect', () => {
                                console.log('A user disconnected');
                            });
                        });

                        // Start the server
                        server.listen(3000, () => {
                            console.log('Server is listening on port 3000');
                        });
                    