var SimpleAuction = artifacts.require("./SimpleAuction.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleAuction, 20000, "0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
};
