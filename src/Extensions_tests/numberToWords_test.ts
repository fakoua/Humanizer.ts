import {  assertEquals } from "../../test_deps.ts"
import "../../numberToWords.ts"

Deno.test("test_toWords", function () {
    assertEquals((1).toWords(), "one")
})

Deno.test("test_toOrdinalWords", function () {
    assertEquals((15).toOrdinalWords(), "fifteenth")
})
