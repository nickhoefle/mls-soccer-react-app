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

    const topFiveAssists = findTopTenForStat(leaguePlayersStandardStats, 'Assists'); 
    const topFiveGoals = findTopTenForStat(leaguePlayersStandardStats, 'Goals'); 
    const topFiveSavePct = findTopTenForStat(leagueGoalkeeperStats, 'SavePercent'); 

    return (
        <>
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
                        {topFiveAssists.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between' 
                            onClick={() => handlePlayerClick(topFivePlayer.Name)}
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.Assists}
                        </span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Goals</h1>
                    <ul className="space-y-1.5">
                        {topFiveGoals.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between' 
                            onClick={() => handlePlayerClick(topFivePlayer.Name)}
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.Goals}
                        </span>
                        </li>
                        ))}
                    </ul>
                </SwiperSlide>
                <SwiperSlide className="bg-black text-white text-base px-2 pt-4">
                    <h1 className='underline pb-2'>Save Percent</h1>
                    <ul className="space-y-1.5">
                        {topFiveSavePct.map((topFivePlayer, index) => (
                        <li 
                            key={index} 
                            className='flex items-center justify-between'
                        >
                            {topFivePlayer.Name} ({topFivePlayer.Team})
                        <span 
                            className='pl-4 text-right'
                        >
                            {topFivePlayer.SavePercent.toFixed(1)} %
                        </span>
                        </li>
                        ))}
                    </ul>           
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default LeagueLeadersSwiper
