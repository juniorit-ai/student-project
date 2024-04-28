class UserProfile {
  constructor(name) {
    this.name = name;
    this._age = 0;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error('Age must be a positive number.');
    }
    this._age = value;
  }
}

const userProfile = new UserProfile('Alice');
userProfile.age = 25;
console.log(userProfile.age);
// Expected output: 25