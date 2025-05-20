IpcMainOn( 'monitor-war3exe-process' ).on( ( e , data ) => {
	const { toggleWar3ProcessMonitor } = reaxel_ProcessMonitor();
	toggleWar3ProcessMonitor( data );
} );

IpcMainOn( 'fetch-ahk_cp-status' ).on( ( e , data , reply ) => {
	reaxel_MainProcessHub().observedMainWindow( ( win ) => {
		reply( 'fetch-ahk_cp-status').send(!!reaxel_AhkSpawner.store.ahk);
	} );
} );

IpcMainOn( 'shortcut' ).on( ( e , data ) => {
	if( data.type === 'keydown' && data.key === 'F12' ) {
		const { mainWindow } = reaxel_MainProcessHub()
		if(mainWindow){
			if(mainWindow.webContents.isDevToolsOpened()){
				mainWindow.webContents.closeDevTools();
			}else {
				useOpenDevtools(mainWindow , { devtoolsOptions : { mode : 'left' } , width:0 });
			}
		}
	}
} );

IpcMainOn( 'open-url' ).on( ( e , data ) => {
	shell.openExternal( data );
} );
IpcMainHandle( 'clipboard' ).handle( ( e , data ) => {
	if( data.operation === 'write' ) {
		clipboard.writeText( data.value );
	} else if(data.operation === 'read') {
		return clipboard.readText( "clipboard" );
	}
} );
IpcMainHandle( 'screen-info' ).handle( ( e , data ) => {
	return {
		primaryScreen : screen.getPrimaryDisplay()
	};
} );

import { reaxel_MainProcessHub } from '#main/reaxels/main-process-hub';
import { reaxel_AhkSpawner } from '#main/reaxels/ahk-spawner';
import { IpcMainHandle , IpcMainOn , useIpcSend } from '#main/utils/useIPC';
import { reaxel_ProcessMonitor } from '#main/reaxels/process-monitor';
import { shell , clipboard , ipcRenderer , ipcMain , screen } from 'electron';
import { useOpenDevtools } from '#generic/modify-electron/open-devtools';
