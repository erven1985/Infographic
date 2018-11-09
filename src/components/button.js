import React, {Component, Fragment} from 'react';

class Button extends Component {
	

	onClick(e) {
		let button = e.target;
		let panels = document.getElementsByClassName('sidebar-panel');
		let box = document.getElementsByClassName('desc_frame')[0];
		for(let i=0; i < panels.length; i++){
			panels[i].classList.remove('active')
		}
		button.nextSibling.classList.add('active')
		switch(e.target.dataset.id) {
			case '1':
				box.classList = 'desc_frame purple';
				box.firstChild.innerText = "Many practices can support the function of organisms and build soil health. They are often used individually to address specific soil and plant problems, but the more that are used, the greater the effect on soil health. Explore the practices on this farm — and the organisms below the surface — to learn how they can improve soil health.";
			break;
			case '2':
				box.classList = 'desc_frame red';
				box.firstChild.innerText = "There are many ways that healthy soil supports the growth of high-yielding, high-quality and healthy crops. The benefits range from better management of nutrients and pests to structural changes in the soil that improve water capture and storage. All of these benefits can lead to higher farm profitability. Explore the practices on this farm — and the organisms below the surface — to learn how they help improve soil health.";
			break;
			case '3':
				box.classList = 'desc_frame blue';
				box.firstChild.innerText = "Organisms living in the soil play important roles in promoting a healthier soil ecosystem and more resilient plants. Increasing organic matter allows for more activity and diversity of life in the soil, which in turn stimulates soil processes that lead to healthy plants. Explore the practices on this farm — and the organisms below the surface — to learn how they can improve soil health.";
			break;
			default:
			break;
		}
	}	

	render() {
		return(
				<Fragment>
					<button 
						className="sidebar-btn" 
						onClick={this.onClick} 
						style={{borderColor:this.props.color, color: this.props.color}}
						data-id={this.props.id}
					>{
					this.props.name
				}</button>
				<div className="sidebar-panel" style={{borderColor:this.props.color, color: this.props.color}}></div>
				</Fragment>
			)
	}
}

export default Button;