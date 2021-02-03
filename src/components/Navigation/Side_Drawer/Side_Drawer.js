import React, { Fragment } from 'react'

import './Side_Drawer.css'
import NavItems from '../NavItems/NavItems'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = ( props ) => {

	let attachedClasses = ["SideDrawer", "Close"]

	if( props.open ){
		attachedClasses = ["SideDrawer", "Open"]
	}

	return (

		<Fragment>
			<BackDrop show = { props.open } clicked = { props.closed } />
			<div className = { attachedClasses.join(' ') }>
				<nav>
					<NavItems />
				</nav>
			</div>
		</Fragment>
	)

}

export default sideDrawer