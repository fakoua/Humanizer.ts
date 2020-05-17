import { assertEquals } from "../../test_deps.ts"
import "../../numberToNumbers.ts"

Deno.test("test_tens", function () {
    assertEquals((10).tens(), 100)
})

Deno.test("test_hundreds", function () {
    assertEquals((512).hundreds(), 51200)
})

Deno.test("test_thousands", function () {
    assertEquals((12).thousands(), 12000)
})

Deno.test("test_millions", function () {
    assertEquals((6.1).millions(), 6100000)
})

Deno.test("test_billions", function () {
    assertEquals((6.1).billions(), 6100000000)
})



