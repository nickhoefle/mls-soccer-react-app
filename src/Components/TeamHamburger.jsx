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
                <div className="flex dropdown">
                    <div className='w-1/2 pt-9'>
                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/AustinFC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png/tiny'
                                onClick={() => { 
                                    handleClick('Austin'); 
                                    closeDropdown(); 
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { 
                                    handleClick('Austin'); 
                                    closeDropdown(); 
                                }} className='text-base'>Austin FC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ColoradoRapids' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/uppupv1473536412.png/tiny'
                                onClick={() => {
                                    handleClick('Colorado Rapids')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => {handleClick('Colorado Rapids'); closeDropdown()}} className='text-base'>Colorado Rapids</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/FCDallas' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/vxy8xy1602103187.png/tiny'
                                onClick={() => {
                                    handleClick('FC Dallas')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('FC Dallas'); closeDropdown() }} className='text-base'>FC Dallas</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/HoustonDynamo' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/em146s1606772337.png/tiny'
                                onClick={() => {
                                    handleClick('Dynamo FC')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Dynamo FC'); closeDropdown(); }} className='text-base'>Houston Dynamo</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/LAGalaxy' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png/tiny'
                                onClick={() => { 
                                    handleClick('LA Galaxy')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('LA Galaxy'); closeDropdown(); }} className='text-base'>LA Galaxy</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/LAFC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png/tiny'
                                onClick={() => { 
                                    handleClick('Los Angeles FC')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Los Angeles FC'); closeDropdown(); }} className='text-base'>LAFC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/MinnesotaUnited' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/vl67t41492453433.png/tiny'
                                onClick={() => {
                                    handleClick('Minnesota Utd')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Minnesota Utd'); closeDropdown(); }} className='text-base'>Minnesota United</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/PortlandTimber' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/skm30j1557953559.png/tiny'
                                onClick={() => { 
                                    handleClick('Portland Timbers')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Portland Timbers'); closeDropdown(); }} className='text-base'>Portland Timbers</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/RealSaltLake' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/kkjlfa1556488022.png/tiny'
                                onClick={() => { 
                                    handleClick('Real Salt Lake')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Real Salt Lake'); closeDropdown(); }} className='text-base'>Real Salt Lake</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SanJoseEarthquakes' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/xyrqqt1420781048.png/tiny'
                                onClick={() => {
                                    handleClick('San Jose')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('San Jose'); closeDropdown(); }} className='text-base'>San Jose</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SeattleSounders' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/vpyprt1473536493.png/tiny'
                                onClick={() => {
                                    handleClick('Seattle')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Seattle'); closeDropdown() }} className='text-base'>Seattle Sounders</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/SportingKC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/tqupxw1473536504.png/tiny'
                                onClick={() => {
                                    handleClick('Sporting KC')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Sporting KC'); closeDropdown(); }} className='text-base'>Sporting KC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/StLouisCitySC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/22wanp1674118724.png/tiny'
                                onClick={() => {
                                    handleClick('St. Louis')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('St. Louis'); closeDropdown(); }} className='text-base'>St. Louis City SC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/VancouverWhitecaps' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/tpwxpy1473536521.png/tiny'
                                onClick={() => { 
                                    handleClick('Vancouver')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Vancouver'); closeDropdown() }} className='text-base'>Vancouver</span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/AtlantaUnited' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/ej091x1602103070.png/tiny'
                                onClick={() => { 
                                    handleClick('Atlanta Utd')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Atlanta Utd'); closeDropdown() }} className='text-base'>Atlanta United</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/CharlotteFC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png/tiny'
                                onClick={() => { 
                                    handleClick('Charlotte')
                                    closeDropdown();
                                }}
                                    className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Charlotte'); closeDropdown(); }} className='text-base'>Charlotte FC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ChicagoFire' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/8xuc781639493166.png/tiny'
                                onClick={() => {
                                    handleClick('Chicago Fire')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Chicago Fire'); closeDropdown() }} className='text-base'>Chicago Fire</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/ColumbusCrew' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png/tiny'
                                onClick={() => {
                                    handleClick('Columbus Crew');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Columbus Crew'); closeDropdown() }} className='text-base'>Columbus Crew</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/FCCincinnati' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/47ve8t1555084948.png/tiny'
                                onClick={() =>  {
                                    handleClick('FC Cincinnati')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => {  handleClick('FC Cincinnati'); closeDropdown(); }} className='text-base'>FC Cincinnati</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/DCUnited' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/uwvsyt1467462609.png/tiny'
                                onClick={() => {
                                    handleClick('D.C. United')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('D.C. United'); closeDropdown(); }} className='text-base'>DC United</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/InterMiami' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png/tiny'
                                onClick={() => { 
                                    handleClick('Inter Miami')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Inter Miami'); closeDropdown() }} className='text-base'>Inter Miami</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/CFMontreal' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/livdl31679344925.png/tiny'
                                onClick={() => {
                                    handleClick('CF Montréal');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('CF Montréal'); closeDropdown() }} className='text-base'>CF Montréal</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NashvilleSC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/znrwt71602103062.png/tiny'
                                onClick={() => { 
                                    handleClick('Nashville');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Nashville'); closeDropdown(); }} className='text-base'>Nashville SC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewEnglandRevolution' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/1ula2l1639493143.png/tiny'
                                onClick={() => {
                                    handleClick('New England');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('New England'); closeDropdown() }} className='text-base'>New England Rev.</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewYorkCityFC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/li4y2o1534575820.png/tiny'
                                onClick={() => {
                                    handleClick('NYCFC')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('NYCFC'); closeDropdown(); }} className='text-base'>NYCFC</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/NewYorkRedbulls' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/suytvy1473536462.png/tiny'
                                onClick={() => {
                                    handleClick('NY Red Bulls')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('NY Red Bulls'); closeDropdown(); }} className='text-base'>NY Red Bulls</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/OrlandoCity' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png/tiny'
                                onClick={() => {
                                    handleClick('Orlando City');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Orlando City'); closeDropdown(); }} className='text-base'>Orlando City</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/PhiladelphiaUnion' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/gyznyo1602103682.png/tiny'
                                onClick={() => { 
                                    handleClick('Philadelphia');
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Philadelphia'); closeDropdown(); }} className='text-base'>Philadelphia Union</span>
                            </Link>
                        </div>

                        <div className='flex items-center text-white py-1'>
                            <Link to='/team/TorontoFC' 
                            className="flex items-center">
                                <img
                                src='https://www.thesportsdb.com/images/media/team/badge/rsxyrr1473536512.png/tiny'
                                onClick={() => {
                                    handleClick('Toronto')
                                    closeDropdown();
                                }}
                                className="mr-2"
                                alt="Team Logo"
                                style={{width: "20px"}}
                                />
                                <span onClick={() => { handleClick('Toronto'); closeDropdown() }} className='text-base'>Toronto FC</span>
                            </Link>
                        </div>

                    </div>
            
                </div>
            )}
        </>
    )
}

export default TeamHamburger