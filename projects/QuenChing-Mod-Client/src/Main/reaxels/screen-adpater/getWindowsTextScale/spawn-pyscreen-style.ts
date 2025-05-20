export const getTextScaleFactorByPyScreensInfo = async () => {
	
	const primaryScreen = await getCachedPyScreensInfo().then(s => s.find(s => s.is_primary));
	
	if( primaryScreen && primaryScreen.text_scale_factor ) {
		return primaryScreen.text_scale_factor;
	} else {
		throw new Error('这台电脑甚至没有一个屏幕');
	}
}

import { getCachedPyScreensInfo} from '../getScreensInfo';
