import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { theme } from '../../themes'

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background: ${props => props.theme.colors.blackTertiary};
  padding: 0 24px;
  padding-bottom: ${getBottomSpace() + 16}px;
  padding-top: 16px;
`

export const InputMessage = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.white
})`
  width: 100%;
  height: 73px;
  background: ${props => props.theme.colors.blackTertiaryOpacity};
  padding: 0 20px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.white};
`
