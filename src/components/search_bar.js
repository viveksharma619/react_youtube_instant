import React,{ Component} from 'react';

class SearchBar extends Component {
    //only class based components have states
    //constructor is called automatically whenevere a new instance of clas is created, it initilizes states and variables 
    constructor(props){
        //super calls the parent fucntion
        super(props);
        
        
        this.state = { term: '' };
    }
    render(){
        return (
            <div className="search-bar">
                <input 
                value ={this.state.term}
                onChange = { event => this.onInputChange(event.target.value) } />
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({ term });
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;