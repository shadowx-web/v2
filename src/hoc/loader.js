import React from 'react';

export default (Componentreceived)=>{
	  
	  class loader extends React.Component {
		render() {
			console.log(this.props);
			return (
				<Componentreceived {...this.props}/>
			);
		}
	}
	return loader
}