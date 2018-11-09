import React, {Component, Fragment} from 'react';


class BarIcon extends Component {
	
	render() {
		return(
				<Fragment>
					<div className={`shb_icon_menu icons ${this.props.cls}`} id={this.props.id}>
	          <img src={this.props.image} alt={this.props.name} />
	            <div className="shb_title_icon">
	            	{	this.props.name }
	            </div>
	        </div>
				</Fragment>
			)
	}
}

export default BarIcon;