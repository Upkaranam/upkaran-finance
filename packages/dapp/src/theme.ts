import chakraTheme, { Theme as ChakraTheme } from '@chakra-ui/theme';

interface MetaColors {
  background: string;
  black10: string;
}

interface MetaTheme {
  colors: ChakraTheme['colors'] & MetaColors;
}

type Theme = ChakraTheme & MetaTheme;

export const theme: Theme = {
  ...chakraTheme,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
    },
  },
  radii: {
    ...chakraTheme.radii,
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  sizes: {
    ...chakraTheme.sizes,
    container: {
      ...chakraTheme.sizes.container,
      xl: '85rem',
    },
  },
  colors: {
    ...chakraTheme.colors,
    background: '#ffffff',
    black10: 'rgba(0,0,0,0.1)',
  },
  fonts: {
    ...chakraTheme.fonts,
  },
};
