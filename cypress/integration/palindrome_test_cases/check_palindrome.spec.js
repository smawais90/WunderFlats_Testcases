const fn = require("../../../palindrome_func/palindrome")
// we can make data set of different strings to check our function
var strings = {
    pel_string: "SAAs",
    non_pel_string: "SAass"
}
describe('pelindrome test cases', () => {
    it('should return true for the pelindrome check', () => {
        const res = fn.palindrome(strings.pel_string)
        expect(res).to.be.true
    })
    it('should return false for the pelindrome check', () => {
        const res = fn.palindrome(strings.non_pel_string)
        expect(res).to.be.false
    })
})