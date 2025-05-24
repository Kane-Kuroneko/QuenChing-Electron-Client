export const AppPages = reaxper(() => {
	
	
	return <Dropdown
		menu = {{
			items : [
				{
					key : '1',
				},
			]
		} }
		trigger = { [ 'click' ] }
	>
		<Button
			style = { { zoom : 2 } }
		>
			Click me!
		</Button>
	</Dropdown>;
})


import { Button , Dropdown } from 'antd';
