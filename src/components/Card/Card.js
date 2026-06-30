import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ album }) {
    const imageUrl = album?.image || "https://via.placeholder.com/240x240?text=Album";
    const title = album?.title || "Album Name";
    const followCount = album?.followCount ?? 0;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={title} className={styles.image} />
            </div>

            <div className={styles.body}>
                <div className={styles.chipRow}>
                    <Chip
                        label={`${followCount} Follows`}
                        size="small"
                        className={styles.chip}
                    />
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    );
}

export default Card;
