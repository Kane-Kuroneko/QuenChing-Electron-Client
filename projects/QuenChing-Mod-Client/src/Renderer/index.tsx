const root = createRoot( document.getElementById( "react-app-root" ) );

const AppView = env === 'electron' && await import('#renderer/App-Pages').then(v => v.AppPages);

const BrowserShowcaseView = env === 'browser' && await import('#renderer/Browser-Showcase-Pages').then(v => v.BrowserShowcasePages);


var EntryView = env === 'browser' ? BrowserShowcaseView : AppView;

@reaxper
class App extends Reaxlass {
	render() {
		
		return <EntryView/>;
	}
}

root.render( <App /> );

import { env } from '#renderer/ENV';
import "./dom-listeners";
import './ipc-listeners';
import { Routing } from '#renderer/routes';
import { createRoot } from "react-dom/client";
import './styles/index.less';
import './styles/global.module.less';
import './styles/overwrite.antd.less'
