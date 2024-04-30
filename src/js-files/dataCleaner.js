export function cleanAllLeagueMatchesRawData(rawData) {
    return rawData.map(match => (
        {
            Day: match.Day,
            Date: match.Date,
            Time: match.Time,
            HomeTeam: match.Home, // Change "Home" to "HomeTeam"
            HomeTeamExpectedGoals: match.xG, // Change "xG" to "HomeTeamExpectedGoals"
            Score: match.Score,
            AwayTeamExpectedGoals: match.xG__1, // Change "xG__1" to "AwayTeamExpectedGoals"
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
            PenaltyKickAttempts: playerObj.PKatt, 
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

export function cleanShootingStats(rawData) {
    return rawData.map(playerObj => (
        {
            Rk: playerObj.Rk,
            Name: playerObj.Player, 
            Nation: playerObj.Nation,
            Position: playerObj.Pos, 
            Team: playerObj.Squad,
            Age: playerObj.Age,
            Born: playerObj.Born,
            Full90s: playerObj["90s"],
            Goals: playerObj.Gls,
            Shots: playerObj.Sh,
            ShotsOnTarget: playerObj.SoT,
            ShotsOnTargetPercent: playerObj["SoT%"],
            ShotsPer90: playerObj["Sh/90"],
            ShotsOnTargetPer90: playerObj["SoT/90"],
            GoalsPerShot: playerObj["G/Sh"],
            GoalsPerShotOnTarget: playerObj["G/SoT"],
            AverageShotDistance: playerObj["Dist"],
            ShotsFromFreeKicks: playerObj["FK"],
            PenaltyKickGoals: playerObj["PK"],
            PenaltyKickAttempts: playerObj["PKatt"],
            ExpectedGoals: playerObj["xG"],
            ExpectedNonPenaltyGoals: playerObj["npxG"],
            ExpectedNonPenaltyGoalsPerShot: playerObj["npxG/Sh"],
            GoalsMinusExpectedGoals: playerObj["G-xG"],
            NonPenaltyGoalsMinusNonPenaltyExpectedGoals: playerObj["np:G-xG"],
            Matches: playerObj["Matches"],
        }
    ));
}

export function cleanDefenseStats(rawData) {
    return rawData.map(playerObj => (
        {
            Rk: playerObj.Rk,
            Name: playerObj.Player, 
            Nation: playerObj.Nation,
            Position: playerObj.Pos, 
            Team: playerObj.Squad,
            Age: playerObj.Age,
            Born: playerObj.Born,
            TacklesPer90: playerObj.Tkl,
            TacklesWonPer90: playerObj.TklW,
            TacklesInDefensiveThirdPer90: playerObj["Def 3rd"],
            TacklesInMiddleThirdPer90: playerObj["Mid 3rd"],
            TacklesInAttackingThirdPer90: playerObj["Att 3rd"],
            DribblersTackledPer90: playerObj["Tkl__1"],
            DribblesChallengedPer90: playerObj["Att"],
            TacklePercent: playerObj["Tkl%"],
            ChallengesLostPer90: playerObj["Lost"],
            BlocksPer90: playerObj["Blocks"],
            ShotsBlockedPer90: playerObj["Sh"],
            PassesBlockedPer90: playerObj["Pass"],
            InterceptionsPer90: playerObj["Int"],
            TacklesAndInterceptionsPer90: playerObj["Tkl+Int"],
            ClearancesPer90: playerObj["Clr"],
            ErrorsPer90: playerObj["Err"],
            Matches: playerObj["Matches"],
        }
    ));
}

export function cleanGoalkeeperStats(rawData) {
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
            MatchesStarted: playerObj.Starts,
            MinutesPlayed: playerObj.Min,
            Full90s: playerObj["90s"],
            GoalsAgainst: playerObj.GA,
            GoalsAgainstPer90: playerObj.GA90,
            ShotsOnTargetAgainst: playerObj.SoTA,
            Saves: playerObj.Saves,
            SavePercent: playerObj["Save%"],
            Wins: playerObj.W,
            Draws: playerObj.D,
            Losses: playerObj.L,
            CleanSheets: playerObj.CS,
            CleanSheetPercent: playerObj["CS%"],
            PenaltyKicksAttemptsAgainst: playerObj["PKatt"],
            PenaltyKickGoalsAgainst: playerObj["PKA"],
            PenaltyKicksSaved: playerObj.PKsv,
            PenaltyKicksMissed: playerObj.PKm,
            PenaltyKickSavePercent: playerObj["Save%__1"],
            Matches: playerObj.Matches,
        }
    ));
}
