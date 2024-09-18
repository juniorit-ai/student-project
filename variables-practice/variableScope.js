
// Demonstrating variable scope
function showScope() {
    var localVar = "I'm local";
    if (true) {
        let blockVar = "I'm block scoped";
        console.log(blockVar);
    }
    console.log(localVar);
    // console.log(blockVar); // This will cause an error
}
showScope();
                            