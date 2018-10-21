import { describe, it } from "mocha"
import { getName } from "../hoge"
import { assert } from "chai"

describe("getName関数のテスト", () => {
    it("is taro?", () => {
        assert.equal(getName(), "taro")
    })
})