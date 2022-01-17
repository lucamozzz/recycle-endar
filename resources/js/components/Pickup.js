import React from 'react';
import { get } from 'lodash';
import { SinglePickupContainer, CloseButton } from './style';

export const Pickup = ({ pickup, del }) => {
    const id = get(pickup, 'id', { id: 'Unknown id' });
    const weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    const type = get(pickup, 'type', { type: 'Unknown type' });
    const start = get(pickup, 'start', { start: 'xx:xx' });
    const end = get(pickup, 'end', { end: 'xx:xx' });

    const colors = {
        Plastic: '#F36838',
        Organic: '#88685D',
        Paper: '#4DED30',
        Glass: '#5ED9FF',
        Metal: '#057E87',
        Clothes: '#FFB6C1',
        'Light Bulbs': '#F6DA36',
        Batteries: '#15D5B0',
        'E-Waste': '#9751B4',
    }

    const border = {
        border: '4px solid ' + colors[type],
        backgroundColor: colors[type] + '50'
    }

    return (
        <SinglePickupContainer style={border} className='container'>
            {/* <CloseButton className='btn-close' onClick={() => del(id)} /> */}
            <CloseButton onClick={() => del(id)} />
            <h4>{type}</h4>
            <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
        </SinglePickupContainer>
    )
}

export default Pickup;