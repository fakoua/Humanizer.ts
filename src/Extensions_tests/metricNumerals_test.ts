import { test, assertEquals } from "../../test_deps.ts"
import "../../metricNumerals.ts"

test(function test_fromMetric() {
    assertEquals("0k".fromMetric(), 0)
    assertEquals("1.23k".fromMetric(), 1230)
    assertEquals("1 kilo".fromMetric(), 1000)
    assertEquals("1 k".fromMetric(), 1000)
    assertEquals("1milli".fromMetric(), 1E-3)
})

test(function test_toMetric() {
    assertEquals((1230).toMetric(), "1.23k")
    assertEquals((1.234E-3).toMetric(), "1.234m")
    assertEquals((12345).toMetric(), "12.345k")
})