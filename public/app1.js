var boundaries={
    'Royal Challengers Bangalore': { fours: 188, sixes: 94 },
    'Chennai Super Kings': { fours: 212, sixes: 88 },
    'Sunrisers Hyderabad': { fours: 204, sixes: 83 },
    'Kolkata Knight Riders': { fours: 199, sixes: 144 },
    'Delhi Capitals': { fours: 239, sixes: 89 },
    'Mumbai Indians': { fours: 237, sixes: 116 },
    'Kings XI Punjab': { fours: 203, sixes: 112 },
    'Rajasthan Royals': { fours: 211, sixes: 70 }
  };

  const seriesData=[];
  var count=0;
  for(let i in boundaries)
  {
    seriesData.push({name:Object.keys(boundaries)[count],data:[boundaries[i].fours,boundaries[i].sixes]});
    count++;
  }
  console.log(seriesData);