import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TeamHamburger = ({ handleTeamSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleClick(teamClicked) {
        handleTeamSelect(teamClicked);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="hamburger" onClick={toggleDropdown}>
                ☰ Teams 
            </div>
            {isOpen && (
                <div className="flex">
                    <div className='w-1/2 pt-9'>
                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/AustinFC' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png/tiny'
                                        className="mr-2"
                                        alt="Austin FC Logo"
                                        style={{width: "20px"}}
                                        onClick={() => { 
                                            handleClick('Austin'); 
                                            closeDropdown(); 
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                        handleClick('Austin'); 
                                        closeDropdown(); 
                                        }}
                                    >
                                        Austin FC
                                    </span>
                            </Link>
                        </div>
                        
                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ColoradoRapids' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/uppupv1473536412.png/tiny'
                                        className="mr-2"
                                        alt="Colorado Rapids Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('Colorado Rapids');
                                            closeDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => {
                                            handleClick('Colorado Rapids'); 
                                            closeDropdown();
                                        }} 
                                    >
                                        Colorado Rapids
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/FCDallas' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/vxy8xy1602103187.png/tiny'
                                        className="mr-2"
                                        alt="FC Dallas Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('FC Dallas');
                                            closeDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('FC Dallas'); 
                                            closeDropdown(); 
                                        }}
                                    >
                                        FC Dallas
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/HoustonDynamo' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/em146s1606772337.png/tiny'
                                        className="mr-2"
                                        alt="Houston Dynamo Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('Dynamo FC')
                                            closeDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Dynamo FC'); 
                                            closeDropdown(); 
                                        }} 
                                    >
                                        Houston Dynamo
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/LAGalaxy' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png/tiny'
                                        className="mr-2"
                                        alt="LA Galaxy Logo"
                                        style={{width: "20px"}}
                                        onClick={() => { 
                                            handleClick('LA Galaxy')
                                            closeDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('LA Galaxy'); 
                                            closeDropdown(); 
                                        }} 
                                    >
                                        LA Galaxy
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/LAFC' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png/tiny'
                                        className="mr-2"
                                        alt="LAFC Logo"
                                        style={{width: "20px"}}
                                        onClick={() => { 
                                            handleClick('Los Angeles FC')
                                            closeDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Los Angeles FC'); 
                                            closeDropdown(); }} 
                                    >
                                        LAFC
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/MinnesotaUnited' 
                                className="flex items-center"
                            >
                                    <img
                                        src='https://www.thesportsdb.com/images/media/team/badge/vl67t41492453433.png/tiny'
                                        className="mr-2"
                                        alt="Minnesota United Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('Minnesota Utd')
                                            closeDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Minnesota Utd'); 
                                            closeDropdown(); 
                                        }} 
                                    >
                                        Minnesota United
                                    </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/PortlandTimber' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/skm30j1557953559.png/tiny'
                                    className="mr-2"
                                    alt="Portland Timbers Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Portland Timbers')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('Portland Timbers'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Portland Timbers
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/RealSaltLake' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/kkjlfa1556488022.png/tiny'
                                    className="mr-2"
                                    alt="Real Salt Lake Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Real Salt Lake')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('Real Salt Lake'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Real Salt Lake
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SanJoseEarthquakes' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/xyrqqt1420781048.png/tiny'
                                    className="mr-2"
                                    alt="San Jose Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('San Jose')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('San Jose'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    San Jose
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SeattleSounders' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/vpyprt1473536493.png/tiny'
                                    className="mr-2"
                                    alt="Seattle Sounders Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Seattle')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('Seattle'); 
                                        closeDropdown() 
                                    }} 
                                >
                                    Seattle Sounders
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SportingKC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/tqupxw1473536504.png/tiny'
                                    className="mr-2"
                                    alt="Sporting KC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Sporting KC')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Sporting KC'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Sporting KC
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/StLouisCitySC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/22wanp1674118724.png/tiny'
                                    className="mr-2"
                                    alt="St. Louis CITY SC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('St. Louis')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('St. Louis'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    St. Louis City SC
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/VancouverWhitecaps' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/tpwxpy1473536521.png/tiny'
                                    className="mr-2"
                                    alt="Vancouver Whitecaps Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Vancouver')
                                        closeDropdown();
                                    }}
                                />
                                <span 
                                    className='text-base'
                                    onClick={() => { 
                                        handleClick('Vancouver'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Vancouver
                                </span>
                            </Link>
                        </div>

                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/AtlantaUnited' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/ej091x1602103070.png/tiny'
                                    className="mr-2"
                                    alt="Atlanta United Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Atlanta Utd')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Atlanta Utd'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Atlanta United
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/CharlotteFC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png/tiny'
                                    className="mr-2"
                                    alt="Charlotte FC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Charlotte')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Charlotte'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Charlotte FC
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ChicagoFire' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/8xuc781639493166.png/tiny'
                                    className="mr-2"
                                    alt="Chicago Fire Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Chicago Fire')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Chicago Fire'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Chicago Fire
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ColumbusCrew' 
                                    className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png/tiny'
                                    className="mr-2"
                                    alt="Columbus Crew Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Columbus Crew');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Columbus Crew'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Columbus Crew
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/FCCincinnati' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/47ve8t1555084948.png/tiny'
                                    className="mr-2"
                                    alt="FC Cincinnati Logo"
                                    style={{width: "20px"}}
                                    onClick={() =>  {
                                        handleClick('FC Cincinnati')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => {  
                                        handleClick('FC Cincinnati'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    FC Cincinnati
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/DCUnited' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/uwvsyt1467462609.png/tiny'
                                    className="mr-2"
                                    alt="DC United Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('D.C. United')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('D.C. United'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    DC United
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/InterMiami' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png/tiny'
                                    className="mr-2"
                                    alt="Inter Miami Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Inter Miami')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Inter Miami'); 
                                        closeDropdown(); 
                                    }}
                                >
                                    Inter Miami
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/CFMontreal' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/livdl31679344925.png/tiny'
                                    className="mr-2"
                                    alt="CF Montréal Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('CF Montréal');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('CF Montréal'); 
                                        closeDropdown() 
                                    }} 
                                >
                                    CF Montréal
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NashvilleSC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/znrwt71602103062.png/tiny'                                    
                                    className="mr-2"
                                    alt="Nashville SC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Nashville');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Nashville'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Nashville SC
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewEnglandRevolution' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/1ula2l1639493143.png/tiny'
                                    className="mr-2"
                                    alt="New England Rev. Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('New England');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('New England'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    New England Rev.
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewYorkCityFC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/li4y2o1534575820.png/tiny'
                                    className="mr-2"
                                    alt="NYCFC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('NYCFC')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('NYCFC'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    NYCFC
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewYorkRedbulls' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/suytvy1473536462.png/tiny'
                                    className="mr-2"
                                    alt="NY Red Bulls Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('NY Red Bulls')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('NY Red Bulls'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    NY Red Bulls
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/OrlandoCity' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png/tiny'
                                    className="mr-2"
                                    alt="Orlando City Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Orlando City');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Orlando City'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Orlando City
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/PhiladelphiaUnion' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/gyznyo1602103682.png/tiny'
                                    className="mr-2"
                                    alt="Philadelphia Union Logo"
                                    style={{width: "20px"}}
                                    onClick={() => { 
                                        handleClick('Philadelphia');
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base'   
                                    onClick={() => { 
                                        handleClick('Philadelphia'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Philadelphia Union
                                </span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/TorontoFC' 
                                className="flex items-center"
                            >
                                <img
                                    src='https://www.thesportsdb.com/images/media/team/badge/rsxyrr1473536512.png/tiny'
                                    className="mr-2"
                                    alt="Toronto FC Logo"
                                    style={{width: "20px"}}
                                    onClick={() => {
                                        handleClick('Toronto')
                                        closeDropdown();
                                    }}
                                />
                                <span
                                    className='text-base' 
                                    onClick={() => { 
                                        handleClick('Toronto'); 
                                        closeDropdown(); 
                                    }} 
                                >
                                    Toronto FC
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TeamHamburger