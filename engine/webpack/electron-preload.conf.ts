const { IgnorePlugin } = webpack;
const { absolutelyPath_subprojectDist } = getProjectPaths.default;

export const electronPreloadConf: WebpackConfiguration = {
	target: 'electron-preload',
	mode: 'development',
	devtool : "cheap-source-map",
	output : {
		path: absolutelyPath_subprojectDist,
		filename: 'preload.js',
		library : {
			type : 'umd' ,
		} ,
	},
	plugins : [
		
	],
	externals : [],
	watch : true,
	
	node : {
		__dirname : false ,
		__filename : false ,
	} ,
};
import { getProjectPaths } from '../toolkit';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import webpack from 'webpack';
