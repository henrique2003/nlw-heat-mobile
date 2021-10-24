import styled, { css } from 'styled-components/native'

interface IContainerProps {
  bgColor: 'pink' | 'yellow'
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${props => props.bgColor === 'yellow' && css`
    background: ${props.disabled === true ? props.theme.colors.yellowOpacity : props.theme.colors.yellow};
  `}
  ${props => props.bgColor === 'pink' && css`
    background: ${props.disabled === true ? props.theme.colors.pinkOpacity : props.theme.colors.pink};
  `}
`

interface ITextProps {
  color: 'white' | 'black'
}

export const Text = styled.Text<ITextProps>`
  color: ${props => props.color === 'white' ? props.theme.colors.white : props.theme.colors.blackPrimary};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  margin-left: 12px;
`
