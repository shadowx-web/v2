import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from '../hoc/loader.js';

class Order extends Component {

	constructor(){
		super();
		this.state={
			b:[],
			c:''
		}
	}
	componentWillMount() {
		this.props.dispatch({ type: 'INCREMENT' });

		console.log(this.props);
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
		.then(res => {
		 // console.log(res.status);
		//  this.state.b= res.data;
				
										
			 this.setState({b:res.data});
		})
	}
	orderList() {
		const orderdata = this.state.b;
		 return  orderdata.map((row,index) => {
										return(<tr key={index}>
														<td><Link to={`/orderdetails/${row.id}`}> {row.id} </Link></td>
														<td><Link to="/orderdetails">{row.userId}</Link></td>
														<td><Link to={`/orderdetails/${row.title}`}> {row.title} </Link></td>
													 </tr>
												)
			}) 
	}

	render() {
		return (
						 <div>
						 <table border="1" width="70%">
								<tbody>
									<tr>
										<td>sn</td>
										<td>item name</td>
										<td>Ammount</td>
									</tr>
									{this.orderList()}
								</tbody>
						 </table>
						 </div>
		 );
	}
}	
function mapStateToProps(state) {
	console.log(state);
	return {
		userData: state.userData
	}
}
export default connect(mapStateToProps)(Order);
//export default Loader(Order);