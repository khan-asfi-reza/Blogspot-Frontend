export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | 'base';


export interface ResponsiveSizeType{
    base?: SizeType,
    xs?: SizeType,
    md?: SizeType,
    lg?: SizeType,
    xl?: SizeType,
    '2xl'?: SizeType,
}

export type ComponentSizeType = ResponsiveSizeType | SizeType

