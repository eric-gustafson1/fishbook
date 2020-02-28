import React, { useState, useContext } from 'react';
import Card from '../components/UIElements/Card';
import Button from '../components/FormElements/Button';
import Modal from '../components/UIElements/Modal';
import Map from '../components/UIElements/Map';
import { AuthContext } from '../components/context/auth-context'
import './PlaceItem.css'

const PlaceItem = ({ image, title, address, description, id, coordinates }) => {
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
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
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
                footerClass='place-item__modal-actions'
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteWarningHandler}>DELETE</Button>
                    </>
                }
            >
                <p>You are deleting this trip. Click DELETE to confirm.</p>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMap}>VIEW ON MAP</Button>
                        {auth.isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </>
    )
}

export default PlaceItem;