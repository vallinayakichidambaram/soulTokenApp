// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SamToken is ERC20 {
    constructor() ERC20("SamToken", "SAM") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}