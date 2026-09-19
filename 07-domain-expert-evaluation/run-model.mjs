import {readFile} from 'node:fs/promises';
import {evaluate,evaluateFlawed} from './financial-model.mjs';
const scenarios=JSON.parse(await readFile(new URL('./scenarios.json',import.meta.url),'utf8'));
console.log(JSON.stringify(scenarios.map(s=>({correct:evaluate(s),flawed:evaluateFlawed(s)})),null,2));
