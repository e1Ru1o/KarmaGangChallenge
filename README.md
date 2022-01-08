# KarmaGangChallenge

This repository is an implementation of the following challenge:
https://twitter.com/karmacoma_eth/status/1475283580121010176

## Solution

### How to be cool?
To be cool the address interacting with the KarmaGang contract must start with
`0xc0de42`. This kind of addresses can be created using `CREATE2`.

### How to be a MagicERC20?
`MagicERC20` should show balance increasement between calls in the same transaction.
So, an idea to implement this is to use `gasLeft()` because this value decreases during
the transaction execution. The current implementation returns `10**77 - gasLeft()` that should be an increasing value.

### How to be definitelyNotContract?
To make a valid submission to KarmaGang contract the address interacting with it should
be previously registrered via `register()` function. Only the addresses without code are 
marked as `definitelyNotContract`. As we need a `MagicERC20` contract as the caller to `submit`
the registration, it will only work if it is executed during the contract construction, i.e 
the contract `constructor` function should call the KarmaGang `register` function. 

## Extra details

### Factory
- To use `CREATE2` is necessary to deploy a factory contract
    > Deployed Factory: `0xE5e5b7FfD841FFA05804368c0343A81132bD69aE`

    You can learn more about this using the following repo:
    https://github.com/miguelmota/solidity-create2-example

### E1Ru1oMagicERC20
- The contract implementation is the same one used in the
    challenge submission to match the bycode used in the deployment
    > Deployment txn: `0x37504f317ae6a2d90b7efbd0cf0f0d221ecc7034c1b5f3c5624bc3200088dc24`
- Line 24 is not needed, so it can be removed.
- The contract can be improved a bit parameterizing `claim` function to send custom submissions `;-P`.


### Compute the 0xc0de42 address
- Do all the changes you consider in the contracts.
- Deploy your factory.
- Set the the address of your factory in the `factory` variable in `c0de42.finder.js#L6` script.
- Run the `c0de42.finder.js` script. (`npm run address`)
- Wait until the salt is found.


## Challenge submission:
`0x26c0006ba7985db0a6ad68399a39b404f909d4ebe56312e979624fa39080fd81`