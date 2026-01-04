import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="loader__inner" />
        <div className="loader__orbit">
          <div className="loader__dot" />
          <div className="loader__dot" />
          <div className="loader__dot" />
          <div className="loader__dot" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: transparent;

  .loader {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(180, 230, 220, 0.2) 30%,
      transparent 70%
    );
    overflow: hidden;
  }

  /* outer ring */
  .loader::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #6ecdc3;
    animation: loader-spin 2s linear infinite;
  }

  /* rotating glow */
  .loader::after {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    background: conic-gradient(
      from 90deg,
      rgba(110, 205, 195, 0.4),
      transparent
    );
    filter: blur(3px);
    animation: loader-spin-reverse 1.5s linear infinite;
  }

  /* center paw core */
  .loader__inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 26px;
    background: #ffffff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px rgba(110, 205, 195, 0.7);
    animation: loader-pulse 1s ease-in-out infinite;
  }

  .loader__orbit {
    position: absolute;
    inset: 0;
    animation: orbit-rotate 3s linear infinite;
  }

  .loader__dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    background: #6ecdc3;
    border-radius: 50%;
  }

  .loader__dot:nth-child(1) { transform: rotate(0deg) translate(40px); }
  .loader__dot:nth-child(2) { transform: rotate(90deg) translate(40px); }
  .loader__dot:nth-child(3) { transform: rotate(180deg) translate(40px); }
  .loader__dot:nth-child(4) { transform: rotate(270deg) translate(40px); }

  @keyframes loader-spin {
    to { transform: rotate(360deg); }
  }

  @keyframes loader-spin-reverse {
    to { transform: rotate(-360deg); }
  }

  @keyframes loader-pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.15); }
  }

  @keyframes orbit-rotate {
    to { transform: rotate(360deg); }
  }
`;


export default Loading;
