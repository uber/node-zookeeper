var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname, './package.json')));

module.exports = require(binding_path);
module.exports = require('./zookeeper');
module.exports.ZooKeeper = module.exports; // for backwards compatibility
module.exports.Promise = require('./zk_promise');