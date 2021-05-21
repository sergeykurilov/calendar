import React, {useState} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Modal(props:any) {
    const selectedMonth = props.selectedDate?.getMonth();
    const selectedDate = props.selectedDate?.getDate();
    const selectedYear = props.selectedDate?.getFullYear();
    const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <TransitionGroup className="modal-wrapper">
            {props.showModal === true && (
                <CSSTransition timeout={200} classNames="modal">
                    <div className="modal">
                        <button className="modal_close" onClick={props.closeModal}>X</button>
                        <div className="modal-blocks">
                            <div>
                                <label className="modal_label">
                                    Month
                                    <input className="modal_input" type="text" value={arr[selectedMonth]} onChange={()=>{}} />
                                </label>
                            </div>
                            <div>
                                <label className="modal_label">Date  <input className="modal_input" type="text" value={selectedDate} onChange={()=>{}} /></label>
                            </div>
                            <div>
                                <label className="modal_label">Year  <input className="modal_input" type="text" value={selectedYear} onChange={()=>{}}/></label>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
}

export default Modal;
