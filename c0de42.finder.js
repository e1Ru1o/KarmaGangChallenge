const { keccak256 } = require("@ethersproject/keccak256");
const { getCreate2Address: create2} = require("@ethersproject/address");
const { bytecode } = require('./artifacts/contracts/E1Ru1oMagicERC20.sol/E1Ru1oMagicERC20.json')

// Address of the factory contract
const factory = "0xe5e5b7ffd841ffa05804368c0343a81132bd69ae";

function numberToUint256(value) {
    const hex = value.toString(16)
    return `0x${'0'.repeat(64 - hex.length)}${hex}`
}

function getCreate2Address(creatorAddress, salt, byteCode) {
    return create2(
        creatorAddress,
        numberToUint256(salt),
        keccak256(byteCode),
    )
}

console.log("Computing the 0xc0de42 prefixed address/salt. Execution can take a bit...")
for (let i = 0; ; ++i) {
    addr = getCreate2Address(factory, i, bytecode);
    if (addr.toLowerCase().startsWith("0xc0de42")) {
        console.log(`address: ${addr}`);
        console.log(`salt number: ${i}`);
        console.log(`salt hex: ${numberToUint256(i)}`);
        break;
    }
    // uncomment the below line to know the last number processed 
    // console.log(i)
}
