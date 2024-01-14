// HomeIcon.js
import styles from "./../styles/Header.module.css";
const HomeIcon = ({ color }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.Image}
    >
      <g>
        <path
          d="M33.3333 66.6667V46.6667H46.6666V66.6667H63.3333V40H73.3333L40 10L6.66663 40H16.6666V66.6667H33.3333Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_133_22">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
