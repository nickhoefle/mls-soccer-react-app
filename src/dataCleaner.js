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

export function cleanPlayerSalariesRawData(rawData) {
    return rawData.map(playerObj => (
        {
            Rk: playerObj.Rk,
            Name: playerObj.Player, // Change "Player" to "Name"
            Nation: playerObj.Nation,
            Position: playerObj.Pos, // Change "Pos" to "Position"
            Team: playerObj.Squad, // Change "Squad" to "Team"
            Age: playerObj.Age,
            Born: playerObj.Born,
            MatchesPlayed: playerObj.MP, // Change "MP" to "MatchesPlayed"
            Starts: playerObj.Starts,
            MinutesPlayed: playerObj.Min, // Change "Min" to "MinutesPlayed"
            Full90s: playerObj["90s"], // Change "90s" to "Full90s"
            Goals: playerObj.Gls, // Change "Gls" to "Goals"
            Assists: playerObj.Ast, // Change "Ast" to "Assists"
            GoalsPlusAssists: playerObj["G+A"], // Change "G+A" to "GoalsPlusAssists"
            NonPenaltyGoals: playerObj["G-PK"], // Change "G-PK" to "NonPenaltyGoals"
            PenaltyKickGoals: playerObj.PK, // Change "PK" to "PenaltyKickGoals"
            PenaltyKickAttemps: playerObj.PKatt, // Change "PKatt" to "PenaltyKickAttempts"
            YellowCards: CrdY, // Change "CrdY" to "YellowCards"
            RedCards: playerObj.CrdR, // Change "CrdR" to "RedCards"
            ExpectedGoals: playerObj.xG, // Change "xG" to "ExpectedGoals"
            NonPenaltyExpectedGoals: playerObj.npxG, // Change "npxG" to "NonPenaltyExpectedGoals"
            ExpectedAssists: playerObj.xAG, // Change "xAG" to "ExpectedAssists"
            NonPenaltyExpectedGoalsPlusAssistedGoals: playerObj.npxG+xAG, //Changed "npxG+AG" to "NonPenaltyExpectedGoalsPlusAssistedGoals"
            ProgressiveCarries: playerObj.PrgC, // Change "PrgC" to "ProgressiveCarries"
            ProgressivePasses: playerObj.PrgP, // Change "PrgP" to "ProgressivePasses"
            ProgressivePassesReceived: playerObj.PrgR, // Change "PrgR" to "ProgressivePassesReceived"
            GoalsPer90: playerObj["Gls__1"], // Change "Gls__1" to "GoalsPer90"
            AssistsPer90: playerObj["Ast__1"], // Change "Ast__1" to "AssistsPer90"
            GoalsAndAssistsPer90: playerObj["G+A__1"], // Change "G+A__1" to GoalsAndAssistsPer90
            NonPenaltyGoalsPer90: playerObj["G-PK__1"], // Change "G-PK__1" to NonPenaltyGoalsPer90
            NonPenaltyGoalsAndAssistsPer90: playerObj["G+A-PK"], //Change "G+A-PK" to NonPenaltyGoalsAndAssistsPer90
            ExpectedGoalsPer90: playerObj["xG__1"], // Change "xG__1" to ExpectedGoalsPer90
            ExpectedAssistsPer90: playerObj["xAG__1"], // Change "xAG__1" to ExpectedAssistsPer90
            ExpectedGoalsAndAssistsPer90: playerObj["xG+xAG"], // Change "xG+xAG" to ExpectedGoalsAndAssistsPer90
            NonPenaltyExpectedGoalsPer90: playerObj["npxG__1"], // Change "npxG__1" to "NonPenaltyExpectedGoalsPer90"
            NonPenaltyExpectedGoalsPlusAssistedGoalsPer90: playerObj["npxG+xAG__1"], //Change "npxG+xAG__1" to "NonPenaltyExpectedGoalsPlusAssistedGoalsPer90"
            Matches: playerObj.Matches,
        }
    ));
}
