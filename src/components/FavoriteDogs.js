import React from 'react'

export default function FavoriteDogs(props){
    const favoriteDogs = props.favoriteDogs.map(dog => {
        return <dogCard key={dog.id} dog={dog} />
    })
    return (
        <div className='dogs'>
            <h1 className='header'>Favorite Dogs</h1>
            <div className='adoptable-dogs'>
                {favoriteDogs}
            </div>
        </div>
    )
}
