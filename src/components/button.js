import React, {Component, Fragment} from 'react';

class Button extends Component {
	

	onClick(e) {
		let button = e.target;
		let panels = document.getElementsByClassName('sidebar-panel');
		for(let i=0; i < panels.length; i++){
			panels[i].classList.remove('active')
		}
		button.nextSibling.classList.add('active')
	}	

	render() {
		return(
				<Fragment>
					<button className="sidebar-btn" onClick={this.onClick} style={{borderColor:this.props.color, color: this.props.color}}>{
					this.props.name
				}</button>
				<div className="sidebar-panel" style={{borderColor:this.props.color, color: this.props.color}}></div>
				</Fragment>
			)
	}
}

export default Button;