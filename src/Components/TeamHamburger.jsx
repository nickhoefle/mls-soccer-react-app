import React from 'react'
import { Link } from 'react-router-dom';

const TeamHamburger = ({ handleTeamSelect, handleCloseDropdown, handleToggleDropdown, isMenuOpen }) => {
    
    function handleClick(teamClicked) {
        handleTeamSelect(teamClicked);
    }

    return (
        <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pt-4'>
            {!isMenuOpen && ( 
                <div 
                    className='flex items-center'
                    onClick={handleToggleDropdown}
                >
                    <div className="hamburger w-[20px] h-[25px] mr-2">
                        <img
                            className='w-[100%] h-[100%]'
                            src='/icons/hamburger.png' 
                        />
                    </div>
                    <span>Menu</span>
                </div>
            )}
            
            {isMenuOpen && ( 
                <div 
                    className='flex items-center'
                    onClick={handleToggleDropdown}
                >
                    <div className="hamburger w-[20px] h-[20px] mr-2">
                        <img
                            className='w-[100%] h-[100%]'
                            src='/icons/x.png' 
                        />
                    </div>
                    <span>Menu</span>
                </div>
            )}
            
            {isMenuOpen && (
                <div>
                    <div className='flex flex-col my-6'>
                        <Link 
                            className='text-lg underline'
                            to='/'
                            onClick={() => {handleCloseDropdown()}}
                        >
                            Home
                        </Link>
                        <Link 
                            className='mt-2 text-lg underline'
                            to='/playercomp'
                            onClick={() => {handleCloseDropdown()}}
                        >
                            Player Comparison
                        </Link>
                    </div>
                    <div className="flex">
                        <div className='w-1/2'>
                            <p className='text-lg'>Clubs:</p>
                            <div className='flex items-center text-white py-1'>
                                <Link 
                                    to='/team/AustinFC' 
                                    className="flex items-center"
                                >
                                        <img
                                            src='https://www.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png/tiny'
                                            className="mr-2"
                                            alt="Austin FC Logo"
                                            style={{width: "20px"}}
                                            onClick={() => { 
                                                handleClick('Austin'); 
                                                handleCloseDropdown(); 
                                            }}
                                        />
                                        <span 
                                            className='text-base'
                                            onClick={() => { 
                                            handleClick('Austin'); 
                                            handleCloseDropdown(); 
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span 
                                            className='text-base'
                                            onClick={() => {
                                                handleClick('Colorado Rapids'); 
                                                handleCloseDropdown();
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span 
                                            className='text-base'
                                            onClick={() => { 
                                                handleClick('FC Dallas'); 
                                                handleCloseDropdown(); 
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span
                                            className='text-base'
                                            onClick={() => { 
                                                handleClick('Dynamo FC'); 
                                                handleCloseDropdown(); 
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span
                                            className='text-base'
                                            onClick={() => { 
                                                handleClick('LA Galaxy'); 
                                                handleCloseDropdown(); 
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span
                                            className='text-base' 
                                            onClick={() => { 
                                                handleClick('Los Angeles FC'); 
                                                handleCloseDropdown(); }} 
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
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span 
                                            className='text-base'
                                            onClick={() => { 
                                                handleClick('Minnesota Utd'); 
                                                handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Portland Timbers'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Real Salt Lake'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('San Jose'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Seattle'); 
                                            handleCloseDropdown() 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Sporting KC'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('St. Louis'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('Vancouver'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Atlanta Utd'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Charlotte'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Chicago Fire'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Columbus Crew'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => {  
                                            handleClick('FC Cincinnati'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('D.C. United'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Inter Miami'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('CF Montréal'); 
                                            handleCloseDropdown() 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Nashville'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('New England'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('NYCFC'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('NY Red Bulls'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Orlando City'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base'   
                                        onClick={() => { 
                                            handleClick('Philadelphia'); 
                                            handleCloseDropdown(); 
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
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Toronto'); 
                                            handleCloseDropdown(); 
                                        }} 
                                    >
                                        Toronto FC
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeamHamburger