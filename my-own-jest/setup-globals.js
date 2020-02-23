const { test, expect, spyOn } = require('./src/testing-framework')

global.test = test
global.expect = expect
global.spyOn = spyOn
