interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  name: '',
  age: 40,
  charge: '',
};

type PersonT {
  name: string;
  age: number;
}

interface EmployeeT extends PersonT {
charge: string;
}

const lastEmployee: EmployeeT = {
  name: '',
  age: 40,
  charge: ''
}

// Union types
type User = {
  id: string,
}

type Admin = User & {
  token: string,
}

const myAdmin: Admin = {
  id: '13434',
  token: 'sdfsd"#4324dsf'
}

type MixAdmin = User & Person;

const myMixAdmin: MixAdmin = {
  name: '',
  age: 35,
  id: '43245dfd45'
}
