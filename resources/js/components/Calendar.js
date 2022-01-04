import React, { useState, useEffect } from 'react';
import { Backdrop, PickupModal, PickupsContainer, AddPickupButton } from './style';
import Pickup from './Pickup';
import axios from 'axios';

export const Calendar = ({ loggedUser }) => {
    //Pickup parameters
    const [type, setType] = useState("");
    const [weekday, setWeekday] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [token, setToken] = useState(loggedUser.token);
    const [userId, setUserId] = useState(loggedUser.user.id);

    const loadPickups = async () => {
        try {
            const data = await axios(`/api/pickups`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPickups(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    //Pickups list
    const [pickups, setPickups] = useState([]);

    //Pickups count
    const [count, setCount] = useState(0);

    const createPickup = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/pickups`,
                {
                    type: type,
                    weekday: weekday,
                    start: start,
                    end: end,
                    user_id: userId,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setShow(false);
            setCount(count + 1);
        } catch (error) {
            console.error(error);
        }
    }

    const deletePickup = async (id) => {
        try {
            await axios.delete(`api/pickups/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCount(count - 1);
        } catch (error) {
            console.error(error);
        }
    }

    //Modal show setting
    const [show, setShow] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    //Reload pickups everytime the count value changes
    useEffect(loadPickups,
        [count]);

    return (
        <div className='container-md'>
            <div className='container'>
                <h3>Monday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 0) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Tuesday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 1) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Wednesday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 2) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Thursday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 3) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Friday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 4) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Saturday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 5) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
                <h3>Sunday</h3>
                <PickupsContainer>
                    {
                        pickups.map(pickup => {
                            if (pickup.weekday == 6) {
                                return (
                                    <Pickup key={pickup.id} pickup={pickup} del={deletePickup} />
                                )
                            }
                        })
                    }
                </PickupsContainer>
            </div>
            <AddPickupButton
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(true)}
            >
                Add Pickup
            </AddPickupButton>
            <PickupModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                    <h4 id="modal-label">Create new Pickup</h4>
                    <form onSubmit={createPickup}>
                        <label className="form-label" htmlFor="type">Select type: </label>
                        <select className="form-select" type="type" value={type} onChange={e => setType(e.target.value)} required >
                            <option hidden></option>
                            <option>Plastic</option>
                            <option>Organic</option>
                            <option>Paper</option>
                            <option>Glass</option>
                            <option>Metal</option>
                            <option>Clothes</option>
                            <option>Light Bulbs</option>
                            <option>Batteries</option>
                            <option>E-Waste</option>
                        </select><br />
                        <label className="form-label" htmlFor="weekday">Select day: </label>
                        <select className="form-select" type="weekday" value={weekday} onChange={e => setWeekday(e.target.value)} required >
                            <option hidden></option>
                            <option value={0}>Monday</option>
                            <option value={1}>Tuesday</option>
                            <option value={2}>Wednesday</option>
                            <option value={3}>Thursday</option>
                            <option value={4}>Friday</option>
                            <option value={5}>Saturday</option>
                            <option value={6}>Sunday</option>
                        </select><br />
                        <label className="form-label" htmlFor="start">From: </label>
                        <input className="form-control" type="time" value={start} onChange={e => setStart(e.target.value)} required /><br />
                        <label className="form-label" htmlFor="end">To: </label>
                        <input className="form-control" type="time" value={end} onChange={e => setEnd(e.target.value)} required /><br />
                        <input className="btn btn-primary" type="submit" value="Confirm" />
                    </form>
                </div>
            </PickupModal>
        </div>
    )
}

export default Calendar;