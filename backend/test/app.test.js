const request = require('supertest');
const app = require('../app');
const { json } = require('express');
// health route 200 status checked successfully
describe('Health route', () => {
    test('200 status for Health Route', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.text).toBe('This is a Health Page')
    });
});

// homepage route 200 status checked successfully
describe('HomePage route', () => {
    test('200 status for HomePage Route', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('HomePage')
    })
})
// checking all wrong status code for failing fo basedata , commitsdata & contributorsData
describe('Repository API Route', () => {
    // repository error for invalid repo or owner name checked successfully
    test('404 status for Invalid Owner & repo', async () => {
        const fetchMock = jest.spyOn(global, 'fetch');
        fetchMock.mockResolvedValue({
            ok: false,
            status: 404
        })
        const response = await request(app).get('/api/repository/faceboox/react');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Repository or resource not found!')
        // explaination: - we have created a fake response ok false and status 404  values whenever we use the fetch in next line it will use these values instead of visiting the internet github url. to save time and other errors for live error jest.spyOn(global, 'fetch') is active in the background, Jest grabs that fetch request mid-air and blocks it from leaving your computer.
        // in response = await request and get(///react ...etc) we are going to backend and get the data response by running that route.

    })
    // if the rate limit reached
    test('RateLimit Reached', async () => {
        const fetchMock = jest.spyOn(global, 'fetch');
        fetchMock.mockResolvedValue({
            ok: false,
            status: 403,
            headers: {
                get: (header) => {
                    if (header === 'x-ratelimit-remaining') {
                        return '0';
                    }
                    return null;
                }
            }
        });

        // we couldn't have just wrote simply x-ratelimit-remaining:0 because that's a plain object doesn't have the get method so it will throw an error.so we can just write 
        //  headers: new Headers({
        //     'x-ratelimit-remaining': '0'
        // }) or above one using get method

        const response = await request(app)
            .get('/api/repository/faceboox/react');
        expect(response.status).toBe(429);
        expect(response.body.message).toBe('GitHub API rate limit exceeded');
    });
    
    // Test successful repository response 200 related to the repositroy commits and contributors 
    test('should return repository, commits and contributors', async () => {
        const fetchMock = jest.spyOn(global, 'fetch');

        // First request: Repository
        fetchMock.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ({
                name: 'DevPulse'
            })
        });

        // Second request: Commits
        fetchMock.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ([
                {
                    commit: {
                        message: 'Initial commit'
                    }
                }
            ])
        });

        // Third request: Contributors
        fetchMock.mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ([
                {
                    login: 'Mohitcodingz',
                    contributions: 10
                }
            ])
        });

        const response = await request(app)
            .get('/api/repository/Mohitcodingz/DevPulse');

        expect(response.status).toBe(200);

        expect(response.body.repository.name).toBe('DevPulse');

        expect(response.body.commits[0].commit.message)
            .toBe('Initial commit');

        expect(response.body.contributors[0].login)
            .toBe('Mohitcodingz');
    });

})
afterEach(() => {
    jest.restoreAllMocks()
})