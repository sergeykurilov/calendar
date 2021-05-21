import { createStore } from 'redux';

const initialState = {
    currentDate: new Date(),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    selectedDate: null,
    onChange: Function.prototype,
};

export const selectors = {
    getCurrentDate: (state:any) => {
        return state.currentDate
    },
    getYears: (state:any)  => state.years,
    getMonthNames: (state:any)  => state.monthNames,
    getWeekDayNames: (state:any)  => state.weekDayNames,
    getSelectedDate: (state:any)  => state.selectedDate,
    getOnChange: (state:any)  => state.onChange,
};

const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
const SET_ON_CHANGE = 'SET_ON_CHANGE';
const SET_MONTH = 'SET_MONTH';
const SET_DAY = 'SET_DAY';
const SET_WEEK_DAY = 'SET_WEEK_DAY';


export const actions = {
    setSelectedDate: (date:any) => ({
        type: SET_SELECTED_DATE,
        date,
    }),

    setOnChange: (date:any) => ({
        type: SET_ON_CHANGE,
        date,
    }),

    setMonth: month => ({
      type: SET_MONTH,
      month,
    }),

    setDay: day => ({
      type: SET_DAY,
      day,
    }),

    setDayOfWeek: weekDay => ({
      type: SET_WEEK_DAY,
      weekDay,
    }),
};

const reducer = (state = initialState, action:any) => {
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

const store = createStore(reducer);
// @ts-ignore
// window.__store__ = store;
export default store;
