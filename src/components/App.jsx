import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: 'bradtraversy',
            userData: [],
            userRepos: [],
            perPage: 5
        }

    }

    //Get user data from gitHub
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userName: null});
                alert(err);
            }.bind(this)
        });
    }


    componentDidMount() {
        this.getUserData();
    }


    render(){
        return(
            <div>
             <Profile userData={this.state.userData}/>
            </div>
        )
    }

}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string

};

App.defaultProps ={
    clientId: 'aa5d4acff1f7e803e232',
    clientSecret: 'f71e7464794bb3434032cdd2a24a1284fea8eb9c'
};
export default App;