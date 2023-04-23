let age: number = 20;
let agmonths: string = '20';
let isSenior: boolean = true;
let person: Object = {};

let fruits: string[] = ['manzana', 'pera'];
let fruitsObj: Object[] = [{}, { name: 'manzana' }];
let response: any = 'Hola';
response = 20;
response = true;
response = ['Hola', 123];

function saludar(): void {
  console.log('Hola');
}

let response2: unknown;
response2 = true;

let response3 = null;
let response4 = undefined;

// Combinación de tipose
type ResponseTypeService = number | undefined;

let response5: ResponseTypeService;
response5?.toString();

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;
responsePartners?.toString().concat('');

// Type ASSERTION
let message: any = '';
let messageUppercase = (message as string).toUpperCase();
let messageUppercase1 = <string>message;
messageUppercase1.toUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const canvas1 = document.getElementById('canvas') as HTMLCanvasElement;
