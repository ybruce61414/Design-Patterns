// Single Responsibility Principle
// file system
const fs = require("fs");

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    this.entries[c] = `${c}: ${text}`;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I cried today.");
j.addEntry("I ate a bug.");
console.log(j.toString());

// let p = new PersistenceManager();
// let filename = "c:/temp/journal.txt";
// p.saveToFile(j, filename);

// note:
// separation of concerns: try to split up into different several parts which are somehow related

// there's a nasty pattern called god object
// (has lots and lots responsibility, lots of Spaghetti code)
