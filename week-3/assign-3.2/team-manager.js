/** 
   Title: team-manager.js
   Author: Phuong Tran
   Date: 11-03-2023
   Source: https://github.com/buwebdev/web-340/tree/master/week-3
*/

//Import the "Team" class from "team.js".
const Team = require('./team.js');

//Creating the array of teams with 5 objects
const teams = [
    new Team('Alabama', "Crimson Tide", 54),
    new Team('LSU', 'Tigers', 54),
    new Team('Georgia', 'Bulldogs', 54),
    new Team('Texas', 'Longhorns', 54),
    new Team('USC', 'Trojans', 54)
];

//Creating a function and return the array of Team objects
function getTeams() {
    return teams;
}

//Export function to modules
module.exports.getTeams = getTeams;

//Creating a function that returns a single team.
function getTeam(name) {
    return teams.find(team => team.name === name); 
}

//Export function to modules
module.exports.getTeam = getTeam;

//Creating a function to display the output to match with the answer
function displayTeam(team) {
    return ` Name: ${team.name}\n Mascot: ${team.mascot}\n Player Count: ${team.playerCount}\n`;
}

//Export function to modules
module.exports.displayTeam = displayTeam;



