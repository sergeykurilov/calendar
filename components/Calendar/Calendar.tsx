import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../redux/store';
import CN from 'classnames';
import * as calendar from './utils';
import Modal from "../Modal/MyModal";
import Layout from "../Layout";

export const Calendar = () => {
    const dispatch = useDispatch();
    const currentDate = useSelector(selectors.getCurrentDate);
    const years = useSelector(selectors.getYears);
    const monthNames = useSelector(selectors.getMonthNames);
    const weekDayNames = useSelector(selectors.getWeekDayNames);
    const selectedDate = useSelector(selectors.getSelectedDate);
    const onChange = useSelector(selectors.getOnChange);
    const [showModal, setShowModal] = useState(false);

    const [chosenDate, setChosenDate] = useState(currentDate);
    console.log("choosen Date",chosenDate);
    // console.log(onChange);
    console.log(selectedDate)
    const year = () => {
        return chosenDate.getFullYear();
    }

    const month = () => {
        return chosenDate.getMonth();
    }

    const day = () => {
        return chosenDate.getDate();
    }

    const monthData = calendar.getMonthData(year(), month());

    const handlePrevMonthButtonClick = () => {
        const date = new Date(year(), month() - 1);
        console.log(date);

        setChosenDate(date);
        // this.setState({ date });
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(year(), month() + 1);
        console.log(date);
        setChosenDate(date);
    };


    const handleDayClick = date => {
        dispatch(actions.setSelectedDate(date));
        dispatch(actions.setOnChange(date));
    };

    return (
        <div className="calendar">
            <Modal selectedDate={selectedDate} showModal={showModal} closeModal={() => setShowModal(false)} />
            <header className="calendar__header">
                <button
                    onClick={handlePrevMonthButtonClick}
                    className="calendar__button"
                >
                    &#8249;
                </button>

                <span>{monthNames[month()]} {year()}</span>

                <button
                    onClick={handleNextMonthButtonClick}
                    className="calendar__button"
                >
                    &#8250;
                </button>
            </header>

            <table className="calendar__table">
                <tbody className="calendar__tbody">
                {monthData.map((week,i) => (
                    <tr key={i}>
                        {week.map((date,i) => date[0] ?
                            <td
                                key={i}
                                onClick={()=> {
                                    setShowModal(!showModal)
                                    handleDayClick(date[1])
                                }}
                                className={CN('calendar__day', {
                                    'calendar__today': calendar.areEqual(date[1], currentDate),
                                    'calendar__selected': calendar.areEqual(date[1], selectedDate)
                                })}
                            >
                                {`0${date[1].getDate()}`.slice(-2)}
                            </td>
                            :
                            <td key={i} className="calendar__disabledDay">{`0${date[1].getDate()}`.slice(-2)}</td>)}

                    </tr>
                ))}
                </tbody>

                <thead className="calendar__thead">
                <tr>
                    {weekDayNames.map((name, i) => (
                        <th key={i}>{name}</th>
                    ))}
                </tr>
                </thead>
            </table>
        </div>
    );
}
