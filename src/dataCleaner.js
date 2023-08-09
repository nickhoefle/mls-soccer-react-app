export function cleanAllLeagueMatchesRawData(rawData) {
    return rawData.map(match => ({
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
    }));
}
  