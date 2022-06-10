import React from "react";
import styles from "./ProfileCardList.module.css";

type Props = {
  children: React.ReactNode;
};

const ProfileCardList: React.FC<Props> = ({ children }) => (
  <div className={styles.profileCardList}>{children}</div>
);

export default ProfileCardList;
