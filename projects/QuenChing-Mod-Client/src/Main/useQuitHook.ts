export const useQuitHook = (win:BrowserWindow) => {
	onQuit(( type ) => {
		if( type === 'close-window' ) {
			win.hide();
			return false;
		}else {
			return true;
		}
	});
	win.on( 'close' , ( event ) => {
		//没有quitReason就说明是从x按钮关闭的
		if(!quitReason){
			event.preventDefault();
			win.hide();
		}
	} );
}


import { onQuit , quitReason } from './useQuitEvent';
import { BrowserWindow } from 'electron';
