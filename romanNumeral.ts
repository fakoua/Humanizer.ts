
    import { RomanNumeral } from "./src/Humanizer/Numbers/RomanNumeral.ts"

    declare global {
        interface Number {
            toRoman(): string
        }
    
        interface String {
            fromRoman(): number
        }
    }

    Number.prototype.toRoman = function (): string {
        return RomanNumeral.toRoman(this)
    }
    
    String.prototype.fromRoman = function (): number {
        return RomanNumeral.fromRoman(this)
    }
    