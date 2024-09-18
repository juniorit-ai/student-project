
                        // Declaring a variable using 'var'
                        var myVar = 'Hello, World!';
                        console.log('var declaration:', myVar);

                        // Declaring a variable using 'let'
                        let myLet = 42;
                        console.log('let declaration:', myLet);

                        // Declaring a constant using 'const'
                        const myConst = 3.14;
                        console.log('const declaration:', myConst);

                        // Demonstrating scope and reassignment
                        function scopeExample() {
                            if (true) {
                                var myVar = 'Scoped var';
                                let myLet = 'Scoped let';
                                const myConst = 'Scoped const';
                                console.log('Inside block - var:', myVar);
                                console.log('Inside block - let:', myLet);
                                console.log('Inside block - const:', myConst);
                            }
                            console.log('Outside block - var:', myVar);
                            // The following lines would cause an error if uncommented, as let and const are block-scoped
                            // console.log('Outside block - let:', myLet);
                            // console.log('Outside block - const:', myConst);
                        }
                        scopeExample();
                    