import teamArray from '../data/teamArray.js';

const TeamDropdown = ({ teamName, setTeamName }) => { 

    const handleTeamChange = (event) => {
        setTeamName(event.target.value); 
    };

    return (
        <div>
            <p>Team</p>
            <select
            className='bg-black outline-white border-2 w-300'
            value={teamName}
            onChange={handleTeamChange}
            >
                <option>Select:</option>
                {teamArray.map((team, index) => (
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
