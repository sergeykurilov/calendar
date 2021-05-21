import {RootStateType} from "../../interfaces";

export const selectors = {
    getCurrentDate: (state:RootStateType) => {
        return state.currentDate
    },
    getYears: (state:RootStateType)  => state.years,
    getMonthNames: (state:RootStateType)  => state.monthNames,
    getWeekDayNames: (state:RootStateType)  => state.weekDayNames,
    getSelectedDate: (state:RootStateType)  => state.selectedDate,
    getOnChange: (state:RootStateType)  => state.onChange,
};
