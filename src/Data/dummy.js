import homeImage from '../Assets/home.jpg';
import facilitiesImg from '../Assets/facilities.jpg';
import exploreRooms from '../Assets/explorerooms.jpg';
import beachImage from '../Assets/beach.jpg';

export const navData = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Facilities',
        link: '/facilities',
    },
    {
        name: 'Rooms',
        link: '/rooms',
    },
    {
        name: 'Contact-us',
        link: '/contact',
    }
]

export const images = {
    homeImage,
    facilitiesImg,
    exploreRooms,
    beachImage,
}

export const facilities = [
    {
        name: 'Accomodation',
        img: exploreRooms
    },
    {
        name: 'Restaurant',
        img: exploreRooms
    },
    {
        name: 'Bar',
        img: exploreRooms
    },
    {
        name: 'Hall',
        img: exploreRooms
    }    
]

export const roomsData = [
    {
        name: 'Single Room',
        price: '5000',
        roomDesc: 'We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.',
        images: [
            homeImage,
            facilitiesImg,
            exploreRooms,
            beachImage,
        ]
    },
    {
        name: 'Double Room',
        price: '7000',
        roomDesc: 'We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.',
        images: [
            facilitiesImg,
            exploreRooms,
            beachImage,
            homeImage,
        ]
    },
    {
        name: 'Twin Room',
        price: '6500',
        roomDesc: 'We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.',
        images: [
            exploreRooms,
            homeImage,
            facilitiesImg,
            beachImage,
        ]
    },
    {
        name: 'Hall',
        price: '70000',
        roomDesc: 'We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.',
        images: [
            exploreRooms,
            homeImage,
            facilitiesImg,
            beachImage,
        ],
        isHall: true,
    }
]