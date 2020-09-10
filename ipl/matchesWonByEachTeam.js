function matchesWonByEachTeam(matches)
{
    const result={};
    var years=[];
    for(let match of matches)
    {
        years.push(match.season);
    }
    const allSeasons=new Set(years);
    for(let year of allSeasons)
    {
        var teams={};
        for(let match of matches)
        {
            const winner=match.winner;
            if(match.season==year)
            {
             if(teams[winner])
             {
                teams[winner]+=1;
             }
             else
             {
                teams[winner]=1;
             }
            }
        
        result[year]=teams;
        }
    }
    return result;
}

module.exports=matchesWonByEachTeam;