// SPDX-License-Identifier: MIT

pragma solidity >=0.8.19;

struct Ikun {
    string name;
    int num; 
}
contract Struct {
    Ikun public ikun;
    constructor() {
        ikun.name = "ikun";
        ikun.num = 4;
    }
}