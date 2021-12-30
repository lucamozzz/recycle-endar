import React, { useState, useEffect } from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Pickup from './Pickup';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    `;

const PickupModal = styled(Modal)`
    position: fixed;
    width: 400px;
    z-index: 1040;
    top: 100px;
    left: 25px;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    `;

export const Main = () => {
    const [pickups, setPickups] = useState([]);
    const [show, setShow] = useState(false);

    //Pickup parameters
    const [type, setType] = useState("");
    const [weekday, setWeekday] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const renderBackdrop = (props) => <Backdrop {...props} />;

    useEffect(async () => {
        try {
            const data = await axios(`/api/pickups`);
            setPickups(data.data);
        } catch (error) {
            console.error(error);
        }
    }, [show]);

    const createPickup = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/pickups`,
                {
                    type: type,
                    weekday: weekday,
                    start: start,
                    end: end,
                    user_id: 1,
                });
            setShow(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}
            >
                +
            </button>
            <h1>Monday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 0) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Tuesday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 1) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Wednesday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 2) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Thursday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 3) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Friday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 4) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Saturday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 5) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <h1>Sunday</h1>
            {
                pickups.map(pickup => {
                    if (pickup.weekday == 6) {
                        return (
                            <Pickup key={pickup.id} pickup={pickup} />
                        )
                    }
                })
            }
            <PickupModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                    <h4 id="modal-label">Create new Pickup</h4>
                    <form onSubmit={createPickup}>
                        <label htmlFor="type">Select type: </label>
                        <select type="type" value={type} onChange={e => setType(e.target.value)} required >
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
                        <label htmlFor="weekday">Select day: </label>
                        <select type="weekday" value={weekday} onChange={e => setWeekday(e.target.value)} required >
                            <option hidden></option>
                            <option value={0}>Monday</option>
                            <option value={1}>Tuesday</option>
                            <option value={2}>Wednesday</option>
                            <option value={3}>Thursday</option>
                            <option value={4}>Friday</option>
                            <option value={5}>Saturday</option>
                            <option value={6}>Sunday</option>
                        </select><br />
                        <label htmlFor="start">From: </label>
                        <input type="time" value={start} onChange={e => setStart(e.target.value)} required />
                        <label htmlFor="end">To: </label>
                        <input type="time" value={end} onChange={e => setEnd(e.target.value)} required /><br />
                        <input type="submit" value="Confirm" />
                    </form>
                </div>
            </PickupModal>
        </div>
    )
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
