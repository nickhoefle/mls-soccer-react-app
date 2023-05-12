import React, { useState, useEffect } from 'react';
import { API_KEY } from '../api-key';
import moment from 'moment-timezone';

const LiveSchedule = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=4346`)
        .then(response => response.json())
        .then(data => setEvents(data.events));
    }, []);

    const getTimeString = (time) => {
        const localTime = new Date(`2000-01-01T${time}Z`);
        localTime.setHours(localTime.getHours() + 1);
        const localTimeString = localTime.toLocaleTimeString('en-US', {timeZone: 'America/Chicago', hour12: true, hour: 'numeric', minute: 'numeric'});
        return localTimeString;
    }

    return (
        <div>
            <h1 className='text-2xl pb-5'>Upcoming Matches</h1>
            <div className='flex'>
                <div className='text-left'>
                    {events.map(event => (
                        <p key={event.idEvent}>{event.strEvent}</p>
                    ))}
                </div>
                <div className='pl-10'>
                    {events.map(event => (
                        <p key={event.idEvent}>{event.dateEvent}</p>
                    ))}
                </div>
                <div className='pl-10 text-right'>
                    {events.map(event => (
                        <p key={event.idEvent}>{getTimeString(event.strTime)} CST</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveSchedule;
