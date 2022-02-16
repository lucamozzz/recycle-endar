import styled from 'styled-components';
import Modal from 'react-overlays/Modal';

export const AppContainer = styled.div`
    margin: auto;
    padding-top: 8.5em;
    @media (max-width: 768px) {
        padding-top: 6em;
    }
`;

export const FormContainer = styled.div`
    margin: auto;
    max-width: 400px;
    padding: 1em;
`;

export const HorizontalContainer = styled.div`
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: var(--bs-gutter-x,-1.5rem);
    margin-left: var(--bs-gutter-x,-1.5rem);
    margin-bottom: 1em;
    &::-webkit-scrollbar {
       display: none;
    }
`;

//Pickup blue-bordered container
export const SingleContainer = styled.div`
    border-radius: 10px;
    margin: 1em;
    margin-right: -0.5em;
    min-width: 15em;
    width: 15em;
    padding-right: 0.1em;
    padding-top: 0.4em;
    display: flex;
    justify-content: space-between;
`;

//Pickup blue-bordered container
export const SingleCalendarContainer = styled.button`
    background: white;
    border-radius: 10px;
    border: 3px solid black;
    margin: 1em;
    min-width: 12em;
    margin-right: -0.5em;
    padding: 0 0.5em;
    padding-top: 0.3em;
    display: flex;
    justify-content: space-between;
`;

export const CloseButton = styled.button`
    float: right;
    position: relative;
    bottom: 1.1rem;
    left: 5.8rem;
    display: none;
    border: none;
    background-color: red;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 20px;
    line-height: 0;
    padding-bottom: 3.5px;
    padding-left: 5px;
    font-size: 23px;
    ${SingleContainer}:hover & {
        display: unset;
    }
    &:before{
        content: '-';
    }
`;

//Shadow effect when modal appears
export const Backdrop = styled('div')`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
`;

//Modal style
export const PickupModal = styled(Modal)`
    position: fixed;
    width: 90vw;
    max-width: 30em;
    z-index: 1040;
    top: 140px;
    right: 5vw;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    padding: 20px;
    border-radius: 17px;
`;

export const AddPickupButton = styled.button`
    background-color: white;
    position: fixed;
    top: 2em;
    right: 2em;
    z-index: 1;
    border-radius: 20px;
    width: 5em;
    border: 2px solid black;
    color: black;
    font-size: 1.1em;
    box-shadow: none;
    @media (max-width: 768px) {
        top: 1.3em;
        padding: 0.25em;
        width: 3em;
        right: 0.7em;
    }
    &:hover {
        border-color: black;
        color: white;
        background-color: #d3d3d3;
        box-shadow: none;
    }
    &:focus {
        border-color: black;
        color: black;
        background-color: white;
        box-shadow: none;
    }
`;

export const AddCalendarButton = styled.button`
    background-color: white;
    position: fixed;
    top: 2em;
    right: 8em;
    z-index: 1;
    border-radius: 20px;
    width: 5em;
    border: 2px solid black;
    color: black;
    font-size: 1.1em;
    box-shadow: none;
    @media (max-width: 768px) {
        top: 1.3em;
        padding: 0.25em;
        width: 3em;
        right: 4.2em;
    }
    &:hover {
        border-color: black;
        color: white;
        background-color: #d3d3d3;
        box-shadow: none;
    }
    &:focus {
        border-color: black;
        color: black;
        background-color: white;
        box-shadow: none;
    }
`;

export const DeleteCalendarButton = styled.button`
    background-color: white;
    position: fixed;
    bottom: 2em;
    right: 2em;
    z-index: 1;
    border-radius: 20px;
    width: 5em;
    border: 2px solid black;
    color: black;
    font-size: 1.1em;
    box-shadow: none;
    @media (max-width: 768px) {
        bottom: 1.3em;
        right: 0.8em
        padding: 0.25em;
        width: 4em;
    }
    &:hover {
        border-color: black;
        color: white;
        background-color: #d3d3d3;
        box-shadow: none;
    }
    &:focus {
        border-color: black;
        color: black;
        background-color: white;
        box-shadow: none;
    }
`;

export const EditCalendarButton = styled.button`
    background-color: white;
    position: fixed;
    bottom: 2em;
    right: 8em;
    z-index: 1;
    border-radius: 20px;
    width: 5em;
    border: 2px solid black;
    color: black;
    font-size: 1.1em;
    box-shadow: none;
    @media (max-width: 768px) {
        bottom: 1.3em;
        right: 4.2em
        padding: 0.25em;
        width: 4em;
    }
    &:hover {
        border-color: black;
        color: white;
        background-color: #d3d3d3;
        box-shadow: none;
    }
    &:focus {
        border-color: black;
        color: black;
        background-color: white;
        box-shadow: none;
    }
`;

export const Searchbar = styled.input`
    display: block;
    border-radius: 20px;
    width: 14em;
    border: 1px solid black;
    color: black;
    font-style: italic;
    padding-left: 0.4em;
    position: fixed;
    right: 2em;
    top: 8em;
    @media (max-width: 968px) {
        display: none;
    }
    &:focus-visible {
        outline: none;
    }
`

export const PickupImage = styled.div`
    width: 3em;
    height: 4em;
    margin-top: 3px;
    padding: 32px;
`