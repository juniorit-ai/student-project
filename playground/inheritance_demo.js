function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name);
};

function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.explain = function() {
  console.log('I teach ' + this.subject);
};

// Example usage:
var teacher = new Teacher('Jane Doe', 'Mathematics');
teacher.greet();
teacher.explain();