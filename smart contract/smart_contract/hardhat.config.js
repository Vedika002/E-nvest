// https://eth-rinkeby.alchemyapi.io/v2/jyps-9XtABmjB2m6KH_JyPvt_yvwpH-G

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/jyps-9XtABmjB2m6KH_JyPvt_yvwpH-G',
      accounts: ['3313271ea2b1833d34d6bfb40dfbf248034272ff288ee28a2d5b87ba283d2e4e']
    }
  }
}