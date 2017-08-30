import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'inicio': {
    'background': '#202533',
    'color': 'white',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'display': 'flex',
    'flexDirection': 'column'
  },
  'inicio_nav': {
    'display': 'flex',
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'justifyContent': 'center',
    'alignItems': 'center',
    'justifyContent': 'space-around',
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
  'inicio_cabesera': {
    'display': 'flex',
    'flexDirection': 'column',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'justifyContent': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 12.8 }]
  },
  'inicio_cabesera h1': {
    'fontSize': [{ 'unit': 'em', 'value': 3 }],
    'fontWeight': '800'
  },
  'inicio_cabesera p': {
    'fontWeight': 'lighter',
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'inicio_cabesera a': {
    'display': 'inline-table',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 4 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'White' }],
    'color': 'white',
    'borderRadius': '10px'
  }
});
