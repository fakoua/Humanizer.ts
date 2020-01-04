// import "https://deno.land/x/humanizer.ts/byteSize.ts"
// import "https://deno.land/x/humanizer.ts/ordinalize.ts"
// import "https://deno.land/x/humanizer.ts/toQuantity.ts"
// import "https://deno.land/x/humanizer.ts/vocabularies.ts"

// let result = (10).megabytes().toString()
// console.log(result)

// let fileSize = (10).kilobytes()
// console.log(fileSize.bits)          // -> 81920
// console.log(fileSize.bytes)         // -> 10240
// console.log(fileSize.kilobytes)     // -> 10
// console.log(fileSize.megabytes)     // -> 0.009765625
// console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
// console.log(fileSize.terabytes)     // -> 9.313225746154785e-9

// //(3).bits();
// //(5).bytes();
// //(10.5).kilobytes();
// //(2.5).megabytes();
// //(10.2).gigabytes();
// //(4.7).terabytes();

// let f = (4).gigabytes().add((22).megabytes()).subtract((980).kilobytes()).addGigabytes(1)
// console.log(f.toString()) // -> 5.020549774169922 GB

// "Man".pluralize() // -> Men

import "./toQuantity.ts"
import { ShowQuantityAs } from "./toQuantity.ts"

console.log("case".toQuantity(4, ShowQuantityAs.None))

//"case".toQuantity()