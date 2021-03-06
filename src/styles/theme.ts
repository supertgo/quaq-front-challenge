export default {
  grid: {
    container: '135rem',
    gutter: '3.2rem'
  },
  border: {
    small: '0.4rem',
    medium: '1.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4rem'
    }
  },
  colors: {
    red: '#f02641',
    green: '#25790d',
    white: '#FFFFFF',
    black: '#0C0C0C',
    lightGray: '#F8F8F8',
    gray: '#7B7B7B',
    orange: '#FF9900',
    lightGreen: '#bff2de'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;
