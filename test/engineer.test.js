const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    describe("engineer's supers working properly", () => {
        it("Should get the correct name", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.getName()).toEqual("John")
        })
    })

    describe("engineer github generating correctly", () => {
        it("Should correctly create the github property in the object", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.gitHub).toEqual("JohnDoe")
        })
    })

    describe("getRole method", () => {
        it("Should return employee regardless of how it is called", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.role).toEqual("engineer")
            expect(engineer.getRole()).toEqual("engineer")
        })
    })



})