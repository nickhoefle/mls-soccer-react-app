export function getTeamLogoSrc(team) {
    switch (team) {
        case 'Austin':
            return '/logos/full-size/austin.png';
        case 'Colorado Rapids':
            return '/logos/full-size/colorado.png';
        case 'FC Dallas':
            return '/logos/full-size/dallas.png';
        case 'Dynamo FC':
            return '/logos/full-size/houston.png';
        case 'LA Galaxy':
            return '/logos/full-size/lagalaxy.png';
        case 'Los Angeles FC':
            return '/logos/full-size/lafc.png';
        case 'Minnesota Utd':
            return '/logos/full-size/minnesota.png';
        case 'Portland Timbers':
            return '/logos/full-size/portland.png';
        case 'Real Salt Lake':
            return '/logos/full-size/rsl.png';
        case 'San Jose':
            return '/logos/full-size/sanjose.png';
        case 'Seattle':
            return '/logos/full-size/seattle.png';
        case 'Sporting KC':
            return '/logos/full-size/skc.png';
        case 'St. Louis':
            return '/logos/full-size/stlouis.png';
        case 'Vancouver':
            return '/logos/full-size/vancouver.png';
        case 'Atlanta Utd':
            return '/logos/full-size/atlanta.png';
        case 'Charlotte':
            return '/logos/full-size/charlotte.png';
        case 'Chicago Fire':
            return '/logos/full-size/chicago.png';
        case 'Columbus Crew':
            return '/logos/full-size/columbus.png';
        case 'FC Cincinnati':
            return '/logos/full-size/cincinnati.png';
        case 'D.C. United':
            return '/logos/full-size/dc.png';
        case 'Inter Miami':
            return '/logos/full-size/miami.png';
        case 'CF Montréal':
            return '/logos/full-size/montreal.png';
        case 'Nashville':
            return '/logos/full-size/nashville.png';
        case 'New England':
            return '/logos/full-size/newengland.png';
        case 'NYCFC':
            return '/logos/full-size/nycfc.png';
        case 'NY Red Bulls':
            return '/logos/full-size/nyredbulls.png';
        case 'Orlando City':
            return '/logos/full-size/orlando.png';
        case 'Philadelphia':
            return '/logos/full-size/philadelphia.png';
        case 'Toronto FC':
            return '/logos/full-size/torontofc.png';
        default:
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1024px-MLS_crest_logo_RGB_gradient.svg.png'
    }
}