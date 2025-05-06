"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
    // const [news, setNews] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);
    // const [hasMore, setHasMore] = useState(true);

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(0);

    const initialLimit = 7;
    const subsequentLimit = 6;

    const fetchNews = async (currentSkip = 0, limit = initialLimit) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/news?skip=${currentSkip}&limit=${limit}`);
            const newData = response.data.data;

            if (currentSkip === 0) {
                setNews(newData);
            } else {
                setNews((prev) => [...prev, ...newData]);
            }

            const totalCount = response.data.totalCount;
            const totalFetched = currentSkip + newData.length;
            setHasMore(totalFetched < totalCount);

            setSkip(totalFetched); // update new skip value
        } catch (error) {
            console.error("Failed to fetch news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(0, initialLimit);
    }, []);

    const loadMore = () => {
        if (hasMore) {
            fetchNews(skip, subsequentLimit);
        }
    };

    return (
        <GlobalDataContext.Provider value={{ news, loading, loadMore, hasMore }}>
            {children}
        </GlobalDataContext.Provider>
    );
};


export const useGlobalData = () => useContext(GlobalDataContext);

