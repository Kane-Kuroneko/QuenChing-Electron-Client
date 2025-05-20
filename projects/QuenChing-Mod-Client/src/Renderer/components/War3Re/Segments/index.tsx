export const War3Segmented = reaxper(<T = any>( props: War3SegmentedProps<T> ) => {
	
	
	return props.options.map(({
		label,className,disabled,title,value
	}:SegmentedLabeledOption<T>) => {
		
		return <War3SegmentedItem
			key = { Math.random() }
			label = { label }
			size = { props.size }
			value={label}
		/>;
	})
});
const {store,setState} = createReaxable({
	selected:false,
})

export const War3SegmentedItem = reaxper(<T = string>(props:War3SegmentedItemProps<T>) => {
	const sizeHeightMap = {
		'small' : .75 ,
		'middle' : 1 ,
		'large' : 1.5,
	};
	
	props = Object.assign({
		size : 'middle' ,
	} , props , {
		
	});
	
	return <div
		className = { classnames(less['war3-segmented-item'],) }
		style={{
			zoom : sizeHeightMap[props.size] ,
		}}
	>
		<div className={classnames('front-btn-bg',store.selected && 'selected')}>
			<div className={classnames('btn-bg')}>
				<span>{props.label}</span>
			</div>
		</div>
		<div className="active-bg"/>
	</div>;
})


type War3SegmentedItemProps<T> = SegmentedLabeledOption<T>&{
	size : 'small'|'middle'|'large';
};

type War3SegmentedProps<T = any> = SegmentedProps<T> & {
	size : 'small'|'middle'|'large';
}

import { SegmentedLabeledOption , SegmentedProps } from 'antd/lib/segmented';
import * as less from './style/index.module.less';
import classnames from 'classnames';
