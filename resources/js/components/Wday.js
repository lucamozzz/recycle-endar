import React from 'react';
import { PickupsContainer } from './style';
import Pickup from './Pickup';

let h3Style = {};

export const Wday = ({ day, pickups, del }) => {

    if (pickups.length == 0) {
        h3Style = {
            marginBottom: '-0.5em',
            opacity: '50%',
        }
    } else {
        h3Style = {
            marginBottom: '-0.5em',
        }
    }

    return (
        <>
            <h3 style={h3Style}>{day}</h3>
            <PickupsContainer>
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
            </PickupsContainer>
        </>
    )
}

export default Wday;