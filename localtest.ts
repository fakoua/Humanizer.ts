
import { ShowQuantityAs } from "https://deno.land/x/humanizer.ts/toQuantity.ts"

console.log("case".toQuantity(0))
console.log("case".toQuantity(1))
console.log("case".toQuantity(5))
console.log("man".toQuantity(0))
console.log("man".toQuantity(1))
console.log("man".toQuantity(2))

// ToQuantity can figure out whether the input word is singular or plural and will singularize or pluralize as necessary:

console.log("men".toQuantity(2))
console.log("process".toQuantity(2))
console.log("process".toQuantity(1))
console.log("processes".toQuantity(2))
console.log("processes".toQuantity(1))

/*
You can also pass a second argument, ShowQuantityAs, to toQuantity to specify how you want the provided quantity
to be outputted. The default value is ShowQuantityAs.Numeric which is what we saw above. The other two values are
 ShowQuantityAs.Words and ShowQuantityAs.None.
*/

console.log("case".toQuantity(5, ShowQuantityAs.Words))
console.log("case".toQuantity(5, ShowQuantityAs.None))
