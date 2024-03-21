const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("DeploySamToken", (m) => {
 
  const SamToken = m.contract("SamToken", []);

  return { SamToken };
});