// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

// 发行一个新代币 MyToken
contract MyToken {
  // 发行数量：1万
  uint256 public total = 10000;

  // 用来保存代币所有者的账号地址（也是部署这个代币合约的账号）
  address public owner;

  // 用来记账的map，保存每个账号拥有的代币数量
  mapping(address => uint256) balances;

  constructor() payable {
    // 这里的msg.sender就是部署这个代币合约的账号，也就是你自己的账号
    balances[msg.sender] = total; // 记账：把所有代币给了部署代币的账号
    owner = msg.sender; // 保存这个代币的部署人账号
  }

  // 代币转账函数（和 address.transfor 不同，这里是代币，address.transfor是真实的虚拟货币）
  // 从调用合约的账户，给目标账户to转代币，数量amount
  function transfor(address to,  uint256 amount) public payable {
    require(balances[msg.sender] >= amount, "transfor fail, confirm your balances");
    balances[msg.sender] -= amount; // 记账：调用者账户转出，余额减少
    balances[to] += amount; // 记账：接收账户收到打款
  }

  // 查询账本中的账号余额
  function balanceOf(address account) external view returns (uint256) {
    return balances[account];
  }
}