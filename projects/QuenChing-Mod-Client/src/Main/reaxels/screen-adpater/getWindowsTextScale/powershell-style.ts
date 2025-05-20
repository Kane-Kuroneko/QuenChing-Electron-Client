export const getWindowsTextScaleByPS = () => parseFloat( execSync(
	'powershell -Command "[Windows.UI.ViewManagement.UISettings]::new().TextScaleFactor"',
).toString().trim() );

import { execSync } from 'child_process';
