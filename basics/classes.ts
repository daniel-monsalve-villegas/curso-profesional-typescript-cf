class Animal {
  name: 'Generica animal';
  private age = 10;
  protected identify: '';

  sayHi() {
    console.log('Grrr', this.age);
  }
}

class Dog extends Animal {
  type: 'Pastor alemán';
  sayHi() {
    this.identify;
  }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();
