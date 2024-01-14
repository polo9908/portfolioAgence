import React from "react";
import styles from "./../styles/Header.module.css";
function WorkIcon({color}) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.Image}
    >
      <g clip-path="url(#clip0_133_5)">
        <path
          d="M66.6666 20H40L33.3333 13.3334H13.3333C9.66663 13.3334 6.69996 16.3334 6.69996 20L6.66663 60C6.66663 63.6667 9.66663 66.6667 13.3333 66.6667H66.6666C70.3333 66.6667 73.3333 63.6667 73.3333 60V26.6667C73.3333 23 70.3333 20 66.6666 20ZM66.6666 60H13.3333V26.6667H66.6666V60Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_133_5">
          <rect width="80" height="80" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WorkIcon;
