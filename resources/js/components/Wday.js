import React from 'react';
import { HorizontalContainer } from './style';
import Pickup from './Pickup';

let h3Style = {};

export const Wday = ({ day, pickups, del }) => {

    if (pickups.length == 0) {
        h3Style = {
            marginBottom: '-0.4em',
            opacity: '50%',
            fontSize: '2em',
        }
    } else {
        h3Style = {
            marginBottom: '-0.4em',
            fontSize: '2em',
        }
    }

    return (
        <>
            <h3 style={h3Style}>{day}</h3>
            <HorizontalContainer>
                {
                    pickups
                        .map(
                            pickup => {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={del} />
                                )
                            }
                        )
                }
            </HorizontalContainer>
        </>
    )
}

export default Wday;