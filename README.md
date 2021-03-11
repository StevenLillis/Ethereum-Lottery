# Ethereum-Lottery
3032 Software Engineering Project.  Queen's University Belfast.

The Lottery DPP (Decentralised Application) was built to ensure that competitions could be held online in a fair and organised manner.  The Smart Contract, has been developed and deploy from Remix IDE,  to the Rinkeby Test Network.  Those wishing to enter into the Lottery must have Metamask installed on their browser, and connected to the Rinkeby Testnet.  The minimum stake to enter the Lottery is 0.01 Ether, with no limit on how much you can stake, or a limit on how many times one can enter the Lottery.

## Important Instructions

In order to properly interact with the Lottery DApp, you would either require the Metamask extension. Also, please hold on for about 15-30 seconds, as the transaction would need that much time to be mined on the Ethereum blockchain and propagate the transaction receipt back to the DApp.

Plese use the following link to download [Metamask](https://metamask.io/download)


> Please do not try and interact with the Manage component, unless you have been designated as the owner of the Lottery.  This component is configured to only respond to the owner of the Lottery, any attempt to run the Lottery from any other than the owner will result in an error being thrown.

> Any Questions, Comments or Concerns, please email me at stevenlillis@hotmail.com

## Fetch a Local Copy? 

Following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  Please feel free to edit and change things as you please. 

### Prerequisites

The Lottery DApp is built using [React.js](https://reactjs.org/).  Please ensure that you have the latest version of Node.js and NPM installed.  

Please check you NPM version with the follwing command within Terminal.  NPM version ^6.14.10 required at the time of writing. 

```
$ npm -v
```

Please check you Node version with the follwing command within Terminal.  Node version ^15.5.0 required at the time of writing. 

```
$ node -v
```

### Installing

Start by cloning a copy of the repository to your local machine with the following command in terminal

```
$ git clone https://github.com/StevenLillis/Ethereum-Lottery.git
```

Move into this repository and please ensure that all the node modules have been installed correctly 

```
$ cd Ethereum-Lottery
$ npm install
```

Once the dependency installation completes, type in 'npm start' from inside the 'client' folder and if you see the following output that implies that Lottery DApp is successfully up and running.

> Depending on how your machine is configured, the Lottery will automatically open, however in some cases, you may be required to navigate to your browser and enter 'http://localhost:3000/' manually.

```
Compiled successfully!

You can now view lottery-react in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.103:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Metamask
Please ensure that you have [Metamask](https://metamask.io/download) installed.  

The Lottery DApp operates and runs over the Rinekby Test Network.  You will need to switch to the Rinekby Network to use the Lottery. 

Test Ether is available [here](https://faucet.rinkeby.io/)

> You will be required to create a social media post that contains your account address.  Please copy the URL of the social media post, and select the amount of test Ether you require.  You will be required to wait a certain amount of time (Depending on the option you select) before requesting test Ether from this facuet again.  DO NOT request Test Ether again during this delay period as you may be barred from requesting for a longer time.

### Browser 

This Lottery has been run and tested on Google Chrome.  Please ensure that you are also running the Lottery on Google Chrome to avoid display issues. 

