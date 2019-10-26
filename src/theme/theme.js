const theme = {
  palette: {
    primary: {
      '600': '#a18a5f',
      '500': '#b39c70',
      '400': '#cbb388',
      '300': '#d8c8a9',
      '200': '#e0d9cc',
      '100': '#f9f7f6',
    },
    secondary: {
      '300': '#0a141d',
      '200': '#0f1d2b',
      '100': '#16283c',
    },
    neutral: {
      '600': '#292929',
      '500': '#343434',
      '400': '#585858',
      '300': '#909090',
      '200': '#d6d6d6',
      '100': '#f8f8f8',
    },
  },
  typography: {
    family: ['Source Sans Pro, ', 'Helvetica, ', 'sans-serif'].join(' '),
    weight: {
      base: 400,
      bold: 600,
    },
    size: {
      '2xs': '1rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3rem',
      '4xl': '3.6rem',
      '5xl': '4.2rem',
    },
  },
  spacing: {
    '2xs': '.4rem',
    xs: '.8rem',
    sm: '1.2rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
    '2xl': '4.8rem',
    '3xl': '6.4rem',
    '4xl': '9.6rem',
    '5xl': '12.4rem',
  },
  radius: {
    sm: '0.1rem',
    md: '0.3rem',
    lg: '0.5rem',
  },
  shadow: {
    '1':
      '0 0.938rem 2.188rem  rgba(50, 50, 93, 0.1), 0 0.313rem 0.938rem rgba(0, 0, 0, 0.07)',
  },
};

export default theme;
