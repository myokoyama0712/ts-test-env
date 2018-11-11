export function gcd(a: number, b: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("[argument error]: gcd only accepts two NATURAL numbers")
    }
    if (a < b) {
        let tmp = a
        a = b
        b = tmp
    }

    // Euclidean Algorithm
    while (b > 0) {
        let div = a % b
        a = b
        b = div
    }

    return a
}

export function lcm(a: number, b: number): number {
    if (a <= 0 || b <= 0) {
        throw new Error("[argument error]: gcd only accepts two NATURAL numbers")
    }

    let gcdVal = gcd(a, b)
    return (a/gcdVal)*b
}