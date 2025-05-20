export const getTextScaleFactor = async(): Promise<number> => {
	
	try {
		return await getTextScaleFactorByPyScreensInfo();
	} catch ( e ) {
		console.error(`无法通过py_screeninfo获取主屏幕的textScaleFactor`);
		console.error(e);
		
		try {
			const textScaleFactor = await getWindowsTextScaleByReg();
			if( checkValidScale(textScaleFactor) ) {
				return textScaleFactor;
			} else {
				throw new Error('textScaleFactor is not a valid number');
			}
		} catch ( e ) {
			console.error(`无法通过py_screeninfo获取主屏幕的textScaleFactor`);
			console.error(e);
			
			try {
				const textScaleFactor = await getWindowsTextScaleByReg();
				if( checkValidScale(textScaleFactor) ) {
					return textScaleFactor;
				} else {
					throw new Error('textScaleFactor is not a valid number');
				}
			} catch ( e ) {
				
				try {
					const textScaleFactor = getWindowsTextScaleByPS();
					if( checkValidScale(textScaleFactor) ) {
						return textScaleFactor;
					} else {
						throw new Error(`textScaleFactor不是合法的数值:${ textScaleFactor }`);
					}
				} catch ( e ) {
					console.error(`无法通过注册表获取主屏幕的textScaleFactor:`);
					console.error(e);
					
					//本来这里应该继续用注册表方式获取,但是需要admin权限而且兼容性不好 此方案废弃.
				}
			}
		}
	}
};

function checkValidScale( scale: number ){
	return typeof scale === 'number' && !Number.isNaN(scale) && scale >= 1;
}


import { getWindowsTextScaleByPS } from './powershell-style';
import { getWindowsTextScaleByReg } from './registry-style';
import { getTextScaleFactorByPyScreensInfo } from './spawn-pyscreen-style';

