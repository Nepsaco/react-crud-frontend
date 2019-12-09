import React from 'react'
import DogCard from './DogCard'

export default function AdoptableDogs(props){
    const {dogs} = props
    const adoptableDogs = dogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })

    return (
        <div className='dogs'>
            <h1 className='header'>Adoptable Dogs</h1>
            <div className='adoptable-dogs'>
                {adoptableDogs}
            </div>
        </div>
    )
}
