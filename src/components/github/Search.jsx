import React, {Component} from 'react';

class Search extends Component{

    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value;
        if(!username){
            alert('Please enter a username');
            return;
        }
            this.props.onFormSubmit(username);
            this.refs.username.value= '';
    }

    render(){
        const {repo} = this.props;
        return(
           <div>
               <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Search Github Users</label>
                   <input type="text" ref="username" className="form-control" />
               </form>
               <br />
           </div>
        )
    }

}


export default Search;