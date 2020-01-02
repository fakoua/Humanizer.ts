import "https://raw.githubusercontent.com/fakoua/Humanizer.ts/master/src/Humanizer/Extensions/ByteSize.ts"
import "https://raw.githubusercontent.com/fakoua/Humanizer.ts/master/src/Humanizer/Extensions/Ordinalize.ts"
import "https://raw.githubusercontent.com/fakoua/Humanizer.ts/master/src/Humanizer/Extensions/ToQuantity.ts"
import "https://raw.githubusercontent.com/fakoua/Humanizer.ts/master/src/Humanizer/Extensions/Vocabularies.ts"

let result = (10).megabytes().toString()
console.log(result)

let fileSize = (10).kilobytes()
console.log(fileSize.bits)          // -> 81920
console.log(fileSize.bytes)         // -> 10240
console.log(fileSize.kilobytes)     // -> 10
console.log(fileSize.megabytes)     // -> 0.009765625
console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
console.log(fileSize.terabytes)     // -> 9.313225746154785e-9

//(3).bits();
//(5).bytes();
//(10.5).kilobytes();
//(2.5).megabytes();
//(10.2).gigabytes();
//(4.7).terabytes();

let f = (4).gigabytes().add((22).megabytes()).subtract((980).kilobytes()).addGigabytes(1)
console.log(f.toString()) // -> 5.020549774169922 GB

"Man".pluralize() // -> Men