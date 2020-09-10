function boundariesScoredByEachTeam(matches,deliveries)
{
    const result={};
    for(let match of matches)
    {
        if(match.season==2019)
        {
            for(let delivery of deliveries)
            {
                if(delivery.match_id==match.id)
                {
                    if(result[delivery.batting_team])
                    {
                        if(parseInt(delivery.total_runs)==4) result[delivery.batting_team].fours+=1;
                        if(parseInt(delivery.total_runs)==6) result[delivery.batting_team].sixes+=1;
                    }
                    else
                    {
                        result[delivery.batting_team]={
                            fours:1,
                            sixes:1
                        }
                    }
                }
            }
        }
    }
    return result;
}

module.exports=boundariesScoredByEachTeam;