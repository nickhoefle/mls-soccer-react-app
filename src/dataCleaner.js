export function cleanAllLeagueMatchesRawData(rawData) {
    return rawData.map(match => (
        {
            Day: match.Day,
            Date: match.Date,
            Time: match.Time,
            HomeTeam: match.Home, // Change "Home" to "HomeTeam"
            xG: match.xG,
            Score: match.Score,
            xG__1: match.xG__1,
            AwayTeam: match.Away, // Change "Away" to "AwayTeam"
            Attendance: match.Attendance,
            Venue: match.Venue,
            Referee: match.Referee,
            MatchReport: match["Match Report"], // Change "Match Report" to "MatchReport"
            Notes: match.Notes,
        }
    ));
}

export function cleanPlayerSalariesRawData(rawData) {
    return rawData.map(playerSalaryObj => (
        {
            Rk: playerSalaryObj.Rk,
            Name: playerSalaryObj.Player, // Change "Player" to "Name"
            Nation: playerSalaryObj.Nation,
            Position: playerSalaryObj.Pos, // Change "Pos" to "Position"
            Team: playerSalaryObj.Squad, // Change "Squad" to "Team"
            Age: playerSalaryObj.Age,
            WeeklyWages: playerSalaryObj["Weekly Wages"], // Change "Weekly Wages" to "WeeklyWages"
            AnnualWages: playerSalaryObj["Annual Wages"], // Change "Annual Wages" to  "AnnualWages"
            Notes: playerSalaryObj.Notes,
        }
    ));
}
