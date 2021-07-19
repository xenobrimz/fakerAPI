const express = require('express');
const faker = require('faker');
const app = express();
const port = 5000;

class User {
    constructor() {
        this.firstName = faker.fake("{{name.firstName}}")
        this.lastName = faker.fake("{{name.lastName}}")
        this.phoneNumber = faker.fake("{{phone.phoneNumber}}")
        this.email = faker.fake(`${this.firstName}_${this.lastName}`+"{{random.number(200)}}@gmail.com")
        this.password = faker.fake("{{internet.password}}")
    }
}

class Company {
    constructor() {
        this.name = faker.fake("{{company.companyName}}")
        this.adress = {
            street: faker.fake('{{address.streetName}}'),
            city: faker.fake('{{address.cityName}}'),
            state: faker.fake('{{address.state}}'),
            zipCode: faker.fake('{{address.zipCode}}'),
            country: faker.fake('{{address.country}}')
        }
    }
}

app.get("/api/user/new", (req, res) => {
    res.json( new User );
    console.log(new User)
});

app.get("/api/company/new", (req, res) => {
    res.json( new Company );
});

app.get("/api/user/company", (req, res) => {
    res.json( new User );
    res.json( new Company );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );



