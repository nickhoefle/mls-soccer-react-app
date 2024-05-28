import mlsTeamsArray from '../data/mlsTeamsArray.js';

const TeamDropdown1 = ({ setTeamName1 }) => { 

    const handleTeam1Change = (e) => {
        setTeamName1(e.target.value); 
    };

    return (
        <div>
            <h2 className='text-2xl underline pb-6'>Player 1</h2>
            <select
                className='bg-black text-xl outline-white border-2 p-1 mb-6 sm: w-[75%] md:w-[35%]'
                onChange={handleTeam1Change}
            >
                <option className='text-center underline'>- Team -</option>
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

export default TeamDropdown1;
