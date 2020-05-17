import { assertEquals } from "../../test_deps.ts"
import "../../romanNumerals.ts"

Deno.test("test_toRoman", function () {
    assertEquals((1).toRoman(), "I")
    assertEquals((10).toRoman(), "X")
    assertEquals((400).toRoman(), "CD")
    assertEquals((500).toRoman(), "D")
    assertEquals((3999).toRoman(), "MMMCMXCIX")
})

Deno.test("test_fromRoman", function () {
    assertEquals("MMMCMXCIX".fromRoman(), 3999)
    assertEquals("D".fromRoman(), 500)
    assertEquals("CD".fromRoman(), 400)
    assertEquals("XI".fromRoman(), 11)
    assertEquals("MMMCMXCIX".fromRoman(), 3999)
})