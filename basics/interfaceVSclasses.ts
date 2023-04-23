interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  token: string;
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log('Grrr');
    fetch('...');
  }
}

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return 'Hola';
  }
}

class Dog implements PetInterface {
  sayHello() {
    return 'Hola desde Dog';
  }
}

class Cat extends PetClass {}
