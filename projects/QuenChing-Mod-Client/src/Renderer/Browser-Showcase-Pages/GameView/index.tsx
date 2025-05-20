export const GameView = reaxper(() => {
	
	const { gameRunning } = reaxel_Core.store;
	return <div className={`${gameRunning ? 'game-running' : ''} ${less['game-view']}`}>
		<img
			src={image}
			width="100%"
			height= "auto"
		/>
		
		<Button
			
			className="x-btn"
			size="large"
			onClick={() => {
				if (gameRunning) {
					reaxel_Core.setState({
						gameRunning: false,
					});
				}
			}}
		>
			关闭游戏
		</Button>
	</div>
})

import { reaxel_Core } from '#renderer/Browser-Showcase-Pages/reaxels/core';
import { Button } from 'antd';
import image from './img_1.png';
import { CloseCircleOutlined } from '@ant-design/icons';
import * as less from './style.module.less'
