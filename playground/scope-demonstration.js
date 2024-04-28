for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 * i);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() { console.log(j); }, 1000 * j);
}