import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class OrderDetails extends Component {
render(){
console.log(this.props.storeData);
const {match} = this.props;

	return(<div>
			<Link to='/order'>Back</Link>
				<h1>Received data  = {match.params.urlValue}|| {this.props.storeData.add_data.text}</h1>
			</div>
		)
}
}
//export default OrderDetails;

const mapStateToProps = (state)=>{
	return {
		storeData:state
	}

}


export default connect(mapStateToProps)(OrderDetails)