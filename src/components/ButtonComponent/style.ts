import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../assets/theme';

type SpecificColor = {
  color?: string;
};

type ButtonProps = {
  buttonColor: string;
  size: string;
  icon?: string;
  width?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: ${({ size, width }) => (width || theme.buttonSize.default_width[size])};
  padding-top: ${({ size }) => theme.buttonSize.padding[size]};
  padding-bottom: ${({ size }) => theme.buttonSize.padding[size]};

  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: ${({ buttonColor }) => theme.mainColors[buttonColor]};
  border-radius: ${theme.borderRadius.button};

  margin-bottom: ${theme.margins.bottom};
  
`;

export const ButtonText = styled.Text<SpecificColor>`
  font-family: ${theme.fonts.h3.family};
  font-size: ${theme.fonts.h3.size};

  color: ${({ color }) => (color === 'white' ? `${theme.mainColors.white}` : `${theme.mainColors.darkGray}`)};
`;

export const Icon = styled.Image`
  width: 20px;
  height: 30px;

  margin-right: ${theme.margins.leftRight};
`;
