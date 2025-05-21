declare global {
	
	export const useEffect: typeof import('react').useEffect;
	export const useState: typeof import('react').useState;
	export const useContext: typeof import('react').useContext;
	export const useReducer: typeof import('react').useReducer;
	export const useCallback: typeof import('react').useCallback;
	export const useMemo: typeof import('react').useMemo;
	export const useRef: typeof import('react').useRef;
	
	export const versions: {
		node: string,
		chrome: string,
		electron: string,
	};
	
	type IpcRenderer = import('electron/renderer').IpcRenderer;
	type IpcRendererEvent = import('electron/renderer').IpcRendererEvent;
	type IpcJsonHandle = import('#src/IPC-channels').IpcJsonHandle;
	type IpcJsonOn = import('#src/IPC-channels').IpcJsonOn;
	
	type Channel = "console" | "json::handle"|"json::on";
	type ChannelConsoleType = any[];
	// type ChannelJsonType<T extends keyof IpcJsonHandle> = IpcJsonHandle[T]["args"];
	
	type Args<
		C extends Channel,
		D extends Record<string, { data: unknown }>,
		R extends keyof D
	> = {
		console: ChannelConsoleType;
		"json::handle": [
			{ type: R; data: D[R]["data"] }
		];
		"json::on": [
			{ type: R; data: D[R]["data"] }
		];
	}[C];
	
	export const IPC: {
		invoke<
			C extends Channel,
			R extends keyof IpcJsonHandle
		>(
			channel: C,
			...args: Args<C, IpcJsonHandle, R>
		): R extends keyof IpcJsonHandle
			? IpcJsonHandle[R]["reply"] extends Promise<unknown>
				? IpcJsonHandle[R]["reply"]
				: Promise<IpcJsonHandle[R]["reply"]>
			: never;
		
		send<C extends Channel , R extends keyof IpcJsonOn>( channel: C , ...args: Args<C,IpcJsonOn , R> ): void,
		
		on<C extends Channel , T extends keyof IpcJsonOn>( channel: C , callback: ( e: IpcRendererEvent , ...args:Args<C , IpcJsonOn , T> ) => void ) : ReturnType<IpcRenderer['on']>,
	};
	
	
	interface Window {
		versions: typeof versions;
		IPC: typeof IPC;
	}
	
	// export const I18n: typeof import('#renderer/reaxels/exports')['I18n'];
	// export const i18n: typeof import('#renderer/reaxels/exports')['i18n'];
	
	export const IPCLogger: typeof import('#main/utils/devtools-logger')['IPCLogger'];
	export const Reaxlass : typeof import('reaxes-react').Reaxlass;
	export const reaxper : typeof import('reaxes-react').reaxper;
	export const reaxel : typeof import('reaxes').reaxel;
	export const createReaxable : typeof import('reaxes').createReaxable;
	export const obsReaction : typeof import('reaxes').obsReaction;
	export const collectDeps : typeof import('reaxes').collectDeps;
	export const distinctCallback : typeof import('reaxes').distinctCallback;
	export const xPromise : typeof import('reaxes-utils').xPromise;
}
export {};
