import { connectToMonitor, trackRender } from './tracker';
import { enableAutoTracking } from './autotrack';

export interface RnpvConfig {
    serverUrl: string;
    appName?: string;
}

let isInitialized = false;

export const startPerformanceTracker = (config: RnpvConfig) => {
    const { serverUrl, appName = 'rn-app' } = config;

    if (isInitialized || !__DEV__) return;
    isInitialized = true;

    connectToMonitor(serverUrl);

    enableAutoTracking(trackRender);

    console.log(`🚀 [rnpv] Iniciado para: ${appName}`);
};