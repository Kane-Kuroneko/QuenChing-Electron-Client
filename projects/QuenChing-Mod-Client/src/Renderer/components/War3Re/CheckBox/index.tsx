export const War3CheckBox = reaxper((props:War3CheckBoxProps) => {
	
	props = Object.assign({
		size : '36px',
	},props??{},{
		
	} as War3CheckBoxProps);
	
	return <span
		className={classnames(less['war3-checkbox'],props.disabled && "disabled")}
	>
		<label>
			<input
				type="checkbox"
				checked={props.checked}
				onChange={(e) => {
					props.onChange?.(e.target.checked);
				}}
				style={{display:"none"}}
			/>
			<div
				className={`${props.checked ? 'checked' : ''} ${props.disabled ? 'disabled' : ''} checkbox`}
				style={{
					width : props.size,
					height : props.size,
				}}
			/>
			<span className="label">{props.label}</span>
		</label>
	</span>
})

import * as less from './style/index.module.less'
import classnames from 'classnames'

type War3CheckBoxProps = {
	checked : boolean;
	onChange : (checked : boolean) => void;
	label : string;
	disabled? : boolean;
	size? : number|string;
}
