// ===== Exercise 1 =====

// ----------- Bird class -------------

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

//  ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor