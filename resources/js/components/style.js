import styled from 'styled-components';
import Modal from 'react-overlays/Modal';

export const AppContainer = styled.div`
    margin: auto;
`;

export const FormContainer = styled.div`
    margin: auto;
    max-width: 400px;
    padding: 1em;
`;

export const PickupsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: var(--bs-gutter-x,-1.5rem);
    margin-left: var(--bs-gutter-x,-1.5rem);
    margin-bottom: 1em;
    ${'' /* &::-webkit-scrollbar{
        display: none;
    } */}
`;

//Pickup blue-bordered container
export const SinglePickupContainer = styled.div`
    ${'' /* border: 4px solid #0d6efd; */}
    border-radius: 10px;
    margin: 1em;
    min-width: 12em;
    max-width: 22vw;
    padding-right: 0.1em;
    padding-top: 0.4em;
`;

export const CloseButton = styled.button`
    float: right;
    position: relative;
    bottom: 1.1rem;
    left: 0.7rem;
    display: none;
    border: none;
    background-color: red;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 20px;
    line-height: 0;
    ${SinglePickupContainer}:hover & {
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
    top: 120px;
    left: 5vw;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    padding: 20px;
    border-radius: 17px;
`;

export const AddPickupButton = styled.button`
    background-color: white;
    margin: 2.3em;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    border-radius: 20px;
    width: 18vw;
    border: 3px solid black;
    color: black;
    font-weight: bold;
    @media (max-width: 768px) {
        margin: 1.3em;
    }
    &:hover {
        border-color: black;
        color: white;
        background-color: black;
    }
`;