import React from 'react';
import glamorous from 'glamorous';
import { Menu, MenuItem } from "@blueprintjs/core";
import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

const StyleTitle = glamorous(Menu)({
	display: 'flex'
})

export default () => (
	<StyleTitle>
		<MenuItem
			iconName="arrow-right"
			text="Missions"
		/>
		<MenuItem
			iconName="people"
			text="People"
		/>
	</StyleTitle>
)