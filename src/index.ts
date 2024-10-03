import { split } from "./split/splitFunction";

console.log("This program uses a custom Split function.\n");

const word = "Hello peter, tim, lila, tom, jack and jhon";
const delimiter = ", ";

console.log(`The result of the string "${word}" splited in "${delimiter}" is`, split(word, delimiter));