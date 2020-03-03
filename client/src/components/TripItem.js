import React, { useState, useContext } from 'react';
import Card from './UIElements/Card';
import Button from './FormElements/Button';
import Modal from './UIElements/Modal';
import Map from './UIElements/Map';
import { AuthContext } from './context/auth-context'
import './TripItem.css'

const TripItem = ({ image, title, address, description, id, coordinates }) => {
    const auth = useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMap = () => setShowMap(true);
    const closeMap = () => setShowMap(false);
    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);
    const confirmDeleteWarningHandler = () => {
        console.log('Deleting...')
        setShowConfirmModal(false);
    };

    return (
        <>
            <Modal
                show={showMap}
                onCancel={closeMap}
                header={address}
                contentClass='trip-item__modal-content'
                footerClass='trip-item__modal-actions'
                footer={<Button onClick={closeMap} >CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map
                        center={coordinates}
                        zoom={16}
                    />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header='Confirm Delete'
                footerClass='trip-item__modal-actions'
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteWarningHandler}>DELETE</Button>
                    </>
                }
            >
                <p>You are deleting this trip. Click DELETE to confirm.</p>
            </Modal>
            <li className='trip-item'>
                <Card className='trip-item__content'>
                    <div className='trip-item__image'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='trip-item__info'>
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='trip-item__actions'>
                        <Button inverse onClick={openMap}>VIEW ON MAP</Button>
                        {auth.isLoggedIn && <Button to={`/trips/${id}`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </>
    )
}

export default TripItem;