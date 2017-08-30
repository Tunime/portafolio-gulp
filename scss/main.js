import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i")',
  'inicio_nav': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'justifyContent': 'space-around',
    'background': '#202533',
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'inicio_nav figure': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }]
  },
  'inicio_nav ul': {
    'display': 'flex'
  },
  'inicio_nav ul li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }]
  },
  'inicio_nav ul a': {
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }]
  },
  'li': {
    'listStyle': 'none'
  },
  'a': {
    'textDecoration': 'none'
  },
  '*': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Open Sans', sans-serif'
  }
});
