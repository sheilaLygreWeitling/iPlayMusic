import { motion } from 'framer-motion'
import { useContext } from 'react';
import { ThemeContext } from '../../../components/context/ThemeContext';

const PulseFigure2 = () => {
  const {theme} = useContext(ThemeContext)

    return ( 
      <svg className={`${theme === 'dark' && 'opacity-60'}`}

      xmlns="http://www.w3.org/2000/svg"
      width="590.891"
      height="480.76"
      viewBox="0 0 590.891 480.76"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ee0979"></stop>
          <stop offset="1" stopColor="#ff6a00"></stop>
        </linearGradient>
      </defs>
      <g data-name="Asset 2" transform="rotate(-165.02 292.362 206.02)">
        <g transform="translate(-.001 -.003)">
          <path
            fill="url(#linear-gradient)"
            d="M76.833 171.067Q69.589 173 62.5 175.619c27.659 28.473 58.514 53.711 87.026 59.832 24.192 5.191 54.234-6.063 77.651-11.1a789.2 789.2 0 00100.275-28.608c4.9-1.762 9.8-3.564 14.682-5.462a1404.477 1404.477 0 00-150.809-23.243c-38.196-3.757-77.225-5.888-114.492 4.029z"
            data-name="Path 637"
            transform="translate(58.559 153.567)"
          ></path>
          <path
            fill="#f2bc06"
            d="M252.459 172.079c46.331 1.937 88.885-28.55 120.787-64.964 26.226-29.945 47.648-64.5 72.654-95.49-1.356-.194-2.712-.426-4.068-.581-37.5-4.532-74.727 4.261-111.393 12.609s-74.165 16.27-111.548 10.072c-31.146-5.268-60.916-20.067-91.713-28.3S62.331-3.658 36.609 17.048C7.187 40.678-4.086 88.036 1.3 131.714c15.592-14.527 34.109-24.638 54.583-27.33 69.166-9.104 126.963 64.867 196.576 67.695z"
            data-name="Path 638"
            transform="translate(.001 .003)"
          ></path>
          <path
            fill="#d70060"
            d="M416.638 127.732c-24.076 35.136-42.38 77.942-77.787 99-38.312 22.817-86.309 13.345-126.539-5.21s-77.322-45.58-119.489-58.112c-26.362-7.748-56.287-8.426-81.583 1.356 12.086 24.831 27.911 47.493 44.549 68.18 14.817 18.343 33.838 41.625 54.679 63.066q7.089-2.615 14.333-4.552c37.266-9.917 76.3-7.748 114.492-4.009A1404.606 1404.606 0 01390.1 310.694c46.6-18.052 92.256-43.232 123.808-87.762 34.865-49.179 47.145-127.6 15.379-182.613-.988-1.7-2.034-3.332-3.1-4.959a270.123 270.123 0 00-109.552 92.372z"
            data-name="Path 639"
            transform="translate(10.533 33.135)"
          ></path>
          <path
            fill="#f18d05"
            d="M445.272 6c-25.006 30.991-46.486 65.642-72.654 95.587-31.9 36.414-74.455 66.863-120.787 64.964-69.613-2.925-127.411-76.9-196.579-67.734C34.779 101.51 16.262 111.62.67 126.089a222.945 222.945 0 001.937 12.551 223.251 223.251 0 0018.459 53.614c25.3-9.685 55.222-9.162 81.583-1.356 42.167 12.493 79.259 39.494 119.489 58.108s88.227 28.027 126.539 5.21c35.407-21.054 53.711-63.919 77.787-99a270.124 270.124 0 01109.611-92.348C514.594 29.359 479.73 11.094 445.272 6z"
            data-name="Path 640"
            transform="translate(.629 5.627)"
          ></path>
        </g>
      </g>
    </svg>
    );
  }
 
export default PulseFigure2;