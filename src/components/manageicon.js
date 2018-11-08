import React, {Component, Fragment} from 'react';

class ManageIcon extends Component {
	

	getDarkImage(e)	{
		let source = e.target.src.split('.png').join('_d.png')
		e.target.src = source;
	}

	getLightImage(e) {
		let source = e.target.src.split('_d.png').join('.png')
		e.target.src = source;
	}


	render() {
		return(
				<img src={this.props.src} 
							id={this.props.id} 
							className={this.props.cls} 
							onMouseEnter={this.getDarkImage}
    					onMouseLeave={this.getLightImage}
				/>
			)
	}
}

export default ManageIcon;