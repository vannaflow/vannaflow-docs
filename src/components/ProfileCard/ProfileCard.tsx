import React from "react";
import styles from "./ProfileCard.module.scss";

type Props = {
  fullName: string;
  description: string;
};

const ProfileCard: React.FC<Props> = ({ fullName, description }) => (
  <div className={styles.profileContainer}>
    <img
      src={require(`/img/${fullName}.jpg`).default}
      alt={fullName}
      className={styles.profilePicture}
    />
    <div>
      <h2>{fullName}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default ProfileCard;
