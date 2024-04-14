import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Pagination, Navigation } from "swiper";

import leaguePlayersStandardStatsRawData from '../data/leaguePlayersStandardStatsRawData.json';
import { cleanStandardStats } from '../dataCleaner'; 

import leagueGoalkeeperStatsRawData from '../data/leagueGoalkeeperStatsRawData.json';
import { cleanGoalkeeperStats } from '../dataCleaner';

const leaguePlayersStandardStats = cleanStandardStats(leaguePlayersStandardStatsRawData);
const leagueGoalkeeperStats = cleanGoalkeeperStats(leagueGoalkeeperStatsRawData);

const LeagueLeadersSwiper = ({ setPlayer }) => {

    const handlePlayerClick = (playerName) => {
        setPlayer(playerName);
    };

    const findTopTenForStat = (jsonFile, stat) => {
        const sortedData = jsonFile.sort((a, b) => b[stat] - a[stat]);
        return sortedData.slice(0,10);
    };

    const topTenAssists = findTopTenForStat(leaguePlayersStandardStats, 'Assists'); 
    const topTenGoals = findTopTenForStat(leaguePlayersStandardStats, 'Goals'); 
    const topTenSavePct = findTopTenForStat(leagueGoalkeeperStats, 'SavePercent'); 

    return (
        <div className="bg-black">
            <h1 className='text-center text-2xl text-white pb-4'>Top Performers</h1>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                style={{ height: "340px" }}
            >
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Assists</h1>
                    <ul className="space-y-1.5">
                        {topTenAssists.map((topTenPlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between' 
                            onClick={() => handlePlayerClick(topTenPlayer.Name)}
                        >
                            {topTenPlayer.Name} ({topTenPlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topTenPlayer.Assists}
                        </span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Goals</h1>
                    <ul className="space-y-1.5">
                        {topTenGoals.map((topTenPlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between' 
                            onClick={() => handlePlayerClick(topTenPlayer.Name)}
                        >
                            {topTenPlayer.Name} ({topTenPlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topTenPlayer.Goals}
                        </span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Save Percent</h1>
                    <ul className="space-y-1.5">
                        {topTenSavePct.map((topTenPlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between'
                        >
                            {topTenPlayer.Name} ({topTenPlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topTenPlayer.SavePercent.toFixed(1)} %
                        </span>
                        </li>
                        ))}
                    </ul>           
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LeagueLeadersSwiper
