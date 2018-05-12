const { setWorldConstructor } = require('cucumber')
const app = require('../../../server')
const supertest = require('supertest')

class CustomWorld {
    request(endpoint, body) {
        return new Promise((resolve, reject) => {
            supertest(app)
                .post(endpoint)
                .send(body)
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res.text)
                })
        })
    }
}

setWorldConstructor(CustomWorld)
