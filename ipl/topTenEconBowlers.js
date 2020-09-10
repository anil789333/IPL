function topTenEconBowlers(matches,deliveries)
{
const result={};
var allBowlers={};
for(let match of matches)
{
  if(match.season==2015)
  {
    for(let delivery of deliveries)
   {
    if(match.id==delivery.match_id)
     {
      if(allBowlers[delivery.bowler])
      {
        allBowlers[delivery.bowler].totalRuns+=parseFloat(delivery.total_runs);
        if(delivery.wide_runs==0 && delivery.noball_runs==0){
          allBowlers[delivery.bowler].totalDeliveries+=1;
        } 
      }
      else
      {
        allBowlers[delivery.bowler]={
          totalRuns: parseFloat(delivery.total_runs),
          totalDeliveries:(delivery.wide_runs==0 && delivery.noball_runs==0) ? 1:0
        }; 
      }
    }
  }
  }
}

for(let bowlerName in allBowlers)
{
   var r=allBowlers[bowlerName].totalRuns;
   var d=allBowlers[bowlerName].totalDeliveries;
   result[bowlerName]=parseFloat((r*6/d).toFixed(2));
}
//sorting the economy in ascending order
const sortedResult= Object.fromEntries(Object.entries(result).sort((a,b)=>a[1]-b[1]));
return sortedResult;
}

module.exports =topTenEconBowlers;