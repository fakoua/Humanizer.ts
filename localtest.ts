import { Vocabularies } from './src/Humanizer/Inflections/Vocabularies.ts'

let a = Vocabularies.Default().singularize("tests", false, true)

console.log(a)