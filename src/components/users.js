import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from '../hoc/loader.js';

class Users extends Component {

  constructor(){
    super();
    this.state={
      b:[],
      searchText:''
    }
    this.serach=this.serach.bind(this);
    this.userList=this.userList.bind(this);
    this.loader=this.loader.bind(this);
  }
  componentWillMount() {
    
    this.setState({ b:this.props.userList });
    console.log(this.props);
  }
  loader(){
    const condition = this.state.b;
    //console.log(condition);
    return <div className="card-image"><img src={condition.length > 0 ? '' : 'https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif'}/></div>
  }
  userList(){

                    const list  = this.state.b;
                      return list.filter(row => {
                       return row.name.first.includes(this.state.searchText);

                      }).map((row,index)=>{

                        return (<tr key={index}>
                                    <td><Link to={`/customerReview/${row.id.value}`}>{row.name.first}</Link></td>
                                    <td><img alt ='img' src={row.picture.thumbnail}/></td>
                                    <td>{row.email}</td>
                                    <td>{row.gender}</td>
                                    <td><a href={`/customerReview/${row.id.value}`}>details</a></td>
                                </tr>
                                )            })
  }
  serach(e){

    //console.log(e.target.value);
    this.setState({searchText:e.target.value});
    //console.log(this.state.searchText);
  }
  render() {
  	    return (
    	<div className="row">
          <table border="1" width="70%">
              <tbody>
              <tr><td col-span="3"> <input className="form-control" type="text"  onChange={this.serach}/></td></tr>
              <tr><th>Name</th><th>Img</th><th>Email</th><th>age</th><th>Phone</th></tr>
              {this.loader()}
              {this.userList()}
              </tbody>
          </table>
      </div>
     );
	}
}	
export default Loader(Users);