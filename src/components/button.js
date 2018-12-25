import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel'
import BarIcon from './baricon'
import items from '../data/data';
import data from '../data/data';

class Button extends Component {
		
	state = {
		description: data.descriptions,
		sidebarIcons: data.items
	}


	showSideBarIcons(element, id) {
		const getClass = () => {
			if(id === "0") return "practices"
				else if(id === "1") return "benefits"
					else return "functions"
		}
		let arr = this.state.sidebarIcons[id][id];

		let children = arr.map((el,index) => {
       
    let cls = getClass();
    
			return(
				<BarIcon key={index} id={el.id} name={el.name} image={el.image} cls={cls}></BarIcon>
				)
		});

		ReactDOM.render(
				children,
				element
		);
	}

	onClick(e) {
		let button = e.target;
		let panels = document.getElementsByClassName('sidebar-panel');
		let box = document.getElementsByClassName('desc_frame')[0];
		let btnId = e.target.dataset.id;
		for(let i=0; i < panels.length; i++){
			ReactDOM.render(
				"",panels[i]
			);
			panels[i].classList.remove('active')
		}
		button.nextSibling.classList.add('active')

		this.showSideBarIcons(button.nextSibling, btnId)

		switch(btnId) {
			case '0':
				box.classList = 'desc_frame purple';
				box.firstChild.innerText = this.state.description[btnId];
			break;
			case '1':
				box.classList = 'desc_frame red';
				box.firstChild.innerText = this.state.description[btnId];
			break;
			case '2':
				box.classList = 'desc_frame blue';
				box.firstChild.innerText = this.state.description[btnId];
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
						onClick={this.onClick.bind(this)} 
						style={{borderColor:this.props.color, color: this.props.color}}
						data-id={this.props.id}
					>{
					this.props.name
				}</button>
				<Panel color={this.props.color} /> 
				</Fragment>
			)
	}
}

export default Button;