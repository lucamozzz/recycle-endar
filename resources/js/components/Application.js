import React, { useState, useEffect } from 'react';
import { Backdrop, PickupModal, AddPickupButton, Searchbar, HorizontalContainer, SingleCalendarContainer, AddCalendarButton, DeleteCalendarButton, EditCalendarButton } from './style';
import Wday from './Wday';
import axios from 'axios';
import Calendar from './Calendar';

const wdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

export const Application = ({ loggedUser }) => {
    //Pickup parameters
    const [type, setType] = useState("");
    const [weekday, setWeekday] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("Default text");
    const [token, setToken] = useState(loggedUser.token);
    const [userId, setUserId] = useState(loggedUser.user.id);
    const [selectedCalendar, setSelectedCalendar] = useState();

    const loadCalendars = async () => {
        try {
            const data = await axios(`/api/calendars`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCalendars(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    //Calendars list
    const [calendars, setCalendars] = useState([]);

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

    //Displayed pickups
    const [visiblePickups, setVisiblePickups] = useState([])
    useEffect(() => {
        setVisiblePickups(
            pickups.filter(
                pickup => pickup.calendar_id == selectedCalendar
            )
        )
    }, [pickups, selectedCalendar])

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
                    calendar_id: selectedCalendar
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

    const createCalendar = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/calendars`,
                {
                    name: name,
                    description: description,
                    user_id: userId,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setShowCalendarModal(false);
            setCount(count + 1);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteCalendar = async (id) => {
        if (calendars.length == 1) return;
        try {
            await axios.delete(`api/calendars/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCount(count - 1);
        } catch (error) {
            console.error(error);
        }
    }

    const editCalendar = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`api/calendars/${selectedCalendar}`,
                {
                    name: name,
                    description: description,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setCount(count - 1);
            setShowEditCalendarModal(false);
        } catch (error) {
            console.error(error);
        }
    }

    //Create Pickup modal show setting
    const [show, setShow] = useState(false);
    //Create Calendar modal show setting
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    //Edit calendar modal show setting
    const [showEditCalendarModal, setShowEditCalendarModal] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    //Reload pickups everytime the count value changes
    useEffect(loadPickups,
        [count]);

    //Reload pickups everytime the count value changes
    useEffect(loadCalendars,
        [count]);

    //Imposta il primo calendario della lista come selezionato
    useEffect(async () => {
        setSelectedCalendar(calendars[0].id)
    }, [calendars]);

    useEffect(
        () => {
            setVisiblePickups(
                pickups.filter(
                    pickup => pickup.calendar_id == selectedCalendar
                )
            )
        }, [selectedCalendar]
    );

    return (
        <div className='container-md' style={{ marginBottom: '4em' }}>
            {/* <Searchbar type="text" onChange={search} placeholder='Plastic, Glass, ...' /> */}
            <AddPickupButton
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(true)}
            >
                ⏱️
            </AddPickupButton>
            <AddCalendarButton
                type="button"
                className="btn btn-primary"
                onClick={() => setShowCalendarModal(true)}
            >
                📅
            </AddCalendarButton>
            <DeleteCalendarButton
                type="button"
                className="btn btn-primary"
                onClick={() => deleteCalendar(selectedCalendar)}
            >
                🗑️
            </DeleteCalendarButton>
            <EditCalendarButton
                type="button"
                className="btn btn-primary"
                onClick={() => setShowEditCalendarModal(true)}
            >
                ✏️
            </EditCalendarButton>
            <div className="container">
                <HorizontalContainer>
                    {
                        calendars.map(
                            (calendar) => {
                                if (calendar.id == selectedCalendar) {
                                    return (
                                        <SingleCalendarContainer
                                            key={calendars.indexOf(calendar)}
                                        >
                                            <Calendar
                                                key={calendars.indexOf(calendar)}
                                                calendar={calendar}
                                                del={deleteCalendar}
                                            />
                                        </SingleCalendarContainer>
                                    )
                                } else {
                                    return (
                                        <SingleCalendarContainer
                                            key={calendars.indexOf(calendar)}
                                            style={{ opacity: '50%' }}
                                            onClick={async () => setSelectedCalendar(calendar.id)}
                                        >
                                            <Calendar
                                                key={calendars.indexOf(calendar)}
                                                calendar={calendar}
                                                del={deleteCalendar}
                                            />
                                        </SingleCalendarContainer>
                                    )
                                }
                            }
                        )
                    }
                </HorizontalContainer>
            </div>
            <div className='container'>
                {
                    wdays.map(
                        (wday) => {
                            return (
                                <Wday
                                    key={wdays.indexOf(wday)}
                                    day={wday}
                                    pickups={
                                        visiblePickups
                                            .filter(
                                                pickup => pickup.weekday == wdays.indexOf(wday)
                                            )
                                    }
                                    del={deletePickup}
                                />
                            )
                        }
                    )
                }
            </div>
            <PickupModal
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                    <h4 id="modal-label">Create a new Pickup</h4>
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
            <PickupModal
                show={showCalendarModal}
                onHide={() => showCalendarModal(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                    <h4 id="modal-label">Create a new Calendar</h4>
                    <form onSubmit={createCalendar}>
                        <label className="form-label" htmlFor="type">Insert name: </label>
                        <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} required /><br />
                        <input className="btn btn-primary" type="submit" value="Confirm" />
                    </form>
                </div>
            </PickupModal>
            <PickupModal
                show={showEditCalendarModal}
                onHide={() => setShowEditCalendarModal(false)}
                renderBackdrop={renderBackdrop}
                aria-labelledby="modal-label"
            >
                <div>
                    <h4 id="modal-label">Edit Calendar</h4>
                    <form onSubmit={editCalendar}>
                        <label className="form-label" htmlFor="type">Edit name: </label>
                        <input className="form-control" type="text" onChange={e => setName(e.target.value)} required /><br />
                        <label className="form-label" htmlFor="type">Edit description: </label>
                        <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} required /><br />
                        <input className="btn btn-primary" type="submit" value="Confirm" />
                    </form>
                </div>
            </PickupModal>
        </div>
    )
}

export default Application;