require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food repair reflect rural home install light army gentle'; 
let testAccounts = [
"0x5ca0cacf2a75e97575768f1d2c1612233bc011efa91cbffcdb985e9a6ed5cac4",
"0xf15e3a989eac2d825b7ec778fe317c67924e9a7466cd0bd4c4d594755b43b933",
"0x58c7bc7b1aee88038ed978d9a071ccc5202d7a7f2011624ad7fd28b4a5566d51",
"0x68795cf7131bbee19fe0bf9d339a7ac97c21ad93162db474e48ef76151585076",
"0x24a41916c9d982fc743f38937b09bcc4899ef3c021f39e17dc152f972ab7c04b",
"0x6e7710950b8627120c55d9686def06a0ad3aeaef910c06b696bdd2854ee16167",
"0x07f2f17c97a876e38b3f73ee126f61a96d7f6588f71ad24f67ec144974b5f0d3",
"0x1423c0e65bfadcfd2753a1fa851ac375072a2d289813a63d258d06007f617894",
"0xb224d213780bbc1ecdd97f1e8a3f3bd4785f1977f1b3c344c0b32b811210bfba",
"0xac54238f06376adb09edf425c468117c26d71e764e91b58d773b698d69dfcbb4"
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


