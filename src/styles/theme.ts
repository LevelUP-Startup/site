export interface iTheme {
  colors: {
    primary: string
    primaryOver: string
    secondary: string
    white: string
    black: string
    success: string
    danger: string
    background: string
    border: string
    gray: {
      'gray-100': string
      'gray-200': string
      'gray-300': string
      'gray-400': string
      'gray-500': string
      'gray-600': string
      'gray-700': string
      'gray-800': string
      'gray-900': string
    }
    green: {
      'green-300': string
      'green-500': string
      'green-700': string
    }
    toolTipBackground: string
    toolTipBorder: string
  }
}

export const darkTheme: iTheme = {
  colors: {
    primary: '#864CFF',
    primaryOver: '#864CCC',
    secondary: '#41FFC6',
    white: '#F5F5F5',
    black: '#141414',
    success: '#25D757',
    danger: '#F85640',
    background: '#181818',
    border: '#222222',
    gray: {
      'gray-100': '#E1E1E6',
      'gray-200': '#D0D0D5',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',
    },
    green: {
      'green-300': '#3aa88e',
      'green-500': '#00875F',
      'green-700': '#015F43',
    },
    toolTipBackground: '#25253475',
    toolTipBorder: '#373755',
  },
}

export const lightTheme: iTheme = {
  colors: {
    primary: '#864CFF',
    primaryOver: '#864CCC',
    secondary: '#2CC798',
    white: '#333',
    black: '#f7f7fd',
    success: '#25D757',
    danger: '#F85640',
    background: '#FFFFFF',
    border: '#eee',
    gray: {
      'gray-100': '#E1E1E6',
      'gray-200': '#D0D0D5',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',
    },
    green: {
      'green-300': '#3aa88e',
      'green-500': '#00875F',
      'green-700': '#015F43',
    },
    toolTipBackground: '#eee',
    toolTipBorder: '#fff',
  },
}
