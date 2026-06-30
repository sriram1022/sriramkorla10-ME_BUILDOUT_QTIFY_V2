import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Songs.module.css";

function Songs() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("all");

    useEffect(() => {
        let mounted = true;
        async function fetchGenres() {
            try {
                const res = await axios.get("https://qtify-backend.labs.crio.do/genres");
                if (mounted) setGenres(res.data?.data || []);
            } catch (err) {
                setGenres([]);
            }
        }
        fetchGenres();
        return () => {
            mounted = false;
        };
    }, []);

    function renderContent({ items: songs }) {
        // items is array of songs
        const allTabs = [{ id: "all", name: "All" }, ...genres.map((g) => ({ id: g.id || g._id || g.name, name: g.name }))];

        const filtered = selectedGenre === "all" ? songs : songs.filter((s) => {
            // try multiple checks to match genre
            if (!s) return false;
            if (!selectedGenre) return true;
            if (s.genre && (s.genre.id === selectedGenre || s.genre._id === selectedGenre || s.genre.name === selectedGenre)) return true;
            if (s.genreId && (s.genreId === selectedGenre || s.genreId === selectedGenre)) return true;
            if (s.genre === selectedGenre || s.genre === (genres.find(g => g.id === selectedGenre)?.name)) return true;
            return false;
        });

        return (
            <div>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }} className={styles.tabsWrapper}>
                    <Tabs
                        value={selectedGenre}
                        onChange={(e, val) => setSelectedGenre(val)}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="song genres"
                        className={styles.tabs}
                    >
                        {allTabs.map((t) => (
                            <Tab key={t.id} label={t.name} value={t.id} className={styles.tab} />
                        ))}
                    </Tabs>
                </Box>

                <div style={{ marginTop: 16 }}>
                    <Carousel items={filtered} renderItem={(s) => (
                        <Card album={s} metricKey="likes" metricLabel="Likes" />
                    )} />
                </div>
            </div>
        );
    }

    return (
        <Section title="Songs" endpoint="https://qtify-backend.labs.crio.do/songs" renderContent={renderContent} allowCollapse={false} />
    );
}

export default Songs;
