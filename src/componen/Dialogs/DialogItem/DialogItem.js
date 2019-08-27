import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/1' + props.id}> {props.name} </NavLink>
    </div>
}
DialogItem.propTypes= {
    name:PropTypes.string,
    id: PropTypes.number
};
export default DialogItem;