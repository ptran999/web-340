/** 
   Title: index.js
   Author: Phuong Tran
   Date: 11-03-2023
   Source: https://github.com/buwebdev/web-340/tree/master/week-3
*/

//Import the TeamManager module from team-manager.js.
const TeamManager = require('./team-manager');
//Import the displayTeam function from the TeamManager module.
const { displayTeam } = TeamManager;

//Getting the array of teams from the TeamManager module.
const teams = TeamManager.getTeams();

//Getting a single team from the TeamManager module.
const team_1 = TeamManager.getTeam('Alabama');
const team_2 = TeamManager.getTeam('Georgia');

//Displaying the array of teams 
console.log('-- DISPLAYING TEAMS --');
//Looping through the array of teams and displaying single teams
teams.forEach(team => {
    console.log(displayTeam(team));
});

//Displaying "team_1" to match with the answer
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(team_1));

//Displaying "team_2" to match with the answer
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(team_2));
