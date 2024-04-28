export function convertNumMonthToWord(dateWithNum) {
    
    const monthNums = dateWithNum.slice(0,2);
    const dayNum = dateWithNum.slice(3,5).replace(0, '');
    
    switch(monthNums) {
        case '02':
            return `February ${dayNum}`;
        case '03':
            return `March ${dayNum}`;
        case '04':
            return `April ${dayNum}`;
        case '05':
            return `May ${dayNum}`;
        case '06':
            return `June ${dayNum}`;
        case '07':
            return `July ${dayNum}`;
        case '08':
            return `August ${dayNum}`;
        case '09':
            return `September ${dayNum}`;
        case '10':
            return `October ${dayNum}`;
        case '11':
            return `November ${dayNum}`;
        case '12':
            return `December ${dayNum}`;
    }

}