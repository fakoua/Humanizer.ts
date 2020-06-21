import { Vocabularies } from './src/Humanizer/Inflections/Vocabularies.ts'

let a = Vocabularies.Default().singularize("men")

console.log(a)