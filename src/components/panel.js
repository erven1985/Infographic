import React, {Component, Fragment} from 'react';


class Panel extends Component {
	
	render() {
		return(
				<Fragment>
					<div className="sidebar-panel" style={{borderColor:this.props.color, color: this.props.color}}>
						
					</div>
				</Fragment>
			)
	}
}

export default Panel;