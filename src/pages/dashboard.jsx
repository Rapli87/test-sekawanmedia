import React, { useState } from 'react';
import { FaSearch, FaBell, FaBars, FaTicketAlt, FaChartLine } from 'react-icons/fa';
import { GrOverview } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { Line } from "react-chartjs-2";
import '../components/dashboard.css';
import { useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const Dashboard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        // Hapus token otentikasi atau informasi pengguna dari localStorage atau cookies
        localStorage.removeItem('authToken');

        // Arahkan pengguna ke halaman login
        navigate('/');
    };

    const data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        datasets: [{
            data: [0, 10, 20, 30, 150, 50, 90, 70, 80, 120, 100, 110, 200, 130, 140, 150, 160, 170, 180, 100, 200, 210],
            backgroundColor: 'transparent',
            borderColor: '#3751FF'
        }]
    };

    const options = {
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                grid: { display: false }
            }
        }
    };

    return (
        <div className='dashboard'>
            <div className='row no-gutters'>
                <div className='col-2 p-4 text-center transparent-light sidebar'>
                    <h5>Dashboard Kit</h5>
                    <div className="menu">
                        <div className="menu-item">
                            <GrOverview /> <span>Overview</span>
                        </div>
                        <div className="menu-item">
                            <FaTicketAlt /> <span>Ticket</span>
                        </div>
                        <div className="menu-item">
                            <FaChartLine /> <span>Analytics</span>
                        </div>
                        <div className="menu-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            <TbLogout2 /> <span>Logout</span>
                        </div>
                    </div>
                </div>
                <div className='col-10 background-light'>
                    <div className='navbar'>
                        <div className='row no-gutters align-items-center'>
                            <div className='col-3 navbar-title'>Overview</div>
                            <div className='col-9'>
                                <div className='navbar-elements'>
                                    <FaSearch className='navbar-icon' />
                                    <FaBell className='navbar-icon' />
                                    <span className='navbar-divider'>|</span>
                                    <div className='navbar-profile'>
                                        <span>Jones Ferdinand</span>
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="Jones Ferdinand"
                                            className="rounded-circle ms-3"
                                        />
                                    </div>
                                    <FaBars className='navbar-icon d-md-none' onClick={toggleDropdown} />
                                </div>
                                {dropdownOpen && (
                                    <div className='dropdown-menu'>
                                        <div className='dropdown-item'>
                                            <FaSearch style={{ fontSize: '15px' }} />
                                        </div>
                                        <div className='dropdown-item'>
                                            <FaBell style={{ fontSize: '15px' }} />
                                        </div>
                                        <div className='dropdown-item d-flex align-items-center'>
                                            <span>Jones Ferdinand</span>
                                            <img
                                                src="https://via.placeholder.com/40"
                                                alt="Jones Ferdinand"
                                                className="rounded-circle ms-3"
                                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-5'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='card square-card'>
                                    <div className='card-body text-center'>
                                        <div className='transparent' style={{ fontSize: '19px' }}>Unresolved</div>
                                        <h1 className='mt-2' style={{ fontWeight: 'bold' }}>60</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card square-card active-card'>
                                    <div className='card-body text-center' style={{ fontSize: '19px' }}>
                                        <div className='transparent' style={{ color: '#3751FF' }}>Overdue</div>
                                        <h1 className='mt-2' style={{ fontWeight: 'bold' }}>16</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card square-card'>
                                    <div className='card-body text-center'>
                                        <div className='transparent' style={{ fontSize: '19px' }}>Open</div>
                                        <h1 className='mt-2' style={{ fontWeight: 'bold' }}>43</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card square-card'>
                                    <div className='card-body text-center'>
                                        <div className='transparent' style={{ fontSize: '19px' }}>On hold</div>
                                        <h1 className='mt-2' style={{ fontWeight: 'bold' }}>64</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='card card-cart'>
                            <div className='container-fluid m-0'>
                                <div className='row m-0'>
                                    <div className='col-8 p-4'>
                                        <p style={{ fontWeight: 'bold' }}>Today's trends</p>
                                        <Line data={data} options={options}></Line>
                                    </div>
                                    <div className='col-4' style={{ borderLeft: '0.1px solid #00000017' }}>
                                        <div className='pt-4' style={{ borderBottom: '0.1px solid #00000017' }}>
                                            <div className='transparent text-center'>Resolved</div>
                                            <h3 className='text-center pb-4' style={{ fontWeight: 'bold' }}>449</h3>
                                        </div>
                                        <div className='pt-4' style={{ borderBottom: '0.1px solid #00000017' }}>
                                            <div className='transparent text-center'>Received</div>
                                            <h3 className='text-center pb-4' style={{ fontWeight: 'bold' }}>426</h3>
                                        </div>
                                        <div className='pt-4' style={{ borderBottom: '0.1px solid #00000017' }}>
                                            <div className='transparent text-center'>Average first response time</div>
                                            <h3 className='text-center pb-4' style={{ fontWeight: 'bold' }}>33m</h3>
                                        </div>
                                        <div className='pt-4' style={{ borderBottom: '0.1px solid #00000017' }}>
                                            <div className='transparent text-center'>Average response time</div>
                                            <h3 className='text-center pb-4' style={{ fontWeight: 'bold' }}>3h 8m</h3>
                                        </div>
                                        <div className='pt-4 pb-4'>
                                            <div className='transparent text-center'>Resolution within SLA</div>
                                            <h3 className='text-center' style={{ fontWeight: 'bold' }}>94%</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
