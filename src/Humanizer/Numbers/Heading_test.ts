import { test, assertEquals } from "../../../test_deps.ts"
import * as h from "./Heading.ts"

test(function test_toHeadingShort() {
    assertEquals(h.Heading.toHeading(0), "N")
    assertEquals(h.Heading.toHeading(11.2), "N")
    assertEquals(h.Heading.toHeading(11.3), "NNE")
    assertEquals(h.Heading.toHeading(22.5), "NNE")
    assertEquals(h.Heading.toHeading(33.7), "NNE")
    assertEquals(h.Heading.toHeading(33.8), "NE")
    assertEquals(h.Heading.toHeading(67.5), "ENE")
    assertEquals(h.Heading.toHeading(123.8), "SE")
    assertEquals(h.Heading.toHeading(146.3), "SSE")
    assertEquals(h.Heading.toHeading(180), "S")
    assertEquals(h.Heading.toHeading(281.3), "WNW")
    assertEquals(h.Heading.toHeading(326.3), "NNW")
    assertEquals(h.Heading.toHeading(348.7), "NNW")
})

test(function test_toHeading_Full() {
    assertEquals(h.Heading.toHeading(0, h.HeadingStyle.Full), "north")
    assertEquals(h.Heading.toHeading(22.5, h.HeadingStyle.Full), "north-northeast")
    assertEquals(h.Heading.toHeading(45, h.HeadingStyle.Full), "northeast")
    assertEquals(h.Heading.toHeading(112.5, h.HeadingStyle.Full), "east-southeast")
    assertEquals(h.Heading.toHeading(720, h.HeadingStyle.Full), "north")
})

test(function test_fromHeading_short() {
    assertEquals(h.Heading.fromAbbreviatedHeading("N"), 0)
    assertEquals(h.Heading.fromAbbreviatedHeading("NNE"), 22.5)
    assertEquals(h.Heading.fromAbbreviatedHeading("NE"), 45)
    assertEquals(h.Heading.fromAbbreviatedHeading("SSE"), 157.5)
    assertEquals(h.Heading.fromAbbreviatedHeading("WSW"), 247.5)
})

test(function test_toHeadingArrow() {
    assertEquals(h.Heading.toHeadingArrow(0), "↑");
    assertEquals(h.Heading.toHeadingArrow(11.2), "↑");
    assertEquals(h.Heading.toHeadingArrow(11.3), "↑");
    assertEquals(h.Heading.toHeadingArrow(22.5), "↗");
    assertEquals(h.Heading.toHeadingArrow(56.2), "↗");
    assertEquals(h.Heading.toHeadingArrow(67.5), "→");
    assertEquals(h.Heading.toHeadingArrow(101.3), "→");
    assertEquals(h.Heading.toHeadingArrow(112.5), "↘");
    assertEquals(h.Heading.toHeadingArrow(146.3), "↘");
    
    assertEquals(h.Heading.toHeadingArrow(157.5), "↓");
    assertEquals(h.Heading.toHeadingArrow(191.3), "↓");
    assertEquals(h.Heading.toHeadingArrow(202.5), "↙");
    assertEquals(h.Heading.toHeadingArrow(236.3), "↙");
    
    assertEquals(h.Heading.toHeadingArrow(247.5), "←");
    assertEquals(h.Heading.toHeadingArrow(281.3), "←");
    assertEquals(h.Heading.toHeadingArrow(292.5), "↖");
    assertEquals(h.Heading.toHeadingArrow(326.3), "↖");
    assertEquals(h.Heading.toHeadingArrow(337.5), "↑");
    assertEquals(h.Heading.toHeadingArrow(348.8), "↑");
})