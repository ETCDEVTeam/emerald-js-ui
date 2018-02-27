import * as React from 'react';

export interface LogoProps {
    height?: string;
    width?: string;
}

declare const Logo: React.ComponentType<LogoProps>;

export { Logo };