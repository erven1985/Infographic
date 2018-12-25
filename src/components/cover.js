import React, {Component} from 'react';

class Cover extends Component {
	
	render() {
		return(
					<div id="cover" onClick={this.props.onClick}>
						<div id="close" onClick={this.props.onClick}>&#x2715;</div>
							<div className="circle_content">
								<div className="title">
			            <img src={this.props.topIcon} style={{height: "100px"}} id="tt-icon" />
			            <h2 id="global-title" style={{color: this.props.color}}>{this.props.title}</h2>
			          </div>
			        </div>
			        <img src={this.props.circleBackground} id="circle" style={{borderColor: this.props.color}} />
					</div>
			)
	}
}

export default Cover;