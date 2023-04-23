const sayHi = (name) => {
  console.log(`Hola ${name}`);
};

sayHi('estudiantes de código facilito');

function sayGoodbye(name) {
  console.log(`Adios ${name}, casi terminal el curso`);
}

sayGoodbye('amigos');

const response = {
  id: 1,
  name: 'kevin',
  charge: 'developer',
  number: 4,
};

function show({ name, ...other }: { id; name; charge; number }): number {
  console.log('El name mandado es: ', name);
  console.log('otros datos ', other);
  return 1;
}

show(response);
