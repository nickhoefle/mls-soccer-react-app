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

export function cleanStandardStats(rawData) {
    return rawData.map(playerObj => (
        {
            Rk: playerObj.Rk,
            Name: playerObj.Player, 
            Nation: playerObj.Nation,
            Position: playerObj.Pos, 
            Team: playerObj.Squad,
            Age: playerObj.Age,
            Born: playerObj.Born,
            MatchesPlayed: playerObj.MP, 
            Starts: playerObj.Starts,
            MinutesPlayed: playerObj.Min, 
            Full90s: playerObj["90s"], 
            Goals: playerObj.Gls, 
            Assists: playerObj.Ast, 
            GoalsPlusAssists: playerObj["G+A"], 
            NonPenaltyGoals: playerObj["G-PK"], 
            PenaltyKickGoals: playerObj.PK, 
            PenaltyKickAttemps: playerObj.PKatt, 
            YellowCards: playerObj.CrdY, 
            RedCards: playerObj.CrdR, 
            ExpectedGoals: playerObj.xG, 
            ExpectedNonPenaltyGoals: playerObj.npxG, 
            ExpectedAssists: playerObj.xAG, 
            ExpecteNonPenaltyGoalsPlusAssists: playerObj["npxG+xAG"],
            ProgressiveCarries: playerObj.PrgC, 
            ProgressivePasses: playerObj.PrgP,
            ProgressivePassesReceived: playerObj.PrgR, 
            GoalsPer90: playerObj["Gls__1"],
            AssistsPer90: playerObj["Ast__1"],
            GoalsPlusAssistsPer90: playerObj["G+A__1"], 
            NonPenaltyGoalsPer90: playerObj["G-PK__1"], 
            NonPenaltyGoalsPlusAssistsPer90: playerObj["G+A-PK"],
            ExpectedGoalsPer90: playerObj["xG__1"],
            ExpectedAssistsPer90: playerObj["xAG__1"],
            ExpectedGoalsPlusAssistsPer90: playerObj["xG+xAG"], 
            ExpectedNonPenaltyGoalsPer90: playerObj["npxG__1"], 
            ExpectedNonPenaltyGoalsPlusAssistsPer90: playerObj["npxG+xAG__1"], 
            Matches: playerObj.Matches,
        }
    ));
}
