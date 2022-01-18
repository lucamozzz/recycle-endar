import React, { useState } from 'react';
import { get } from 'lodash';
import { SinglePickupContainer, CloseButton, PickupImage } from './style';

export const Pickup = ({ pickup, del }) => {
    const id = get(pickup, 'id', { id: 'Unknown id' });
    const weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    const type = get(pickup, 'type', { type: 'Unknown type' });
    const start = get(pickup, 'start', { start: 'xx:xx' });
    const end = get(pickup, 'end', { end: 'xx:xx' });

    const colors = {
        Plastic: '#5ED9FF',
        Organic: '#4DED30',
        Paper: '#D4D4D4',
        Glass: '#15D5B0',
        Metal: '#3F3F3F',
        Clothes: '#FFB6C1',
        'Light Bulbs': '#F6DA36',
        Batteries: '#F36838',
        'E-Waste': '#9751B4',
    }

    const border = {
        border: '4px solid ' + colors[type],
        backgroundColor: colors[type] + '50'
    }

    const img = {
        background: 'url(../assets/images/' + type.replace(" ", "") + '.png)',
        backgroundSize: '52px',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <SinglePickupContainer style={border} className='container'>
            <div style={{ width: '8.5em' }}>
                <CloseButton onClick={() => del(id)} />
                <h4 style={{ fontSize: '1.45em' }}>{type}</h4>
                <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
            </div>
            <PickupImage style={img} />
        </SinglePickupContainer>
    )
}

export default Pickup;