import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
    title = "Top Albums",
    endpoint = "https://qtify-backend.labs.crio.do/albums/top",
    renderContent,
    allowCollapse = true,
}) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const response = await axios.get(endpoint);
                setAlbums(response.data);
            } catch (err) {
                setError("Unable to load albums.");
            } finally {
                setLoading(false);
            }
        }

        fetchAlbums();
    }, [endpoint]);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>{title}</h2>
                {allowCollapse && (
                    <button
                        type="button"
                        className={styles.collapseButton}
                        onClick={() => setCollapsed((c) => !c)}
                    >
                        {collapsed ? "Show All" : "Collapse"}
                    </button>
                )}
            </div>

            {loading && <p className={styles.message}>Loading albums...</p>}
            {error && <p className={styles.message}>{error}</p>}

            {!loading && !error && (
                <>
                    {renderContent ? (
                        renderContent({ items: albums, collapsed, setCollapsed })
                    ) : collapsed ? (
                        <Carousel items={albums} renderItem={(a) => <Card key={a.id} album={a} />} />
                    ) : (
                        <div className={styles.grid}>
                            {albums.map((album) => (
                                <Card key={album.id} album={album} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </section>
    );
}

export default Section;
