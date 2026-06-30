import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ album, metricKey = "followCount", metricLabel = "Follows" }) {
    const imageUrl = album?.image || "https://via.placeholder.com/240x240?text=Album";
    const title = album?.title || album?.name || "Item";
    const metric =
        album?.[metricKey] ?? album?.followCount ?? album?.likes ?? album?.likeCount ?? 0;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={title} className={styles.image} />
            </div>

            <div className={styles.body}>
                <div className={styles.chipRow}>
                    <Chip label={`${metric} ${metricLabel}`} size="small" className={styles.chip} />
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    );
}

export default Card;
