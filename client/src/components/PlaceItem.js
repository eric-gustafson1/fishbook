import React, { useState } from 'react';
import Card from '../components/UIElements/Card';
import Button from '../components/FormElements/Button';
import Modal from '../components/UIElements/Modal';
import Map from '../components/UIElements/Map';
import './PlaceItem.css'

const PlaceItem = ({ image, title, address, description, id, coordinates }) => {
    const [showMap, setShowMap] = useState(false);

    const openMap = () => setShowMap(true);
    const closeMap = () => setShowMap(false);

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
                        <Button to={`/places/${id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </>
    )
}

export default PlaceItem;