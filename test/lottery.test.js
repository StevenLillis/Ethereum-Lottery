const { assert } = require("node:console");
const { default: web3 } = require("../client/src/web3");

const Lottery = artifacts.require("Lottery"); 
let lottery; 

before(async () => { 
    lottery = await Lottery.new();
});

contract('Lottery Tests', function(accounts){
    //Test 1
    it('is the owner_address equal to the deployer_address', async () => {
        var owner_address = await Lottery.owner.call(); 
        var deployer_address = accounts[0];
        assert.equal(owner_address, deployer_address, "Owner is not the deployer");
    });
    //Test 2
    it('allows player to enter the lottery', async () => {
        var new_player = accounts[1];
        await Lottery.join({from: new_player, value: String(11e16)});
        var player = await lottery.players.call('0');
        assert.equal(player, new_player, "new player is not in the contract");
    });
    //Test 3
    it('has founding balance', async () => {
        var balance = await web3.eth.getBalance(lottery.address).toNumber();
        assert.ok(balance == web3.toWei('0.11', 'ether'));
    });
    //Test 4
    it('restricts players from selecting the winner of the lottery', async () => {
        try { 
            await lottery.pickWinner({from: accounts[1]});
            assert(false);
        } catch(err) { 
            assert(err);
        }
    });
    //Test 5
    it('allows owner to select winner', async () => {
        await lottery.pickWinner({from: accounts[0]});
        var balance = String(web3.eth.getBalance(lottery.address).c);
        assert.equal(balance, '0');
    });

})