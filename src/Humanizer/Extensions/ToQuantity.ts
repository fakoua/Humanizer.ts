
// @ts-ignore
import { Vocabularies } from '../Inflections/Vocabularies.ts'

declare global {
    interface String {
        toQuantity(quantity: number, showQuantityAs: ShowQuantityAs): string
        toQuantity(quantity: number): string
    }
}

export enum ShowQuantityAs {
    None,
    Numeric,
    Words
}

String.prototype.toQuantity = function (quantity: number): string {
    let transformedInput = quantity == 1
    ? Vocabularies.Default().singularize(this, false)
    : Vocabularies.Default().pluralize(this, false)
    return `${quantity} ${transformedInput}`
}

