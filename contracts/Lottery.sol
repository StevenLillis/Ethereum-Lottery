//"SPDX-License-Identifier: UNLICENSED"
pragma solidity ^0.4.17;
contract Lottery {
    address public owner;
    address[] public players;
    
    function Lottery() public {
        // Making sure the owner is the address that deployed the contract
        owner = msg.sender;
    }
    // Adds a player in the lottery, where the player needs to pay 0.01 or more ether to join
    // Function is payable because we want that users pay to join the lottery
    function join() public payable {
        // require is used for validations
        // msg.value is the amount of Ether (in Wei) that was sent by the player
        // "ether" automatically converts ether in wei
        require(msg.value >= .01 ether);
        // Storing the player address
        players.push(msg.sender);
    }
    // Generates a random number
    // view means that we're not modifying any state or any data in the contract
    function getRandom() private view returns (uint) {
        // keccak256 represents the SHA-3 algorithm
        // difficulty is a number that indicates how challenging is to solve the current block
        // now is the current time
        // uint will convert hash number tom uint
        return uint(keccak256(block.difficulty, now, players));
    }
    // Picks the lottery winner, where only the contract owner can call it
    function pickWinner() public restrictedToOwner {
        //Require the number of playerrs in the lottery to be greater than 1
        require(players.length > 0);

        uint winnerIndex = getRandom() % players.length;
        // "this" is the pointer to the current contract instance
        // address(this) converts the contract reference to an address
        // address(this).balance is the total amount of money available in the contract
        uint balance = address(this).balance;
        // transfer will take some amount of money in the contract and send it to the specified address
        players[winnerIndex].transfer(this.balance);
        // Empty the players list to start a new lottery without the need to redeploy the contract
        // address[](0) means a dynamic array with initial size of 0.
        // If you start it like address[](2), the array will start as [0x0000.., 0x0000..]
        players = new address[](0);
    }
    // Returns the list of players in the lottery
    function getPlayers() public view returns(address[] memory) {
        return players;
    }
    // Function modifiers enables you to reuse validations
    modifier restrictedToOwner() {
        // Making sure that no one, except the owner, can pick the winner
        require(msg.sender == owner);
        // When a function calls it, the "_;" will be replaced by the code inside the function
        _;
    }
}