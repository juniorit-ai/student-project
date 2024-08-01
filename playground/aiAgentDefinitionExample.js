
                        // Simulating a simple AI agent, ByteBoss, performing a task
                        function ByteBossAI() {
                            this.name = 'ByteBoss';
                            this.task = 'Solve a simple math problem';
                        }

                        ByteBossAI.prototype.performTask = function() {
                            // Simulating the AI agent solving a math problem
                            let problem = '2 + 2';
                            let solution = eval(problem); // Using eval for simplicity, not recommended for real-world applications
                            console.log(`${this.name} is performing the task: ${this.task}`);
                            console.log(`The solution to the problem '${problem}' is: ${solution}`);
                        };

                        let byteBoss = new ByteBossAI();
                        byteBoss.performTask();
                    