import classNames from "classnames";
import styles from "./Gap.module.scss";

interface Props {
  height: string | number;
  width: string | number;
}

export default function Gap({ height, width }: Partial<Props>) {
  return <div className={classNames(styles["gap--big"])} />;
}
