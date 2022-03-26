import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const circle = keyframes`
  0% {transform: rotate(0deg)} 
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class Loader extends React.Component {
    style = i => {
      const { size, color, sizeUnit } = this.props;

      return css`{
            position: absolute;
            height: ___CSS_0___;
            width: ___CSS_1___;
            border: 1px solid ___CSS_2___;
            border-radius: 100%;
            transition: 2s;
            border-bottom: none;
            border-right: none;
            top: ___CSS_3___%;
            left: ___CSS_4___%;
            animation-fill-mode: '';
            animation: ___CSS_5___ 1s ___CSS_6___s infinite linear;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      const wrapper = css`{        
            position: relative;
            width: ___CSS_0___;
            height: ___CSS_1___;
        }`;

      return this.props.css ? css`___CSS_0___;___CSS_1___` : wrapper;
    };

    render() {
      const { loading } = this.props;

      return loading ?
        <div css={this.wrapper()}>
          <div css={this.style(0)} />
          <div css={this.style(1)} />
          <div css={this.style(2)} />
          <div css={this.style(3)} />
          <div css={this.style(4)} />
        </div> : null;
    }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  css: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 50,
  sizeUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;