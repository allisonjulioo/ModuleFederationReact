import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const GlobalLoading = () => {
  return (
    <Rotate>
      <svg
        width={84}
        height={83}
        viewBox="0 0 84 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.125 41.5c0 17.19-13.935 31.125-31.125 31.125-17.19 0-31.125-13.935-31.125-31.125 0-17.19 13.935-31.125 31.125-31.125 17.19 0 31.125 13.935 31.125 31.125zm-3.42 0C69.704 56.8 57.3 69.204 42 69.204c-15.3 0-27.705-12.403-27.705-27.704C14.295 26.2 26.7 13.795 42 13.795c15.3 0 27.704 12.404 27.704 27.705z"
          fill="url(#paint0_angular_8102_10231)"
        />
        <defs>
          <radialGradient
            id="paint0_angular_8102_10231"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(42 41.5) scale(31.125)"
          >
            <stop offset={0.870974} stopColor="#E6E6E6" />
            <stop offset={0.871747} stopColor="gray" stopOpacity={0.01} />
          </radialGradient>
        </defs>
      </svg>
    </Rotate>
  );
};
