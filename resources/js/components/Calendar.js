import React, { useState } from 'react';
import { get } from 'lodash';
import { SingleCalendarContainer, CloseButton } from './style';

export const Calendar = ({ calendar, del, edit }) => {
    const name = get(calendar, 'name', { name: 'Unknown name' });
    const id = get(calendar, 'id', { name: 'Unknown name' });

    return (
        <div>
            <h4 style={{ fontSize: '1.45em' }}>{name}</h4>
        </div>
    )
}

export default Calendar;