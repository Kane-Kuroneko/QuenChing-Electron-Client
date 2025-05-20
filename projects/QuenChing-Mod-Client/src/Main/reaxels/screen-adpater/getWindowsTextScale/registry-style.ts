const { absAppStaticsPath } = reaxel_ElectronENV();

const textScaleKey = 'HKCU\\Software\\Microsoft\\Accessibility';

setExternalVBSLocation(path.join(absAppStaticsPath,'/assets/vbs'));

export const getWindowsTextScaleByReg = () => {
	const promise = regedit.list( [ textScaleKey ] ).then( ( value ) => {
		const textScaleFactor = value[textScaleKey].values.TextScaleFactor.value  as number / 100;
		// console.log( 'Text Scale Factor:' , textScaleFactor ); // 转换为倍数
		return textScaleFactor;
	} );
	
	promise.catch( e => {
		console.error( e );
		debugger;
	} );
	return promise;
}


import { promisified as regedit , setExternalVBSLocation  } from 'regedit';
import { reaxel_ElectronENV } from '#main/reaxels/runtime-paths';
import path from 'node:path';
