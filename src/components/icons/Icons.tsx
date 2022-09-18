import { IconsType } from "./Icons.props";

import IconsSVG from "./icons.svg";
import styles from "./Icon.module.scss";

function Icons({ name, color, width, height }: IconsType): JSX.Element {
  return (
    <svg
      className={`${styles.icon}`}
      fill={color}
      stroke={color}
      width={width}
      height={height}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
