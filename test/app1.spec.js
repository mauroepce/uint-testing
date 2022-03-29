const { User } = require("../src/app1");
const axios = require("axios");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const expect = chai.expect;
chai.use(sinonChai);

describe("The User Class", () => {

    const sandbox = sinon.createSandbox();
    let users;

    beforeEach(() => {
        user = new User("mauroepce");
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("Should be able to get the User Id", (done) => {
        const getStub = sandbox.stub(axios, "get").resolves({ data: { id: 1234 }});
        user.getUserId()
            .then(result => {
                expect(result).to.be.a("number");
                expect(result).to.be.eq(1234);
                expect(getStub).to.have.been.calledOnce;
                expect(getStub).to.have.been.calledWith("https://api.github.com/users/mauroepce")
                done();
            })
            .catch(done);
    });

    it("Should return a repository if the user can view repos", (done) => {
        const getStub = sandbox.stub(axios, "get").resolves({ data: ["repo1", "repo2", "repo3"]});
        sandbox.stub(user, "canViewRepos").value(true); 
        user.getUserRepo(2)
            .then(response => {
            expect(response).to.be.eq("repo3");
            expect(getStub).to.have.been.calledOnceWith("https://api.github.com/users/mauroepce/repos");
            done();
        })
        .catch(done);
    });

})
 
