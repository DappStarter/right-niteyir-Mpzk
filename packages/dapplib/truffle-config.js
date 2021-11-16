require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe street cruise spice quality harvest muscle army gather'; 
let testAccounts = [
"0xe83b24a1d6644546edffbcf516ffe7c696b1fa0eb89d55d8abad2084eb8ab1c9",
"0x413fa574be4904ba15a499e74a94b4457f7b8abb9331396868673423a183ff48",
"0x90609abf98667ee506ccb04621ec44607c6d7eac731505d3b96b8ebda09cd811",
"0x0714dab3707dffe12f3bb26cef2c14c9a7cbc88876ddb715438ce60f1210536a",
"0x3d4c8f57e0073695aadb635c1d0b743dbe836dff4d70747cecde43f4e7f5db36",
"0x1c4565708019f11619e66f2a092d5e26ea5f557c80c6828371bbee893df0b70c",
"0x826050eaf6e4c980799cdaead0a8b61fecabf55ddd61c4b6fc8dd5b985eb2c09",
"0x899e2ddd8f8ea1d9a9a255347a5949d4e95504b5dd64e3f603903dcbf17a5cb5",
"0x4eee142a1bbb790784f984377ef16af16aefb567c3e3240fe4cc2e0ce6251c61",
"0x530553d206515fbc32dfc4e77e655f80f5db40016aeb7d6b5b63c4edb2ff5d15"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


