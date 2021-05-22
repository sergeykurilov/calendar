import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {ModalType} from "../../interfaces";

function Modal(props: ModalType) {
    console.log(String(props.selectedDate).substr(0,3))

    const selectedMonth = props.selectedDate?.getMonth();
    const selectedDate = props.selectedDate?.getDate();
    const selectedYear = props.selectedDate?.getFullYear();
    const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekDayNames = new Date(props.selectedDate).toLocaleString('en-us', {weekday:'long'})
    return (
        <TransitionGroup className="modal-wrapper">
            {props.showModal && (
                <CSSTransition timeout={200} classNames="modal">
                    <div className="modal">
                        <button className="modal_close" onClick={props.closeModal}>X</button>
                        <div className="modal-blocks">
                            <div>
                                <label className="modal_label">
                                    Month
                                    <input onBlur={props.closeModal} className="modal_input" type="text" value={arr[selectedMonth]}
                                           onChange={() => {
                                           }}/>
                                </label>
                            </div>
                            <div>
                                <label className="modal_label">Date <input onBlur={props.closeModal} className="modal_input" type="text"
                                                                           value={selectedDate} onChange={() => {
                                }}/></label>
                            </div>
                            <div>
                                <label className="modal_label">Week Day <input onBlur={props.closeModal} className="modal_input" type="text"
                                                                           value={weekDayNames} onChange={() => {
                                }}/></label>
                            </div>
                            <div>
                                <label className="modal_label">Year <input onBlur={props.closeModal} className="modal_input" type="text"
                                                                           value={selectedYear} onChange={() => {
                                }}/></label>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
}

export default Modal;
