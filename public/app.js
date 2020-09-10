function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraRunsGivenByEachTeam(data.extraRunsGivenByEachTeam);
  visualizeTopTenEconBowlers(data.topTenEconBowlers);
  visualizeBoundariesScoredByEachTeam(data.boundariesScoredByEachTeam);
  return;
}
//.............1)highcahrt  for matches_played_per_year....................................
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year",
      style:{ color: "brown", fontSize: "20px"}
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
        style:{color: "skyblue"}
    },
    xAxis: {
      type: "category"
    },
    plotOptions: {
      series: {
          pointWidth: 25,
          color: '#00FF00'
        }
      },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation:0,
          color: '##FF0000',
          align: 'center',
          y: 9, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}
//............................2)highchart for matches_won by each team...................
function visualizeMatchesWonByEachTeam(matchesWonByEachTeam)
  {
    const seriesData=[];    
    var teams=[];
    for(let year in matchesWonByEachTeam)
    {
        teams.push(...Object.keys(matchesWonByEachTeam[year]));
    }
    const totalTeams=new Set(teams);
    for(let teamName of totalTeams)
    {
        let wins=[];
        for(let year in matchesWonByEachTeam)
        {
            if(matchesWonByEachTeam[year].hasOwnProperty(teamName))
            {
                wins.push(matchesWonByEachTeam[year][teamName]);
            }
            else
            {
                wins.push(0);
            }
        }
        seriesData.push({name:teamName, data:wins});
    }                                                                                              

    Highcharts.chart("matches-won-by-eachteam", {
        chart: {
            type: "column"
        },
        title: {
            text: "Matches Won By Each Team"
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
            categories:Object.keys(matchesWonByEachTeam),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Won'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: seriesData
        });
  }

//.............................3)highchart for extra_runs_in_2015.........................
function visualizeExtraRunsGivenByEachTeam(extraRunsGivenByEachTeam) {
  const seriesData = [];
  for (let team in extraRunsGivenByEachTeam) {
    seriesData.push([team, extraRunsGivenByEachTeam[team]]);
    //console.log(seriesData);
  }
  

  Highcharts.chart("extra-runs-given-by-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Given By Each Team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -30,
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
    },
    plotOptions: {
      series: {
          pointWidth: 20,
          color: '#FF0000'
        }
      },
    yAxis: {
      min: 0,
      title: {
        text: "Runs",
      },
      labels: {
        style: {
            fontSize: '13px',
            color: 'blue'}
        }
    },
    series: [
      {
        name: "Extra Runs",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation:0,
          color: '##FF0000',
          align: 'center',
          y: 9, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}
//..........................4)highchart of top10 economical bowlers.......................... 
function visualizeTopTenEconBowlers(topTenEconBowlers) {
  const seriesData = [];
  const bowlers=Object.fromEntries(Object.entries(topTenEconBowlers).slice(0,10));
  for(let bowlerName in bowlers)
  {
    seriesData.push([bowlerName,bowlers[bowlerName]]);
  }
  Highcharts.chart("top-ten-econ-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 Econmical Bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
    },
    plotOptions: {
      series: {
          pointWidth: 30,
          color:'#00FF00'
        }
      },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Economy",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation:0,
          color: '##FF0000',
          align: 'center',
          y: 9, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
        
      }
    ]
  });
}
//....................Boundaries scored By Each Team in 2019......................
function visualizeBoundariesScoredByEachTeam(boundariesScoredByEachTeam)
{
  const seriesData=[];
  var count=0;
  var boundaries=boundariesScoredByEachTeam;
  for(let i in boundaries)
  {
    seriesData.push({name:Object.keys(boundaries)[count],
      data:[boundaries[i].fours,boundaries[i].sixes],
      dataLabels : {
        enabled: true,
        rotation:0,
        color: '##FF0000',
        align: 'center',
        y: 9, // 10 pixels down from the top
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
      }
    });
    count++;
  }

  Highcharts.chart("boundaries-scored-by-each-team", {
    chart: {
        type: "column"
    },
    title: {
        text: "Boundaries Scored By Each Team in 2019"
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      categories:['fours','sixes'],
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Boundaries Scored'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
    });

}