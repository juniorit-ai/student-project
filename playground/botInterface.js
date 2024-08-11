
                        // HTML Structure
                        const htmlContent = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>AI Bot Interface</title>
                            <style>
                                body { font-family: Arial, sans-serif; }
                                #chat-container { width: 300px; margin: auto; border: 1px solid #ccc; padding: 10px; }
                                #messages { height: 200px; overflow-y: scroll; border: 1px solid #ddd; margin-bottom: 10px; padding: 5px; }
                                #user-input { width: calc(100% - 22px); margin-right: 2px; }
                                #send-btn { width: 20px; }
                            </style>
                        </head>
                        <body>
                            <div id="chat-container">
                                <div id="messages"></div>
                                <input type="text" id="user-input" placeholder="Type a message...">
                                <button id="send-btn">Send</button>
                            </div>
                            <script src="/socket.io/socket.io.js"></script>
                            <script src="botInterface.js"></script>
                        </body>
                        </html>`;

                        // JavaScript for handling user input and displaying messages
                        const jsContent = `
                        document.getElementById('send-btn').addEventListener('click', () => {
                            const userInput = document.getElementById('user-input').value;
                            if (userInput.trim() !== '') {
                                addMessage('You', userInput);
                                // Emit the message to the server
                                socket.emit('user message', userInput);
                                document.getElementById('user-input').value = '';
                            }
                        });

                        // Function to add messages to the chat
                        function addMessage(sender, message) {
                            const messageContainer = document.getElementById('messages');
                            const messageElement = document.createElement('div');
                            messageElement.textContent = `${sender}: ${message}`;
                            messageContainer.appendChild(messageElement);
                            messageContainer.scrollTop = messageContainer.scrollHeight;
                        }

                        // Socket.io client-side code
                        const socket = io();

                        // Listen for bot responses
                        socket.on('bot response', (response) => {
                            addMessage('Bot', response);
                        });
                        `;
                        // Write the HTML and JS content to files
                        const fs = require('fs');
                        fs.writeFileSync('playground/botInterface.html', htmlContent);
                        fs.writeFileSync('playground/botInterface.js', jsContent);
                    