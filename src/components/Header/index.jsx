import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

import './styles.css'

export default ({page}) => {
    const [showDateRange, setShowDateRange] = useState(false)
    const [selectionRange, setSelectionRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [showOptions, setShowOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'l' ? options[name] - 1 : options[name] + 1
            }
        })
    } 

    return (
        <div className="header">
            <div className={page === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractiona</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {page === 'home' && (
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDescription">Ger rewarded for your travels - unlock instant saving for 10% or more with a free devbooking account</p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setShowDateRange(!showDateRange)}>{`${format(selectionRange[0].startDate, 'dd/MM/yyy')} to ${format(selectionRange[0].endDate, 'dd/MM/yyy')}`}</span>
                                {showDateRange && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setSelectionRange([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={selectionRange}
                                        className='dateRange'
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span className="headerSearchText" onClick={() => setShowOptions(!showOptions)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                {showOptions && (
                                    <div className='options'>
                                    <div className="optionItem">
                                        <span className="optionText">Adunt</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption('adult', 'l')} disabled={options.adult <= 1}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('adult', 'm')}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption('children', 'l')} disabled={options.children <= 0}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('children', 'm')}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption('room', 'l')} disabled={options.room <= 1}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('room', 'm')}>+</button>
                                        </div>
                                    </div>
                                </div>
                                )}    
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">Search</button>
                            </div>
                        </div>
                    </>
                )}
            </div>  
        </div>
    ) 
}