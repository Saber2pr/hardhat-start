import { ethers } from "hardhat";

async function main() {
  const myToken = await ethers.getContractFactory('MyToken')
  
  const gasAmount = ethers.utils.parseEther("0.001");

  // 创建部署
  const mytoken = await myToken.deploy({value: gasAmount})

  await mytoken.transfor('0x3522c7489fFbaB83E3Eea6bf3fBCadbdbab675f3', 1)

  // 等待部署完成
  await mytoken.deployed()

  // 输出部署结果
  console.log(mytoken.address)
}

main().catch(console.log)