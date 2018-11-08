import React, {Component} from 'react';

class Cover extends Component {
	
	render() {
		return(
					<div id="cover" onClick={this.props.onClick}>
						<div id="close" onClick={this.props.onClick}>&#x2715;</div>
					</div>
			)
	}
}

export default Cover;