import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTopAlbums() {
            try {
                const response = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
                setAlbums(response.data);
            } catch (err) {
                setError("Unable to load albums.");
            } finally {
                setLoading(false);
            }
        }

        fetchTopAlbums();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Top Albums</h2>
                <button type="button" className={styles.collapseButton}>
                    Collapse
                </button>
            </div>

            {loading && <p className={styles.message}>Loading top albums...</p>}
            {error && <p className={styles.message}>{error}</p>}

            {!loading && !error && (
                <div className={styles.grid}>
                    {albums.map((album) => (
                        <Card key={album.id} album={album} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Section;
