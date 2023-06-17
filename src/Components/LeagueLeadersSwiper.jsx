import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Pagination, Navigation } from "swiper";
import data from '../data/player-standard-stats.json';
import goalkeeping from '../data/goalkeeping.json';

const LeagueLeadersSwiper = ({ setPlayer }) => {

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    const findTopTenForStat = (jsonFile, stat) => {
        const sortedData = jsonFile.sort((a, b) => b[stat] - a[stat]);
        return sortedData.slice(0,10);
    };

    const topFiveAssists = findTopTenForStat(data, 'Ast'); 
    const topFiveGoals = findTopTenForStat(data, 'Gls'); 
    const topFiveSavePct = findTopTenForStat(goalkeeping, 'Save%'); 

    return (
        <>
            <h1 className='text-center text-2xl text-white pb-4'>Top Performers</h1>
            <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{ height: "340px" }}
            >
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Assists</h1>
                    <ul className="space-y-1.5">
                        {topFiveAssists.map((player, index) => (
                        <li key={index} className='flex items-center justify-between' onClick={() => handlePlayerClick(player.Player)}>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player.Ast}</span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Goals</h1>
                    <ul className="space-y-1.5">
                        {topFiveGoals.map((player, index) => (
                        <li key={index} className='flex items-center justify-between' onClick={() => handlePlayerClick(player.Player)}>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player.Gls}</span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Save Percent</h1>
                    <ul className="space-y-1.5">
                        {topFiveSavePct.map((player, index) => (
                        <li key={index} className='flex items-center justify-between'>
                            {player.Player} ({player.Squad})
                            <span className='pl-4 text-right'>{player['Save%'].toFixed(1)} %</span>
                        </li>
                        ))}
                    </ul>           
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default LeagueLeadersSwiper
