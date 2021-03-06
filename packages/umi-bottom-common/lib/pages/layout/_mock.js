"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("@/configs/config");

var _POST$concat$GET$co;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getToken = {
  code: '0000',
  message: 'Ok',
  data: {
    access_token: 'xxxx'
  }
};
var getUserList = {
  code: '0000',
  message: 'Ok',
  data: {
    id: 'admin',
    name: '管理员',
    username: 'admin',
    password: 'admin',
    branchId: '*',
    authorities: ['PRIVILEGE_APP_READ', 'PRIVILEGE_APP_WRITE', 'PRIVILEGE_ONLINE_READ', 'PRIVILEGE_ONLINE_WRITE', 'PRIVILEGE_PARAM_READ', 'PRIVILEGE_PARAM_WRITE', 'PRIVILEGE_BATCH_READ', 'PRIVILEGE_BATCH_WRITE', 'PRIVILEGE_RBAC_READ', 'PRIVILEGE_RBAC_WRITE', 'PRIVILEGE_ORG_READ', 'PRIVILEGE_ORG_WRITE', 'PRIVILEGE_AUDIT_READ', 'PRIVILEGE_AUDIT_WRITE', 'PRIVILEGE_MONITOR_READ', 'PRIVILEGE_MONITOR_WRITE', 'PRIVILEGE_SCHEDULE_READ', 'PRIVILEGE_SCHEDULE_WRITE']
  }
};

var _default = (_POST$concat$GET$co = {}, _defineProperty(_POST$concat$GET$co, "POST ".concat(_config.apiPrefixMock, "/oauth/token"), getToken), _defineProperty(_POST$concat$GET$co, "GET ".concat(_config.apiPrefixMock, "/app/me"), getUserList), _defineProperty(_POST$concat$GET$co, "GET ".concat(_config.apiPrefixMock, "/logout"), {
  code: '0000',
  success: true,
  message: 'Ok'
}), _POST$concat$GET$co);

exports.default = _default;