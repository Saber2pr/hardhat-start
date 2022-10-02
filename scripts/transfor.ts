import { ethers } from 'hardhat';

async function main() {
  // 获取已部署的合约
  const mytoken = await ethers.getContractAt('MyToken', '0x09675EedB1ac2B2044b4a53078768f32122adFC6')
  
  // 获取交易前余额
  const balBefore = await mytoken.balanceOf('0x72Ec9ed07B39aD2dB299ceE22a269130FA41d718')
  console.log('余额', balBefore.toString())

  // 合约交易
  const block = await mytoken.transfor('0x3522c7489fFbaB83E3Eea6bf3fBCadbdbab675f3', 5000)
  
  // 等待区块被挖矿
  await block.wait()

  // 获取交易后余额
  const balAfter = await mytoken.balanceOf('0x72Ec9ed07B39aD2dB299ceE22a269130FA41d718')
  console.log('余额', balAfter.toString())
}

main().then(console.log)