import React from 'react'
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ handleTeamSelect, handleCloseDropdown, handleToggleDropdown, isMenuOpen }) => {
    
    function handleClick(teamClicked) {
        handleTeamSelect(teamClicked);
    }

    return (
        <div className='sm:block lg:hidden bg-black text-white text-xl pl-6 pb-4'>
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
                                            src='/logos/full-size/austin.png'
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
                                            src='/logos/full-size/colorado.png'
                                            className="mr-2"
                                            alt="Colorado Rapids Logo"
                                            style={{width: "20px"}}
                                            onClick={() => {
                                                handleClick('Rapids');
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span 
                                            className='text-base'
                                            onClick={() => {
                                                handleClick('Rapids'); 
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
                                            src='/logos/full-size/dallas.png'
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
                                            src='/logos/full-size/houston.png'
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
                                            src='/logos/full-size/lagalaxy.png'
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
                                            src='/logos/full-size/lafc.png'
                                            className="mr-2"
                                            alt="LAFC Logo"
                                            style={{width: "20px"}}
                                            onClick={() => { 
                                                handleClick('LAFC')
                                                handleCloseDropdown();
                                            }}
                                        />
                                        <span
                                            className='text-base' 
                                            onClick={() => { 
                                                handleClick('LAFC'); 
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
                                            src='/logos/full-size/minnesota.png'
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
                                        src='/logos/full-size/portland.png'
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
                                        src='/logos/full-size/rsl.png'
                                        className="mr-2"
                                        alt="Real Salt Lake Logo"
                                        style={{width: "20px"}}
                                        onClick={() => { 
                                            handleClick('RSL')
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('RSL'); 
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
                                        src='/logos/full-size/sanjose.png'
                                        className="mr-2"
                                        alt="San Jose Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('SJ Earthquakes')
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick('SJ Earthquakes'); 
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
                                        src='/logos/full-size/seattle.png'
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
                                        src='/logos/full-size/skc.png'
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
                                        src='/logos/full-size/stlouis.png'
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
                                        src='/logos/full-size/vancouver.png'
                                        className="mr-2"
                                        alt="Vancouver Whitecaps Logo"
                                        style={{width: "20px"}}
                                        onClick={() => { 
                                            handleClick("Vancouver W'caps")
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span 
                                        className='text-base'
                                        onClick={() => { 
                                            handleClick("Vancouver W'caps"); 
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
                                        src='/logos/full-size/atlanta.png'
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
                                        src='/logos/full-size/charlotte.png'
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
                                        src='/logos/full-size/chicago.png'
                                        className="mr-2"
                                        alt="Chicago Fire Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('Fire')
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Fire'); 
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
                                        src='/logos/full-size/columbus.png'
                                        className="mr-2"
                                        alt="Columbus Crew Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('Crew');
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('Crew'); 
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
                                        src='/logos/full-size/cincinnati.png'
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
                                        src='/logos/full-size/dc.png'
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
                                        src='/logos/full-size/miami.png'
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
                                        src='/logos/full-size/montreal.png'
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
                                        src='/logos/full-size/nashville.png'                                    
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
                                        src='/logos/full-size/newengland.png'
                                        className="mr-2"
                                        alt="New England Rev. Logo"
                                        style={{width: "20px"}}
                                        onClick={() => {
                                            handleClick('NE Revolution');
                                            handleCloseDropdown();
                                        }}
                                    />
                                    <span
                                        className='text-base' 
                                        onClick={() => { 
                                            handleClick('NE Revolution'); 
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
                                        src='/logos/full-size/nycfc.png'
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
                                        src='/logos/full-size/nyredbulls.png'
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
                                        src='/logos/full-size/orlando.png'
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
                                        src='/logos/full-size/philadelphia.png'
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
                                        src='/logos/full-size/torontofc.png'
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

export default HamburgerMenu