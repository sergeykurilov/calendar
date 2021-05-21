import {ReactNode} from "react";
import {initialState, reducer} from "../redux/reducers";
import {actions} from "../redux/actions";

export type MenuList = {
  name: string;
}
export type InitialStateType = typeof initialState
export type ActionsType =
    setDayType
    | setDayOfWeekType
    | setMonthType
    | setOnChangeType
    | setSelectedDateType
type setDayType = ReturnType<typeof actions.setDay>
type setDayOfWeekType = ReturnType<typeof actions.setDayOfWeek>
type setMonthType = ReturnType<typeof actions.setMonth>
type setOnChangeType = ReturnType<typeof actions.setOnChange>
type setSelectedDateType = ReturnType<typeof actions.setSelectedDate>
export type RootStateType = ReturnType<typeof reducer>
export type ModalType = {
  closeModal: () => void
  selectedDate: Date
  showModal: boolean
}
export type PropsLayout = {
  children?: ReactNode
  title?: string
}
