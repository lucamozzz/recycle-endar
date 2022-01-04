import React from 'react';
import { get } from 'lodash';
import { SinglePickupContainer } from './style';

export const Pickup = ({ pickup, del }) => {
    const id = get(pickup, 'id', { id: 'Unknown id' });
    const weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    const type = get(pickup, 'type', { type: 'Unknown type' });
    const start = get(pickup, 'start', { start: 'xx:xx' });
    const end = get(pickup, 'end', { end: 'xx:xx' });

    return (
        <SinglePickupContainer className='container'>
            <button style={{ float: 'right' }} className='btn-close' onClick={() => del(id)} />
            <h4>{type}</h4>
            <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
        </SinglePickupContainer>
    )
}

export default Pickup;