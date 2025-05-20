export const reaxel_Core = reaxel(() => {
	
	const {store,setState,mutate} = createReaxable({
		gameRunning: false,
		modEnabled: false,
		modInstalled : false,
		modInstalling : false,
		gameEdition : 'reforged' as GameEdition,
		graphicCard : 'Nvidia' as GraphicCard,
		gameVersion : '1.33+' as GameVersion,
	});
	
	const statics = {};
	
	return Object.assign(() => {},{
		store,
		setState,
		mutate,
		statics,
	})
})


export type GameEdition = 'reforged' | 'classic';
export type GraphicCard = 'Nvidia' | 'Intel/AMD';
export type GameVersion = '1.33+' | '1.32';
