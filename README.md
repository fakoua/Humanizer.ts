# Humanizer.ts

Humanizer meets all your TypeScript needs for manipulating and displaying strings, dates, times, timespans, numbers and quantities.

[![Build Status](https://api.travis-ci.com/fakoua/humanizer.ts.svg?branch=master)](https://travis-ci.com/fakoua/humanizer.ts)
[![Build Status](https://github.com/fakoua/humanizer.ts/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/fakoua/humanizer.ts/actions)

### Table of contents

- [Usage](#usage)
- [ByteSize](#bytesize)
- [Vocabularies](#vocabularies)
- [Ordinalize](#ordinalize)
- [ToQuantity](#toquantity)
- [Number to numbers](#number_to_numbers)
- [Number to words](#number_to_words)
- [Roman numerals](#roman_numerals)
- [Metric numarals](#metric_numerals)

## <a id="usage">Usage</a>

Import the Extensions:

```ts
import "https://deno.land/x/humanizer.ts/byteSize.ts"
import "https://deno.land/x/humanizer.ts/vocabularies.ts"
import "https://deno.land/x/humanizer.ts/ordinalize.ts"
import "https://deno.land/x/humanizer.ts/toQuantity.ts"
import "https://deno.land/x/humanizer.ts/numberToNumbers.ts"
import "https://deno.land/x/humanizer.ts/numberToWords.ts"
import "https://deno.land/x/humanizer.ts/romanNumerals.ts"
import "https://deno.land/x/humanizer.ts/metricNumerals.ts"
```

## Examples

```ts
import "https://deno.land/x/humanizer.ts/byteSize.ts"

let result = (10).megabytes().toString()
console.log(result) // -> 10 MB
```

## <a id="bytesize">ByteSize</a>

Humanizer includes a port of the brilliant [ByteSize](https://github.com/omar/ByteSize) library.
Quite a few changes and additions are made on `ByteSize` to make the interaction with `ByteSize` easier and more consistent with the Humanizer API.
Here is a few examples of how you can convert from numbers to byte sizes and between size magnitudes:

```ts
import "https://deno.land/x/humanizer.ts/byteSize.ts"

let fileSize = (10).kilobytes()
console.log(fileSize.bits)          // -> 81920
console.log(fileSize.bytes)         // -> 10240
console.log(fileSize.kilobytes)     // -> 10
console.log(fileSize.megabytes)     // -> 0.009765625
console.log(fileSize.gigabytes)     // -> 0.0000095367431640625
console.log(fileSize.terabytes)     // -> 9.313225746154785e-9
```

There are a few extension methods that allow you to turn a number into a ByteSize instance:

```ts
(3).bits();
(5).bytes();
(10.5).kilobytes();
(2.5).megabytes();
(10.2).gigabytes();
(4.7).terabytes();
```

You can also add/subtract the values

```ts
let f = (4).gigabytes().add((22).megabytes()).subtract((980).kilobytes()).addGigabytes(1)
console.log(f.toString()) // -> 5.020549774169922 GB
```

## <a id="vocabularies">Vocabularies</a>

### Pluralize

`Pluralize` pluralizes the provided input while taking irregular and uncountable words into consideration:

```ts
import "https://deno.land/x/humanizer.ts/vocabularies.ts"

"Man".pluralize()       // -> Men
"string".pluralize()    // -> "strings"

```

### Singularize

`Singularize` singularizes the provided input while taking irregular and uncountable words into consideration:

```ts
"Men".singularize()     //-> "Man"
"strings".singularize() //-> "string"
```

## <a id="ordinalize">Ordinalize</a>

```ts
import "https://deno.land/x/humanizer.ts/ordinalize.ts"

(1).ordinalize() => "1st"
(5).ordinalize() => "5th"
```

## <a id="toquantity">ToQuantity</a>

```ts
import "https://deno.land/x/humanizer.ts/toQuantity.ts"

"case".toQuantity(0) => "0 cases"
"case".toQuantity(1) => "1 case"
"case".toQuantity(5) => "5 cases"
"man".toQuantity(0) => "0 men"
"man".toQuantity(1) => "1 man"
"man".toQuantity(2) => "2 men"
```

ToQuantity can figure out whether the input word is singular or plural and will singularize or pluralize as necessary:

```ts
"men".toQuantity(2) => "2 men"
"process".toQuantity(2) => "2 processes"
"process".toQuantity(1) => "1 process"
"processes".toQuantity(2) => "2 processes"
"processes".toQuantity(1) => "1 process"
```

You can also pass a second argument, `ShowQuantityAs`, to `toQuantity` to specify how you want the provided quantity to be outputted. The default value is `ShowQuantityAs.Numeric` which is what we saw above. The other two values are `ShowQuantityAs.Words` and `ShowQuantityAs.None`.

```ts
"case".toQuantity(5, ShowQuantityAs.Words) => "five cases"
"case".toQuantity(5, ShowQuantityAs.None) => "cases"
```

## <a id="number_to_numbers">Number to numbers</a>

Humanizer provides a fluent API that produces (usually big) numbers in a clearer fashion:

```ts
import "https://deno.land/x/humanizer.ts/numberToNumbers.ts"

(1.25).Billions() => 1250000000
(3).Hundreds().Thousands() => 300000
```

## <a id="number_to_words">Number to words</a>

Humanizer can change numbers to words using the `toWords` extension:

```ts
import "https://deno.land/x/humanizer.ts/numberToWords.ts"

(1).toWords() => "one"
(10).toWords() => "ten"
(11).toWords() => "eleven"
(122).toWords() => "one hundred and twenty-two"
(3501).toWords() => "three thousand five hundred and one"
```

## Number to ordinal words

```ts
import "https://deno.land/x/humanizer.ts/numberToWords.ts"

(0).toOrdinalWords() => "zeroth"
(1).toOrdinalWords() => "first"
(2).toOrdinalWords() => "second"
(8).toOrdinalWords() => "eighth"
(10).toOrdinalWords() => "tenth"
(11).toOrdinalWords() => "eleventh"
(12).toOrdinalWords() => "twelfth"
(20).toOrdinalWords() => "twentieth"
(21).toOrdinalWords() => "twenty first"
(121).toOrdinalWords() => "hundred and twenty first"
```

## <a id="roman_numerals">Roman Numerals</a>

Humanizer can change numbers to Roman numerals using the `toRoman` extension. The numbers 1 to 10 can be expressed in Roman numerals as follows:

```ts
import "https://deno.land/x/humanizer.ts/romanNumerals.ts"

(1).toRoman() => "I"
(2).toRoman() => "II"
(3).toRoman() => "III"
(4).toRoman() => "IV"
(5).toRoman() => "V"
(6).toRoman() => "VI"
(7).toRoman() => "VII"
(8).toRoman() => "VIII"
(9).toRoman() => "IX"
(10).toRoman() => "X"
```

Also the reverse operation using the `fromRoman` extension.

```ts
"I".fromRoman() => 1
"II".fromRoman() => 2
"III".fromRoman() => 3
"IV".fromRoman() => 4
"V".fromRoman() => 5
```

## <a id="metric_numerals">Metric numerals</a>

Humanizer can change numbers to Metric numerals using the `toMetric` extension. The numbers 1, 1230 and 0.1 can be expressed in Metric numerals as follows:

```ts
import "https://deno.land/x/humanizer.ts/metricNumerals.ts"

(1).toMetric() => "1"
(1230).toMetric() => "1.23k"
(0.1).toMetric() => "100m"
```

Also the reverse operation using the `fromMetric` extension.

```ts
"1".fromMetric() => 1
"1.23k".fromMetric() => 1230
"100m".fromMetric() => 0.1
```
