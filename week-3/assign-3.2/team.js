/** 
   Title: team.js
   Author: Phuong Tran
   Date: 11-03-2023
   Source: https://github.com/buwebdev/web-340/tree/master/week-3
*/

// Creating class Team with 3 properties 
class Team {
    constructor( name, mascot, playerCount ){ 
    this.name = name
    this.mascot = mascot
    this.playerCount = playerCount
 }
}

//export the modules for use elsewhere
module.exports = Team