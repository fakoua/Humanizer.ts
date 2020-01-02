import './src/Humanizer/Extensions/ByteSize.ts'
import './src/Humanizer/Extensions/ToQuantity.ts'
import './src/Humanizer/Extensions/Vocabularies.ts'
import './src/Humanizer/Extensions/Ordinalize.ts'

function testBytes() {
    let fileSize = (10).kilobytes()
    console.log(fileSize.bits)
    console.log(fileSize.bytes)
    console.log(fileSize.kilobytes)
    console.log(fileSize.megabytes)
    console.log(fileSize.gigabytes)
    console.log(fileSize.terabytes)
}

function testQuatity() {
    console.log("case".toQuantity(0))
    console.log("case".toQuantity(1))
    console.log("case".toQuantity(2))
}

function testVocap() {
    console.log("Man".pluralize())
    console.log("women".singularize())
}

function testOrd() {
    console.log("2".ordinalize())
    console.log((5).ordinalize())
}
testOrd()