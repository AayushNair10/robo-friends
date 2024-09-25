import React,{ Component } from 'react';
import Cardlist from './cards/Cardlist';
import Searchlist from './functions/Searchlist';
import Scroll from "./functions/Scroll"
import ErrorBoundary from './functions/ErrorBoundary';
class App extends Component{
    constructor(){
        super();
        this.state = {
            Robots:[],
            Searchfield: ''
    }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json();
        })
        .then((users)=>{
            this.setState({Robots:users})
        })
    }
    Onsearchchange=(event)=>{
        this.setState({Searchfield: event.target.value})
        const filterr=this.state.Robots.filter(Robots=>{
            return Robots.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase());
        }
        )
        console.log(filterr);
    }
    render(){
        const filterr=this.state.Robots.filter(Robots=>{
            return Robots.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase());
        }
        )
        if(this.state.Robots.length === 0){
            return(
                <h1>Loading</h1>
            )
        }
        else{
            return(       
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchlist SearchChange={this.Onsearchchange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist Robot={filterr}/>
                        </ErrorBoundary>
                    </Scroll>
                </div> 
            );
        }
    }
}
export default App;