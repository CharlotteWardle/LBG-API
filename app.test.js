const request = require('supertest');
const app = require('./app').app;
const build = require('./app').itemBuilder;

// unit testing the item builder
describe('Unit Tests', () => {

    test('item object builder', () => {
        expect(build('my first item', 'a test item', '4', '2'))
        .toMatchObject(
            {
                name :'my first item',
                description :'a test item',
                price :4,
                _id :2
            }
        );
    });

});

describe('GET requests', () => {
    
    test('GET /read endpoint, expect 200', async () => {
        const res = await request(app).get('/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET /bad endpoint, expect 404', async () => {
        const res = await request(app).get('/read')
        expect(res.statusCode).toBe(200);
    });

});

describe('CREATE request', () => { 

    test('CREATE item test, expect 201', async () => {
        const res = await request(app)
                            .post('/create')
                            .send({
                                name : "test item",
                                description : "test description",
                                price : 99
                            });

        expect(res.statusCode).toBe(201);
    });
});