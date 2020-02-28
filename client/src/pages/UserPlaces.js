import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const TEMP_PLACES = [
    // {
    //     id: 'p1',
    //     title: 'Eagle River',
    //     description: 'Easy access and beautiful river',
    //     image: 'https://www.coloradoflyfishingreports.com/co-fly-fishing-blog/wp-content/uploads/2015/03/CO_Rainbow_Trout_March-1024x593.jpg',
    //     address: 'Gypsum, CO',
    //     creator: 'u1',
    //     location: {
    //         lat: 39.653170,
    //         lng: -106.913686
    //     }
    // },
    // {
    //     id: 'p2',
    //     title: 'Eagle River',
    //     description: 'Easy access and beautiful river',
    //     image: 'https://www.coloradoanglingcompany.com/wp-content/uploads/2018/03/Eagle-River-Trout-Spring-2018.jpg',
    //     address: 'Gypsum, CO',
    //     creator: 'u2',
    //     location: {
    //         lat: 39.653170,
    //         lng: -106.913686
    //     }
    // },
    // {
    //     id: 'p3',
    //     title: 'Eagle River',
    //     description: 'Easy access and beautiful river',
    //     image: 'https://eagleoutside.com/wp-content/uploads/2015/06/Eagle-River-2.jpg',
    //     address: 'Gypsum, CO',
    //     creator: 'u3',
    //     location: {
    //         lat: 39.653170,
    //         lng: -106.913686
    //     }
    // }
]

const UserPlaces = () => {
    const userId = useParams().userid;
    const loadedPlaces = TEMP_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;