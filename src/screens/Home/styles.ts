import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.blackSecondary};
  padding-top: ${getStatusBarHeight() + 17}px;
`
