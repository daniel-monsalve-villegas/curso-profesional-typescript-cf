"use strict";
/* import { PI, generateId } from './utils.module'; */
/* import { User as Person } from './utils.module'; */
/**/
/* const myNumber = 10 * PI; */
/**/
/* const myUser: Person = { id: generateId().toString(), name: 'Daniel' }; */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = require("./utils.module");
var myNumber = 10 * Utils.PI;
var myUser = {
    id: Utils.generateId().toString(),
    name: 'Daniel',
};
console.log(myNumber, myUser);
