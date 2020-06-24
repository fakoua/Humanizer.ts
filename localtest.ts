
import "./metricNumerals.ts"

console.log((1).toMetric())
console.log((1230).toMetric())
console.log((0.1).toMetric())

//Also the reverse operation using the fromMetric extension.

console.log("1.23k".fromMetric())
console.log("100m".fromMetric())
