//SPDX-License-Identifier: MIT

pragma solidity 0.8.4;

interface MagicERC20 {
    function symbol() external returns (string memory);

    function balanceOf(address _owner) external view returns (uint256);
}

interface KarmaGang {
    function register() external;

    function submit(
        string calldata twitterHandle,
        string calldata freeformMessage,
        bool claimDevDaoNft
    ) external;
}

contract E1Ru1oMagicERC20 {
    string public symbol = "E1RU1O";
    KarmaGang public karma;
    uint256 public karmaCount = 0;

    constructor() {
        karma = KarmaGang(0x2f47f0A9cE8d31cfd0F661611dA26f899cb17181);
        karma.register();
    }

    function claim() external {
        karma.submit("e1Ru1o", "First challenge ever. Great challenge", true);
    }

    function balanceOf(address addr) external view returns (uint256) {
        if (addr == address(karma)) {
            return 10**77 - gasleft();
        }
        return 0;
    }
}
