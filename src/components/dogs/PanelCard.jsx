'use client';
import { useState } from 'react';
import CardDog from './CardDog';

const PanelCard = () => {
    const [likedDogs, setLikedDogs] = useState([]);

    const handleLikeClick = (dogId) => {
        setLikedDogs((prevLikedDogs) =>
            prevLikedDogs.includes(dogId)
                ? prevLikedDogs.filter((id) => id !== dogId)
                : [...prevLikedDogs, dogId]
        );
    };

    const dogs = [
        { id: 1, name: 'Olivier', image: '/perro1.jpeg', age: 20, sexo: "Macho", esterilizado: true },
        { id: 2, name: 'Mathew', image: '/perro2.jpg', age: 19, sexo: "Macho", esterilizado: true },
        { id: 3, name: 'Antonik', image: '/images.jpg', age: 19, sexo: "Hembra", esterilizado: true },
        { id: 4, name: 'Nimbus', image: '/perro4.jpg', age: 8, sexo: "Macho", esterilizado: false },
        { id: 5, name: 'Fredo', image: '/perro5.jpeg', age: 4, sexo: 'Hembra', esterilizado: true },
        { id: 6, name: 'Bella', image: '/perro1.jpeg', age: 3, sexo: 'Hembra', esterilizado: true },
        { id: 7, name: 'Charlie', image: '/perro1.jpeg', age: 5, sexo: 'Macho', esterilizado: false },
        { id: 8, name: 'Max', image: '/perro1.jpeg', age: 2, sexo: 'Macho', esterilizado: true },
        { id: 9, name: 'Luna', image: '/perro1.jpeg', age: 1, sexo: 'Hembra', esterilizado: false },
        { id: 10, name: 'Rocky', image: '/perro1.jpeg', age: 6, sexo: 'Macho', esterilizado: true },
        { id: 11, name: 'Lucy', image: '/perro1.jpeg', age: 4, sexo: 'Hembra', esterilizado: true },
        { id: 12, name: 'Daisy', image: '/perro1.jpeg', age: 7, sexo: 'Hembra', esterilizado: false },
        { id: 13, name: 'Bailey', image: '/perro1.jpeg', age: 3, sexo: 'Macho', esterilizado: true },
        { id: 14, name: 'Molly', image: '/perro1.jpeg', age: 5, sexo: 'Hembra', esterilizado: true },
        { id: 15, name: 'Buddy', image: '/perro1.jpeg', age: 2, sexo: 'Macho', esterilizado: false },
        { id: 16, name: 'Maggie', image: '/perro1.jpeg', age: 6, sexo: 'Hembra', esterilizado: true },
        { id: 17, name: 'Oscar', image: '/perro1.jpeg', age: 4, sexo: 'Macho', esterilizado: true },
        { id: 18, name: 'Chloe', image: '/perro1.jpeg', age: 1, sexo: 'Hembra', esterilizado: false },
        { id: 19, name: 'Toby', image: '/perro1.jpeg', age: 3, sexo: 'Macho', esterilizado: true },
        { id: 20, name: 'Coco', image: '/perro1.jpeg', age: 5, sexo: 'Hembra', esterilizado: true }
        // Agrega más perros aquí según sea necesario
    ];

    return (
        <div className="flex justify-center p-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-max items-start">
                {dogs.map((dog) => (
                    <CardDog
                        key={dog.id}
                        dog={dog}
                        isLiked={likedDogs.includes(dog.id)}
                        onLikeClick={handleLikeClick}
                    />
                ))}
            </div>
        </div>
    );
};


export default PanelCard;
