let originalCreateElement: any = null;

export const enableAutoTracking = (trackRenderFn: (name: string, file?: string) => void) => {
    if (!__DEV__ || !global.React || originalCreateElement) return;

    originalCreateElement = global.React.createElement;

    global.React.createElement = function (type: any, props: any, ...children: any[]) {
        let componentName = 'Unknown';

        if (typeof type === 'function') {
            componentName = type.displayName || type.name || 'Anonymous';
        }

        if (typeof type === 'function' && componentName !== 'Anonymous') {
            const filePath = props?.__source?.fileName || 'unknown';
            trackRenderFn(componentName, filePath);
        }

        return originalCreateElement.apply(this, arguments);
    };

    console.log('✅ [rnpv] Auto-tracking activado');
};