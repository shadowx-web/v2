import React, { Component } from 'react';

import { Link } from "react-router-dom";
export default class Order extends Component {

		var2 () {
			return 5555555;

		}



	render() {
console.log(this.props.match.params);

		const variable = [{"name":"sandeep"},{"name":"sharvari"}]; //aaray
		


		return (<div>
					<Link to={`/users`}>Back to </Link> 
					<h1>
						{variable[1].name} {this.var2()} |{this.props.match.params.id}
					 </h1>
				</div>
				)

	}

}
