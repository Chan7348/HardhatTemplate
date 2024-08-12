import { ethers } from "hardhat";
import { vars } from "hardhat/config";

async function deploy() {
  const Struct = await ethers.getContractFactory("Struct");
  const struct = await Struct.deploy();
  console.log("Struct deployed to:", await struct.getAddress());

}

async function main() {
  const struct = await ethers.getContractAt("Struct", "0xe3Bb3bD7e88EBbB2E42453eBe5945427e4C93Bc6");
  const ikun = await struct.ikun();
  console.log(ikun.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
