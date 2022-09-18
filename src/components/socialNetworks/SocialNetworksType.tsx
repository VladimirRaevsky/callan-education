import React from "react";

import { SocialNetworksType } from "./SocialNetworksType.props";

import styles from "./SocialNetworks.module.scss";
import cl from "classnames";

function SocialNetworks({ header = true }: SocialNetworksType): JSX.Element {
  return (
    <div className={styles["social-networks-wrapper"]}>
      <div
        className={cl(styles["social-networks-icon"], {
          [styles["header-icon"]]: header,
        })}
      ></div>
    </div>
  );
}

export default SocialNetworks;
