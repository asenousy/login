const { When, Then } = require('cucumber')
const { expect } = require('chai')
const jwt = require('jsonwebtoken')

let token

When('I login with test account', function (done) {
    this.request('/auth', { email: 'test@test.com', password: 'test' }).then((data) => {
        token = JSON.parse(data).token
        done()
    })
})

Then('I should receive a jwt token', function () {
    const user = jwt.decode(token)
    expect(user.fullName).to.equal('test test')
    expect(user.zip).to.equal('123-1224')
})
