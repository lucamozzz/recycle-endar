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
`;

//Pickup blue-bordered container
export const SinglePickupContainer = styled.div`
    border: 4px solid #0d6efd;
    border-radius: 10px;
    margin: 1em;
    min-width: 12em;
    padding-right: 0.1em;
    padding-top: 0.4em;
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
    width: 400px;
    z-index: 1040;
    top: 100px;
    left: 25px;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 17px;
`;

export const AddPickupButton = styled.button`
    font-size: 1em;
    width: 100%;
    max-width: 20em;
    margin: 1em 0;
`;