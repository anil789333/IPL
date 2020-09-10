const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunsGivenByEachTeam = require("./ipl/extraRunsGivenByEachTeam");
const topTenEconBowlers = require("./ipl/topTenEconBowlers");
const boundariesScoredByEachTeam=require("./ipl/boundariesScoredByEachTeam");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then( matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
        let result1 = matchesPlayedPerYear(matches);
        let result2 = matchesWonByEachTeam(matches);
        let result3 = extraRunsGivenByEachTeam(matches,deliveries);
        let result4 = topTenEconBowlers(matches,deliveries);
        let result5=boundariesScoredByEachTeam(matches,deliveries);
        //console.log(matches.slice(0,5));
        //console.log(deliveries.slice(0,5));
        saveData(result1,result2,result3,result4,result5);
        //console.log(result5);
      });
    });
}

function saveData(result1,result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchesWonByEachTeam: result2,
    extraRunsGivenByEachTeam :result3,
    topTenEconBowlers: result4,
    boundariesScoredByEachTeam:result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
