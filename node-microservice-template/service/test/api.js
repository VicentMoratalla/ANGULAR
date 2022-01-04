const app = require('../../index');
const chai = require('chai');
const request = require('supertest');
chai.should();

describe('API', function () {
  it('get all page histories', (done)=>{
    console.log('APP ',app);
    request(app)
      .get('/pagehistories')
      .set('x-auth-token', 'shhhhh')
      .expect((res)=>{
          res.status.should.equal(200);
      })
      .end(done);
  });
});