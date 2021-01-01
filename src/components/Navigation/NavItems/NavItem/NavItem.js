import React, { Fragment } from 'react'

function NavItem({ href, content, classes, target, rell }) {
	return (
		<Fragment>
				<a 
					href={href} 
					className={classes} 
					target={target ? "__blank" : null} 
					rel={ rell ? "noopener noreferrer" : null } >
					{content}
				</a>
		</Fragment>
  )
}

export default NavItem
