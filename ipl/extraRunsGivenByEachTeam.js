function extraRunsGivenByEachTeam(matches,deliveries)
{
    const result={};
    for(let match of matches)
    {
        if(match.season==2016)
        {
            for(let delivery of deliveries)
            {
                if(delivery.match_id==match.id)
                {
                    if(result[delivery.bowling_team])
                    {
                        result[delivery.bowling_team]+=parseInt(delivery.extra_runs);
                    }
                    else
                        result[delivery.bowling_team]=parseInt(delivery.extra_runs);
                }
            }
        }
    }
    return result;
}


module.exports = extraRunsGivenByEachTeam;