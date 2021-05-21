import {ActionsType, InitialStateType} from "../../interfaces";
import {SET_DAY, SET_MONTH, SET_ON_CHANGE, SET_SELECTED_DATE, SET_WEEK_DAY} from "../constants";

export const initialState = {
    currentDate: new Date(),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    selectedDate: null,
    month: null,
    day: null,
    dayOfWeek: null,
    onChange: Function.prototype,
};

export const reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.date,
            };
        case SET_ON_CHANGE:
            return {
                ...state,
                onChange: action.date,
            };
        case SET_MONTH:
            return {
                ...state,
                month: action.month,
            };
        case SET_DAY:
            return {
                ...state,
                day: action.day,
            };
        case SET_WEEK_DAY:
            return {
                ...state,
                dayOfWeek: action.weekDay,
            };

        default:
            return state;
    }
}
