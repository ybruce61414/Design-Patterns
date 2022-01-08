// getter and setter
class Address {
  constructor(name, phone) {
    this._name = name;
    this._phone = phone;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    this._name = str;
  }
}

let ob1 = new Address("viola", 10);
ob1.name = "modified";
console.log(ob1.name);
