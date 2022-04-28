let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:8000';

describe('Insert a Post: ', () => {
    it('should insert a post', (done) => {
        chai.request(url)
            .post('/post/create')
            .send({
                jobTitle: "Titulo sin editar",
                freelancerId: 1,
                jobDescription: "Description",
                jobPrice: 10000,
                postCategory: 1,
                thumbnailUrl: "google.com",
                adPriority: 10
              })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Fail Inserting a Post: ', () => {
    it('shouldnt insert a post', (done) => {
        chai.request(url)
            .post('/post/create')
            .send({
                jobTitle: "Titulo sin editar",
                freelancerId: null,
                jobDescription: "Description",
                jobPrice: 10000,
                postCategory: 1,
                thumbnailUrl: "google.com",
                adPriority: 10
              })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(500);
                done();
            });
    });
});