import { darken, lighten } from 'polished';
import styled from 'styled-components';
import colors from '../assets/styles/colors';

import { borderRadius, breakpoints, zIndex } from '../assets/styles/constants';

export const Container = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  min-height: -webkit-fill-available;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0 3.2rem;
`;

export const Logo = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  color: ${colors.white};
`;

export const Content = styled.article`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;

  align-self: center;
  justify-self: center;

  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3.2rem;

  margin: 0 4rem 16rem 4rem;

  background: ${colors.white};

  border-radius: ${borderRadius.large};

  img {
    height: 350px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > p {
    text-transform: uppercase;
    color: ${colors.primary};
    font-size: 2.4rem;
    font-weight: 500;

    margin-bottom: 2.4rem;
    margin-top: 1.6rem;
  }

  button {
    outline: none;
    border: none;
    background: ${colors.primary};

    border-radius: ${borderRadius.medium};
    color: ${colors.white};
    text-transform: uppercase;
    padding: 1.2rem;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${lighten(0.05, colors.primary)};
    }

    &:focus {
      background: ${darken(0.05, colors.primary)};
    }
  }

  > button {
    width: 250px;
  }
`;

export const InputButton = styled.div`
  > button {
    width: 80px;
  }

  > input {
    width: 200px;

    padding: calc(1.2rem - 2px);
    padding-right: calc(1.2rem + 8px);
    border-radius: ${borderRadius.medium} 0 0 ${borderRadius.medium};
    margin-right: -8px;

    color: ${colors.gray_2};

    outline: none;
    border: 2px solid ${colors.primary};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
