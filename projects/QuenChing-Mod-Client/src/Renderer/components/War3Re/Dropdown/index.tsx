
export const War3Dropdown = reaxper((props:War3DropdownProps) => {
	
	
	return <ConfigProvider
		theme = { {
			token : {
				motion : false ,
			},
		} }
	><Dropdown
		menu = { props.menu }
		trigger = { [ 'click' ] }
		open = { props.open }
		onOpenChange = { props.onOpenChange }
		overlayClassName = { classnames(less['dropdown']) }
	>
		{/*<input type = "range" />*/ }
		<div
			className = { classnames(less['dropdown-btn']) }
		>
			<Button
				style = { {
					width : props?.width || 'auto' ,
				} }
				className = { classnames('') }
			>
				{ props.value }
			</Button>
		</div>
	</Dropdown></ConfigProvider
	>;
});

export type War3DropdownProps = {
	menu : MenuProps;
	value : string;
	width? : string;
}&Pick<DropdownProps , "open"|"onOpenChange">;


import classnames from 'classnames';
import { Button , ConfigProvider , Dropdown , DropdownProps , MenuProps } from 'antd';
import * as less from './style/index.module.less';
