import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel'
import BarIcon from './baricon'

class Button extends Component {
		
	state = {
		description: ["Many practices can support the function of organisms and build soil health. They are often used individually to address specific soil and plant problems, but the more that are used, the greater the effect on soil health. Explore the practices on this farm — and the organisms below the surface — to learn how they can improve soil health.", "There are many ways that healthy soil supports the growth of high-yielding, high-quality and healthy crops. The benefits range from better management of nutrients and pests to structural changes in the soil that improve water capture and storage. All of these benefits can lead to higher farm profitability. Explore the practices on this farm — and the organisms below the surface — to learn how they help improve soil health.", "Organisms living in the soil play important roles in promoting a healthier soil ecosystem and more resilient plants. Increasing organic matter allows for more activity and diversity of life in the soil, which in turn stimulates soil processes that lead to healthy plants. Explore the practices on this farm — and the organisms below the surface — to learn how they can improve soil health."],
		sidebarIcons: [
			{"0":[
				{"name": "Compost", "id": "compost", "image": "https://www.sare-infographic.com/images/mp_icon_menu_01.png" },
				{"name": "Conservation Tillage", "id": "conservation_tillage", "image": "https://www.sare-infographic.com/images/mp_icon_menu_02.png" },
				{"name": "Cover Crops", "id": "cover_crops", "image": "https://www.sare-infographic.com/images/mp_icon_menu_03.png" },
				{"name": "Crop-Livestock Integration", "id": "crop_liverstock", "image": "https://www.sare-infographic.com/images/mp_icon_menu_04.png" },
				{"name": "Crop Rotation", "id": "crop_rotation", "image": "https://www.sare-infographic.com/images/mp_icon_menu_05.png" },
				{"name": "Soil Assessment", "id": "soil_assessment", "image": "https://www.sare-infographic.com/images/mp_icon_menu_06.png" }
			]}, 

			{"1":[
				
			]}, 

			{"2":[
				
			]}
		]

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