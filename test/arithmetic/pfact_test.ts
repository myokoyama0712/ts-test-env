import { describe, it } from "mocha"
import { assert } from "chai"
import { trialDivision } from "../../modules/arithmetic/pfact"

describe("素数と素因数分解", () => {
    it("試し割りによる素因数分解", () => {
        let m = new Map<number, number>()
        m.set(2, 3)
        m.set(3, 2)
        m.set(5, 1)
        assert.equal(m, trialDivision(360))
    })
})