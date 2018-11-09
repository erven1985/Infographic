import React, {Component} from 'react';
import Button from './button'

class SideBar extends Component {
	
	render() {
		return(
				<div>
					<Button name={'Management Practices'} color={'#883760'} id={'0'}/>
					<Button name={'Soil Health Benefits'} color={'#ab161b'} id={'1'}/>
					<Button name={'Soil Organism Functions'} color={'#4387be'} id={'2'}/>
				</div>
			)
	}
}

export default SideBar;