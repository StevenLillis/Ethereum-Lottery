import Web3 from 'web3';

// let web3;

// //optimized for server-side rendering and for absent metamask

// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   //We are in the browser and metamask in running
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   //We are either on the server or the user isn't running metamask
//   const provider = new Web3.providers.HttpProvider(
//     "http://localhost:3000"
//   );

//   web3 = new Web3(provider);

// }

window.ethereum.enable();

const currProvider = window.web3.currentProvider
const web3 = new Web3(currProvider);

//const web3 = new Web3(window.web3.currentProvider);

export default web3;