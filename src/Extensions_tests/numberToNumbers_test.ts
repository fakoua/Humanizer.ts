import { test, assertEquals } from "../../test_deps.ts"
import "../../numberToNumbers.ts"

test(function test_tens() {
    assertEquals((10).tens(), 100)
})

test(function test_hundreds() {
    assertEquals((512).hundreds(), 51200)
})

test(function test_thousands() {
    assertEquals((12).thousands(), 12000)
})

test(function test_millions() {
    assertEquals((6.1).millions(), 6100000)
})

test(function test_billions() {
    assertEquals((6.1).billions(), 6100000000)
})



