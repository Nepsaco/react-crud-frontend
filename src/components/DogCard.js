import React from 'react'

export default function DogCard(props){
    return(
        <div className='dog-card'>
            <img src={props.dog.image} alt={props.dog.name} />
            <div className='dog-specs'>
                <h4><b>{props.dog.name}</b></h4>
                <p>{props.dog.breed}</p>
            </div>
        </div>
    )

}
