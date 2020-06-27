import { assertEquals } from "../../../test_deps.ts";
import { ByteSize } from "./ByteSize.ts"

Deno.test("test_bytesize_fromBits", function () {
    const result = ByteSize.fromBits(8);
    assertEquals(8, result.bits)
    assertEquals(1, result.bytes)
})

Deno.test("test_bytesize_fromBytes", function () {
    const result = ByteSize.fromBytes(1.5)
    assertEquals(12, result.bits)
    assertEquals(1.5, result.bytes)
})

Deno.test("test_bytesize_fromKilobytes", function () {
    const result = ByteSize.fromKilobytes(1.5)
    assertEquals(1536, result.bytes)
    assertEquals(1.5, result.kilobytes)
})

Deno.test("test_bytesize_fromMegabytes", function () {
    const result = ByteSize.fromMegabytes(1.5)
    assertEquals(1572864, result.bytes)
    assertEquals(1.5, result.megabytes)
})

Deno.test("test_bytesize_fromGigabytes", function () {
    const result = ByteSize.fromGigabytes(1.5)
    assertEquals(1610612736, result.bytes)
    assertEquals(1.5, result.gigabytes)
})

Deno.test("test_bytesize_fromTerabytes", function () {
    const result = ByteSize.fromTerabytes(1.5)
    assertEquals(1649267441664, result.bytes)
    assertEquals(1.5, result.terabytes)
})

Deno.test("test_bytesize_parseKilo", function () {
    assertEquals(ByteSize.fromKilobytes(1020), ByteSize.parse("1020KB"))
})

Deno.test("test_bytesize_parseDecimalMegabytes", function () {
    assertEquals(ByteSize.fromMegabytes(100.5), ByteSize.parse("100.5MB"))
})

Deno.test("test_bytesize_tryParseWorksWithLotsOfSpaces", function () {
    assertEquals(ByteSize.fromKilobytes(100), ByteSize.parse(" 100 KB "))
})

Deno.test("test_bytesize_parseBits", function () {
    assertEquals(ByteSize.fromBits(1), ByteSize.parse("1b"))
})

Deno.test("test_bytesize_parseBytes", function () {
    assertEquals(ByteSize.fromBytes(1), ByteSize.parse("1B"))
})

Deno.test("test_bytesize_parseKilobytes", function () {
    assertEquals(ByteSize.fromKilobytes(1020), ByteSize.parse("1020KB"))
})

Deno.test("test_bytesize_parseMegabytes", function () {
    assertEquals(ByteSize.fromMegabytes(1020), ByteSize.parse("1020MB"))
})

Deno.test("test_bytesize_parseGigabytes", function () {
    assertEquals(ByteSize.fromGigabytes(805), ByteSize.parse("805GB"))
})

Deno.test("test_bytesize_parseTerabytes", function () {
    assertEquals(ByteSize.fromTerabytes(803), ByteSize.parse("803TB"))
})

Deno.test("test_bytesize_add", function () {
    const size1 = ByteSize.fromBytes(1)
    const result = size1.add(size1);
    assertEquals(2, result.bytes)
    assertEquals(16, result.bits)
})

Deno.test("test_bytesize_addBits", function () {
    const size = ByteSize.fromBytes(1).addBits(8);
    assertEquals(2, size.bytes)
    assertEquals(16, size.bits)
})

Deno.test("test_bytesize_addBytes", function () {
    const size = ByteSize.fromBytes(1).addBytes(1);
    assertEquals(2, size.bytes)
    assertEquals(16, size.bits)
})

Deno.test("test_bytesize_addKilobytes", function () {
    const size = ByteSize.fromKilobytes(2).addKilobytes(2)
    assertEquals(4 * 1024 * 8, size.bits)
    assertEquals(4 * 1024, size.bytes)
    assertEquals(4, size.kilobytes)
})

Deno.test("test_bytesize_addMegabytes", function () {
    const size = ByteSize.fromMegabytes(2).addMegabytes(2)
    assertEquals(4 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024, size.bytes)
    assertEquals(4 * 1024, size.kilobytes)
    assertEquals(4, size.megabytes)
})

Deno.test("test_bytesize_addGigabytes", function () {
    const size = ByteSize.fromGigabytes(2).addGigabytes(2)
    assertEquals(4 * 1024 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024 * 1024, size.bytes)
    assertEquals(4 * 1024 * 1024, size.kilobytes)
    assertEquals(4 * 1024, size.megabytes)
    assertEquals(4, size.gigabytes)
})

Deno.test("test_bytesize_addTerabytes", function () {
    const size = ByteSize.fromTerabytes(2).addTerabytes(2)
    assertEquals(4 * 1024 * 1024 * 1024 * 1024 * 8, size.bits)
    assertEquals(4 * 1024 * 1024 * 1024 * 1024, size.bytes)
    assertEquals(4 * 1024 * 1024 * 1024, size.kilobytes)
    assertEquals(4 * 1024 * 1024, size.megabytes)
    assertEquals(4 * 1024, size.gigabytes)
    assertEquals(4, size.terabytes)
})

Deno.test("test_bytesize_subtract", function () {
    const size = ByteSize.fromBytes(4).subtract(ByteSize.fromBytes(2));
    assertEquals(16, size.bits)
    assertEquals(2, size.bytes)
})
