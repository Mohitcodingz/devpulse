const request = require('supertest');
const app = require('../app');
describe('Health route', ()=>{
    test('200 status for Health Route',async()=>{
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.text).toBe('This is a Health Page')
    });
});