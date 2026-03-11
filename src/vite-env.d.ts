/// <reference types="vite/client" />

declare module 'react-ztext' {
  import { CSSProperties, ReactNode } from 'react';

  interface ZtextProps {
    children: ReactNode;
    depth?: string;
    direction?: 'both' | 'x' | 'y';
    event?: 'pointer' | 'scroll' | 'scrollY' | 'none';
    eventRotation?: string;
    eventDirection?: 'default' | 'reverse';
    fade?: boolean;
    layers?: number;
    perspective?: string;
    style?: CSSProperties;
    className?: string;
  }

  const Ztext: (props: ZtextProps) => JSX.Element;
  export default Ztext;
}

