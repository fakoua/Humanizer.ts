import { MetricNumerals } from "./src/Humanizer/Numbers/MetricNumerals.ts"

declare global {
    interface Number {
        toMetric(): string
    }
    interface String {
        fromMetric(): number
    }
}

Number.prototype.toMetric = function (): string {
   return MetricNumerals.toMetric(this)
}

String.prototype.fromMetric = function (): number {
    return MetricNumerals.fromMetric(this)
}
 