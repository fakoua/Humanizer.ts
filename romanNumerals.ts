
    import { RomanNumerals } from "./src/Humanizer/Numbers/RomanNumerals.ts"

    declare global {
        interface Number {
            toRoman(): string
        }
    
        interface String {
            fromRoman(): number
        }
    }

    Number.prototype.toRoman = function (): string {
        return RomanNumerals.toRoman(this)
    }
    
    String.prototype.fromRoman = function (): number {
        return RomanNumerals.fromRoman(this)
    }
    