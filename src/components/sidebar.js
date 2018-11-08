import React, {Component} from 'react';
import Button from './button'

class SideBar extends Component {
	
	render() {
		return(
				<div>
					<Button name={'Management Practices'} color={'#883760'}/>
					<Button name={'Soil Health Benefits'} color={'#ab161b'}/>
					<Button name={'Soil Organism Functions'} color={'#4387be'}/>
				</div>
			)
	}
}

export default SideBar;