import React, {Component} from 'react'
import './App.css'

import AddDogForm from './components/AddDogForm'
import AdoptableDogs from './components/AdoptableDogs'
import FavoriteDogs from './components/FavoriteDogs'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

export default class App extends Component{

    state = {
        dogs: [],
        favoriteDogs: []
    }

    componentDidMount(){
        fetch('https://dogs-backend.herokuapp.com/dogs')
            .then(response => response.json())
            .then(dogs => this.setState({dogs}))
    }

    addDog(dog){
        this.setState({favoriteDogs: [...this.state.favoriteDogs, dog]})
    }

    render(){
        return (
            <div className ='App'>
                <Header />
                <SearchBar />
                <AddDogForm />
                <AdoptableDogs dogs={this.state.dogs} addDog={this.addDog} />
                <FavoriteDogs favoriteDogs={this.state.favoriteDogs} />
            </div>
        )
    }
}
