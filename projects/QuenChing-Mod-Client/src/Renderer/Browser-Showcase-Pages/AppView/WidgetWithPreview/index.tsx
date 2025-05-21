const { store , setState } = createReaxable({
	open : true ,
	selectedKey : '1' ,
	mouseOverKey : null,
	
	shadowEnabled : true ,
});


export const WidgetWithPreview = reaxper(() => {
	
	
	const { gameRunning } = reaxel_Core.store;
	
	console.log(store.mouseOverKey);
	const previewImg = items.find(i => i.key === store.mouseOverKey)?.img ?? null;
	return <>
		<DiffPreviewWindow imgUrl={previewImg}/>
		<OptionsLabel
			label = "植被"
		>
			<War3Dropdown
				width="120px"
				menu={{
					expandIcon:<img src={dropdownArrow}/>,
					items:items.map((itm) => Object.assign(itm,{
						onMouseEnter( { key },e){
							setState({ mouseOverKey : key });
						},
						onMouseLeave(){
							setState({ mouseOverKey : null });
						},
					})) ,
					onClick( {key} ){
						setState({ selectedKey : key });
					},
				}}
				value={items.find(i => i.key === store.selectedKey)?.label}
			/>
		</OptionsLabel>
		<War3Checkbox
			checked={store.shadowEnabled}
			onChange={(checked) => {
				setState({ shadowEnabled : checked });
			}}
		>
			开启阴影
		</War3Checkbox>
	</>;
	
	return (
		<div className={less['widget-with-preview']}>
			<div className={less['left-panel']}>
				<War3Checkbox
					checked={true}
					onChange={(checked) => {
						
					}}
				>Waersd</War3Checkbox>
				<War3Dropdown
					width="120px"
					menu={{
						items: [
							{ key: '1', label: '选项1' },
							{ key: '2', label: '选项2' },
						],
					}}
					value={'选项1'}
				/>
			</div>
			<div className={less['right-panel']}>
				<DiffPreviewWindow imgUrl={''} />
			</div>
		</div>
	);
});

const items: (ItemType & { label: string; img: string })[] = [
	{
		key: '1',
		label: '原版',
		img: btnacolyte,
	},
	{
		key: '2',
		label: '高耸',
		img: btnherodemonhunter,
	},
	{
		key: '3',
		label: '低垂',
		img: btnsorceress,
	},
	{
		key: '4',
		label: '1.8',
		img: btnwyvernrider,
	},
	{
		key: '5',
		label: '1.6',
		img: p01,
	},
	{
		key: '6',
		label: '复古',
		img: p12,
	},
];

import { DiffPreviewWindow } from '#renderer/components/War3Re/Diff-Preview-Window';
import { War3Dropdown } from '#renderer/components/War3Re/Dropdown';
import { War3Checkbox } from '#renderer/components/War3Re/Checkbox';
import { ItemType } from 'antd/lib/menu/interface';
import * as less from './style/index.module.less';
import { reaxel_Core } from '#renderer/Browser-Showcase-Pages/reaxels/core';

import dropdownArrow from '#renderer/components/War3Re/Dropdown/assets/chevron-up-icon-resting.png';
import { OptionsLabel } from '#renderer/components/War3Re/Options-Label';
import btnacolyte from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/btnacolyte.png';
import btnherodemonhunter from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/btnherodemonhunter.png';
import btnsorceress from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/btnsorceress.png';
import btnwyvernrider from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/btnwyvernrider.png';
import p01 from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/p01.png';
import p12 from '#renderer/components/War3Re/Diff-Preview-Window/assets/dev-test/p12.png';
