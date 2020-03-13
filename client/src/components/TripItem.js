import React, { useState, useContext } from 'react';
import Card from './UIElements/Card';
import Button from './FormElements/Button';
import Modal from './UIElements/Modal';
import Map from './UIElements/Map';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';
import { AuthContext } from './context/auth-context'
import moment from 'moment';
import './TripItem.css'

const TripItem = ({ image, title, address, description, weather, flies, id, creatorId, coordinates, onDelete, date }) => {
    const auth = useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openMap = () => setShowMap(true);
    const closeMap = () => setShowMap(false);
    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);

    const confirmDeleteWarningHandler = async () => {
        setShowConfirmModal(false);

        try {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            });
            onDelete(id);
        } catch (err) {
            setIsLoading(false);
            setError(err.message);

        }
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
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
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className='trip-item__image'>
                        {/* <img className='center' src={`${process.env.REACT_APP_ASSET_URL}/${image}`} alt={title} /> */}
                        <img className='center' src={`${process.env.REACT_APP_S3_URL}/${image}`} alt={title} />
                    </div>
                    <div className='trip-item__info'>
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <h4>{moment(new Date(date)).add(1, 'days').format('dddd, MMMM Do YYYY')}</h4>
                        {auth.userId && <p><b>Conditions: </b>{weather}</p>}
                        {auth.userId && <p><b>Description: </b>{description}</p>}
                        {auth.userId && <p><b>Flies Used: </b>{flies}</p>}
                    </div>
                    <div className='trip-item__actions'>
                        <Button inverse onClick={openMap}>VIEW ON MAP</Button>
                        {auth.userId === creatorId && <Button to={`/trips/${id}`}>EDIT</Button>}
                        {auth.userId === creatorId && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </>
    )
}

export default TripItem;