import request from 'supertest';
import server from '../server';

describe('Test shortUrl route', () => {
  it('Request /us893d should return URL not found', async () => {
    const result = await request(server).get('/us893d').send();

    expect(result.status).toBe(404);
    expect(result.body.data).toBe('Url not found');
  });
});

describe('Test / POST route', () => {
  it('Responds with json', async (done) => {
    await request(server)
      .post('/')
      .send({ url: 'www.google.com' })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
