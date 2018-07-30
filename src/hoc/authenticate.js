import React from 'react';


export default function (ComposedComponents,rest) {

class authenticate extends React.Component {
	componentWillMount() {
		const {history} = this.props;
	console.log(this.props);
		//console.log(rest);
		let userId = true;
		if(!userId) { 
				history.push('/login');
	        }
	}
	render() {
		
		return (<ComposedComponents {...this.props} userList={rest}/>);
	}
	
}
return authenticate;
}