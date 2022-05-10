const PlayIcon = () => {
    return ( 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x2="1"
            y1="0.5"
            y2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#ee0979"></stop>
            <stop offset="1" stopColor="#ff6a00"></stop>
          </linearGradient>
        </defs>
        <g data-name="Group 422" transform="translate(-25 -288)">
          <circle
            cx="15"
            cy="15"
            r="15"
            fill="url(#linear-gradient)"
            data-name="Ellipse 9"
            transform="translate(25 288)"
          ></circle>
          <path
            fill="#fff"
            d="M128 96.276v9.481a.244.244 0 00.366.225l7.515-4.74a.269.269 0 000-.447l-7.515-4.74a.242.242 0 00-.366.221z"
            transform="translate(-91 201.983)"
          ></path>
        </g>
      </svg>

     );
}
 
export default PlayIcon;