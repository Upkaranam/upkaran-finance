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
    background: '#f0f0f0',
    black10: 'rgba(0,0,0,0.1)',
    blue: {
      50: '#dbfaff',
      100: '#b1e9fd',
      200: '#85d9f6',
      300: '#57c8f1',
      400: '#2db9ec',
      500: '#139fd2',
      600: '#027ca5',
      700: '#005977',
      800: '#00364a',
      900: '#00141d',
    },
  },
  fonts: {
    ...chakraTheme.fonts,
    body: `'Montserrat', sans-serif`,
    heading: `'Poppins', sans-serif`,
    mono: `'Courier Prime', monospace`,
  },
};
