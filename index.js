import {readFileSync} from 'fs';
import processLines from './src/index';

// If the file is big it's better to use a read stream 
// and process every line right after it's read. 'readline' can be used for that.
// But for now concentrating on the solution and reading all the lines, because they are just 5.
const lines = readFileSync('input.txt', 'utf-8').trim().split('\n');
console.log(lines);

const result = processLines(lines);
console.log(result);
