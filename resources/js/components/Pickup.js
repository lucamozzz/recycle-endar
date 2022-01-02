import React from 'react';
import { get } from 'lodash';

export const Pickup = ({ pickup, del }) => {
    const id = get(pickup, 'id', { id: 'Unknown id' });
    const weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    const type = get(pickup, 'type', { type: 'Unknown type' });
    const start = get(pickup, 'start', { start: 'xx:xx' });
    const end = get(pickup, 'end', { end: 'xx:xx' });

    return (
        <div>
            <h4>{type}</h4>
            <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
            <button onClick={() => del(id)}>X</button>
        </div>
    )
}

export default Pickup;