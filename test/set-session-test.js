const assert = require('chai').assert;
const willCoreProxy = require("willcore.core");
const axios = require('axios');

describe('models-test', function () {
    before(async function () {
        require('module-alias/register');
    });
    it('action-model-test', async function () {
       let willcore = willCoreProxy.new();
       willcore.testServer.server[__dirname] = 8581;
       willcore.testServer.http;
       willcore.testServer.user.session;
       willcore.testServer.auth.service = "/mocks/getDataRPCService.js";
    //    let result = await axios.get('http://localhost:8581/auth/getData?resultCount=12&name=JohnDoe');
    //    let result = await axios.get('http://localhost:8581/auth/getData?resultCount=12&name=JohnDoe');
    });
});