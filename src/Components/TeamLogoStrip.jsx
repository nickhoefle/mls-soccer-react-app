import React from 'react'
import { Link } from 'react-router-dom';

const TeamLogoStrip = ({ handleTeamSelect }) => {
    
    function handleClick(teamClicked) {
        handleTeamSelect(teamClicked);
    }
    
    return (
        <div className='flex flex-wrap justify-center bg-black'>
            <Link to='/team/AustinFC'>
                <img src='https://www.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png/tiny' 
                onClick={() => handleClick('Austin')}
                />
            </Link>
            
            <Link to='/team/ColoradoRapids'>    
                <img src='https://www.thesportsdb.com/images/media/team/badge/uppupv1473536412.png/tiny'
                onClick={() => handleClick('Colorado Rapids')}
                />
            </Link>   
            
            <Link to='/team/FCDallas'>      
                <img src='https://www.thesportsdb.com/images/media/team/badge/vxy8xy1602103187.png/tiny' 
                onClick={() => handleClick('FC Dallas')}
                />
            </Link>    

            <Link to='/team/HoustonDynamo'> 
                <img src='https://www.thesportsdb.com/images/media/team/badge/em146s1606772337.png/tiny'
                onClick={() => handleClick('Dynamo FC')} 
                />
            </Link>    
                
            <Link to='/team/LAGalaxy'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png/tiny' 
                onClick={() => handleClick('LA Galaxy')}
                />
            </Link>    
                
            <Link to='/team/LAFC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png/tiny'
                onClick={() => handleClick('Los Angeles FC')}
                />
            </Link>    
                
            <Link to='/team/MinnesotaUnited'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/vl67t41492453433.png/tiny'
                onClick={() => handleClick('Minnesota Utd')}
                />
            </Link>    
                
            <Link to='/team/PortlandTimber'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/skm30j1557953559.png/tiny'
                onClick={() => handleClick('Portland Timbers')}
                />
            </Link>    
                
            <Link to='/team/RealSaltLake'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/kkjlfa1556488022.png/tiny'
                onClick={() => handleClick('Real Salt Lake')}
                />
            </Link>    
                
            <Link to='/team/SanJoseEarthquakes'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/xyrqqt1420781048.png/tiny'
                onClick={() => handleClick('San Jose')}
                />
            </Link>    
                
            <Link to='/team/SeattleSounders'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/vpyprt1473536493.png/tiny' 
                onClick={() => handleClick('Seattle')}
                />
            </Link>    
                
            <Link to='/team/SportingKC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/tqupxw1473536504.png/tiny'
                onClick={() => handleClick('Sporting KC')}
                />
            </Link>    
                
            <Link to='/team/StLouisCitySC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/22wanp1674118724.png/tiny'
                onClick={() => handleClick('St. Louis')}
                />
            </Link>    
                
            <Link to='/team/VancouverWhitecaps'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/tpwxpy1473536521.png/tiny' 
                onClick={() => handleClick('Vancouver')}
                />
            </Link>    
                
            <Link to='/team/AtlantaUnited'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/ej091x1602103070.png/tiny'
                onClick={() => handleClick('Atlanta Utd')}
                />
            </Link>    
                
            <Link to='/team/CharlotteFC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png/tiny'
                onClick={() => handleClick('Charlotte')}
                />
            </Link>    
                
            <Link to='/team/ChicagoFire'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/8xuc781639493166.png/tiny'
                onClick={() => handleClick('Chicago Fire')}
                />
            </Link>    
                
            <Link to='/team/ColumbusCrew'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png/tiny'
                onClick={() => handleClick('Columbus Crew')}
                />
            </Link>    
                
            <Link to='/team/FCCincinnati'>    
                <img src='https://www.thesportsdb.com/images/media/team/badge/47ve8t1555084948.png/tiny'
                onClick={() => handleClick('FC Cincinnati')}
                />
            </Link>
            
            <Link to='/team/DCUnited'> 
                <img src='https://www.thesportsdb.com/images/media/team/badge/uwvsyt1467462609.png/tiny'
                onClick={() => handleClick('D.C. United')}
                />
            </Link>    
                
            <Link to='/team/InterMiami'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png/tiny'
                onClick={() => handleClick('Inter Miami')}
                />
            </Link>    
                
            <Link to='/team/CFMontreal'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/livdl31679344925.png/tiny' 
                onClick={() => handleClick('CF Montréal')}
                />
            </Link>    
                
            <Link to='/team/NashvilleSC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/znrwt71602103062.png/tiny' 
                onClick={() => handleClick('Nashville')}
                />
            </Link>   
            
            <Link to='/team/NewEnglandRevolution'> 
                <img src='https://www.thesportsdb.com/images/media/team/badge/1ula2l1639493143.png/tiny' 
                onClick={() => handleClick('New England')}
                />
            </Link>    

            <Link to='/team/NewYorkCityFC'> 
                <img src='https://www.thesportsdb.com/images/media/team/badge/li4y2o1534575820.png/tiny'
                onClick={() => handleClick('NYCFC')}
                />
            </Link>    
                
            <Link to='/team/NewYorkRedbulls'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/suytvy1473536462.png/tiny' 
                onClick={() => handleClick('NY Red Bulls')}
                />
            </Link>

            <Link to='/team/OrlandoCity'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png/tiny'
                onClick={() => handleClick('Orlando City')}
                />
            </Link>    
                
            <Link to='/team/PhiladelphiaUnion'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/gyznyo1602103682.png/tiny' 
                onClick={() => handleClick('Philadelphia')}
                />
            </Link>    
            
            <Link to='/team/TorontoFC'>     
                <img src='https://www.thesportsdb.com/images/media/team/badge/rsxyrr1473536512.png/tiny'
                onClick={() => handleClick('Toronto FC')}
                />
            </Link>
        </div>
    )
}

export default TeamLogoStrip