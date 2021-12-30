import React from 'react';
import { get } from 'lodash';

export const Pickup = ({ pickup }) => {
    let id = get(pickup, 'id', { id: 'Unknown id' });
    let weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    let type = get(pickup, 'type', { type: 'Unknown type' });
    let start = get(pickup, 'start', { start: 'xx:xx' });
    let end = get(pickup, 'end', { end: 'xx:xx' });

    const deletePickup = async () => {
        try {
            await axios.delete(`api/pickups/${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h4>{type}</h4>
            <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
            <button onClick={deletePickup}>X</button>
        </div>
    )
}

export default Pickup;