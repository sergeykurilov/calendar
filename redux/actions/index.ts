import {SET_DAY, SET_MONTH, SET_ON_CHANGE, SET_SELECTED_DATE, SET_WEEK_DAY} from "../constants";

export const actions = {
    setSelectedDate: (date: Date) => ({
        type: SET_SELECTED_DATE,
        date,
    }as const),
    setOnChange: (date: Function) => ({
        type: SET_ON_CHANGE,
        date,
    }as const),
    setMonth: (month: string) => ({
        type: SET_MONTH,
        month,
    }as const),
    setDay: (day: string) => ({
        type: SET_DAY,
        day,
    }as const),
    setDayOfWeek: (weekDay: string) => ({
        type: SET_WEEK_DAY,
        weekDay,
    }as const),
};
