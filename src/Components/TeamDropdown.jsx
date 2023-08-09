import mlsTeamsArray from '../data/mlsTeamsArray.js';

const TeamDropdown = ({ teamName1, setTeamName1 }) => { 

    const handleTeam1Change = (e) => {
        setTeamName1(e.target.value); 
    };

    return (
        <div>
            <p>Team</p>
            <select
                className='bg-black outline-white border-2 w-300'
                value={teamName1}
                onChange={handleTeam1Change}
            >
                <option>Select:</option>
                {mlsTeamsArray.map((team, index) => (
                <option
                    key={index}
                    value={team}
                    className='text-center'
                >
                    {team}
                </option>
                ))}
            </select>
        </div>
    );
};

export default TeamDropdown;
