import React from 'react'
import { Link } from 'react-router-dom';

const TeamLogoStrip = ({ handleTeamSelect }) => {
    
    function handleClick(teamClicked) {
        handleTeamSelect(teamClicked);
    }
    
    return (
        <div className='hidden md:block'>
            <div className='hidden md:block'>
                <div className='flex flex-wrap justify-center'>
                    <Link to='/team/AustinFC'>
                        <img
                            className='team-logo'
                            src='/logos/full-size/austin.png' 
                            onClick={() => handleClick('Austin')}
                        />
                    </Link>
                    
                    <Link to='/team/ColoradoRapids'>    
                        <img 
                            className='team-logo'
                            src='/logos/full-size/colorado.png'
                            onClick={() => handleClick('Colorado Rapids')}
                        />
                    </Link>   
                    
                    <Link to='/team/FCDallas'>      
                        <img 
                            className='team-logo'
                            src='/logos/full-size/dallas.png'
                            onClick={() => handleClick('FC Dallas')}
                        />
                    </Link>    

                    <Link to='/team/HoustonDynamo'> 
                        <img 
                            className='team-logo'
                            src='/logos/full-size/houston.png'
                            onClick={() => handleClick('Dynamo FC')} 
                        />
                    </Link>    
                        
                    <Link to='/team/LAGalaxy'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/lagalaxy.png'
                            onClick={() => handleClick('LA Galaxy')}
                        />
                    </Link>    
                        
                    <Link to='/team/LAFC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/lafc.png'
                            onClick={() => handleClick('Los Angeles FC')}
                        />
                    </Link>    
                        
                    <Link to='/team/MinnesotaUnited'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/minnesota.png'
                            onClick={() => handleClick('Minnesota Utd')}
                        />
                    </Link>    
                        
                    <Link to='/team/PortlandTimber'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/portland.png'
                            onClick={() => handleClick('Portland Timbers')}
                        />
                    </Link>    
                        
                    <Link to='/team/RealSaltLake'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/rsl.png'
                            onClick={() => handleClick('Real Salt Lake')}
                        />
                    </Link>    
                        
                    <Link to='/team/SanJoseEarthquakes'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/sanjose.png'
                            onClick={() => handleClick('San Jose')}
                        />
                    </Link>    
                        
                    <Link to='/team/SeattleSounders'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/seattle.png'
                            onClick={() => handleClick('Seattle')}
                        />
                    </Link>    
                        
                    <Link to='/team/SportingKC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/skc.png'
                            onClick={() => handleClick('Sporting KC')}
                        />
                    </Link>    
                        
                    <Link to='/team/StLouisCitySC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/stlouis.png'
                            onClick={() => handleClick('St. Louis')}
                        />
                    </Link>    
                        
                    <Link to='/team/VancouverWhitecaps'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/vancouver.png'
                            onClick={() => handleClick('Vancouver')}
                        />
                    </Link>    
                        
                    <Link to='/team/AtlantaUnited'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/atlanta.png'
                            onClick={() => handleClick('Atlanta Utd')}
                        />
                    </Link>    
                        
                    <Link to='/team/CharlotteFC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/charlotte.png'
                            onClick={() => handleClick('Charlotte')}
                        />
                    </Link>    
                        
                    <Link to='/team/ChicagoFire'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/chicago.png'
                            onClick={() => handleClick('Chicago Fire')}
                        />
                    </Link>    
                        
                    <Link to='/team/ColumbusCrew'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/columbus.png'
                            onClick={() => handleClick('Columbus Crew')}
                        />
                    </Link>    
                        
                    <Link to='/team/FCCincinnati'>    
                        <img 
                            className='team-logo'
                            src='/logos/full-size/cincinnati.png'
                            onClick={() => handleClick('FC Cincinnati')}
                        />
                    </Link>
                    
                    <Link to='/team/DCUnited'> 
                        <img 
                            className='team-logo'
                            src='/logos/full-size/dc.png'
                            onClick={() => handleClick('D.C. United')}
                        />
                    </Link>    
                        
                    <Link to='/team/InterMiami'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/miami.png'
                            onClick={() => handleClick('Inter Miami')}
                        />
                    </Link>    
                        
                    <Link to='/team/CFMontreal'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/montreal.png'
                            onClick={() => handleClick('CF Montréal')}
                        />
                    </Link>    
                        
                    <Link to='/team/NashvilleSC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/nashville.png'
                            onClick={() => handleClick('Nashville')}
                        />
                    </Link>   
                    
                    <Link to='/team/NewEnglandRevolution'> 
                        <img 
                            className='team-logo'
                            src='/logos/full-size/newengland.png'
                            onClick={() => handleClick('New England')}
                        />
                    </Link>    

                    <Link to='/team/NewYorkCityFC'> 
                        <img 
                            className='team-logo'
                            src='/logos/full-size/nycfc.png'
                            onClick={() => handleClick('NYCFC')}
                        />
                    </Link>    
                        
                    <Link to='/team/NewYorkRedbulls'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/nyredbulls.png'
                            onClick={() => handleClick('NY Red Bulls')}
                        />
                    </Link>

                    <Link to='/team/OrlandoCity'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/orlando.png'
                            onClick={() => handleClick('Orlando City')}
                        />
                    </Link>    
                        
                    <Link to='/team/PhiladelphiaUnion'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/philadelphia.png'
                            onClick={() => handleClick('Philadelphia')}
                        />
                    </Link>    
                    
                    <Link to='/team/TorontoFC'>     
                        <img 
                            className='team-logo'
                            src='/logos/full-size/torontofc.png'
                            onClick={() => handleClick('Toronto FC')}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeamLogoStrip