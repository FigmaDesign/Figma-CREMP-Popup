declare module 'react-simple-maps' {
  import { FC, CSSProperties, ReactNode, SVGProps } from 'react';

  export interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
    parallels?: [number, number];
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export interface RsmFeature {
    rsmKey: string;
    id?: string | number;
    type: string;
    properties: Record<string, unknown>;
    geometry: unknown;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: { geographies: RsmFeature[] }) => ReactNode;
  }

  export interface GeographyStyle {
    default?: CSSProperties;
    hover?: CSSProperties;
    pressed?: CSSProperties;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: RsmFeature;
    style?: GeographyStyle;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const ComposableMap: FC<ComposableMapProps>;
  export const Geographies: FC<GeographiesProps>;
  export const Geography: FC<GeographyProps>;
  export const Marker: FC<MarkerProps>;
  export const ZoomableGroup: FC<{ children?: ReactNode; [key: string]: unknown }>;
}
