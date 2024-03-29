import styled from 'styled-components';

export const LoaderContainer = styled.div`
  .hexagon-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    margin: -80px 0px 0px -80px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #e3e4dc;
    // animation: rotate3 3s linear infinite;
    &:before {
      content: '';
      width: 160px;
      height: 160px;
      display: block;
      position: absolute;
      border: 2px solid transparent;
      border-radius: 50%;
      top: -2px;
      left: -2px;
      box-sizing: border-box;
      // border-bottom-color: transparent;
      // border-left-color: transparent;
      // border-right-color: transparent;
      clip: rect(0px, 35px, 35px, 0px);
      z-index: 10;
      animation: rotate infinite;
      animation-duration: 2s;
      animation-timing-function: linear;
    }
    &:after {
      content: '';
      width: 160px;
      height: 160px;
      display: block;
      position: absolute;
      border: 2px solid $flat-purple;
      border-radius: 50%;
      top: -2px;
      left: -2px;
      box-sizing: border-box;
      // transform: rotate(30deg);
      // border-bottom-color: transparent;
      // border-left-color: transparent;
      // border-right-color: transparent;
      clip: rect(0px, 164px, 150px, 0px);
      z-index: 9;
      // animation: rotate2 infinite, rotate3 infinite;
      // animation-duration: 3s;
      // animation-timing-function: linner;
      animation: rotate2 2s linear infinite;
    }

    .hexagon-container {
      position: relative;
      top: 33px;
      left: 41px;
      border-radius: 50%;
      list-style-type: none;
    }

    .hexagon {
      position: absolute;
      width: 40px;
      height: 23px;
      background-color: $loader-hexagon-color;
      &:before {
        content: '';
        position: absolute;
        top: -11px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 11.5px solid $loader-hexagon-color;
      }
      &:after {
        content: '';
        position: absolute;
        top: 23px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 11.5px solid $loader-hexagon-color;
      }
      @each $index, $top, $left in (1, 0px, 0px), (2, 0px, 42px), (3, 36px, 63px), (4, 72px, 42px),
        (5, 72px, 0px), (6, 36px, -21px), (7, 36px, 21px)
      {
        $time: 1.5s; // thx to @zeakd for this formula
        $delay: $time / 14;
        &.hex_#{$index} {
          top: $top;
          left: $left;
          //cubic-bezier(.155,1.105,.295,1.12)
          animation: Animasearch $time ease-in-out infinite;
          animation-delay: $delay * $index;
        }
      }
    }
  }
`;
