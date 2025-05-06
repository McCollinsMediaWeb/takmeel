"use client";

// pages/forms.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './news.module.css';
import sidebarStyles from '../../(root)/styles.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import ProfilePopover from '../../(root)/Components/ProfilePopover';
import AddNewsForm from './Components/addNewsForm';
import NewsTable from '../../(root)/Components/NewsTable';

export default function Forms() {
    // State for handling form inputs if needed
    const { data: session } = useSession();
    const pathname = usePathname();
    const [createNewPage, setCreateNewPage] = useState(false);
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataChanged, setDataChanged] = useState(false);
    const [newsToEdit, setNewsToEdit] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/news');
                const result = await response.json();
                if (result.success) {
                    setNewsData(result.data);
                } else {
                    console.error("Failed to fetch news");
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [dataChanged]);

    if (!session?.user) {
        redirect('/admin/login');
    } else {
        return (
            <div className={sidebarStyles.container}>
                <Head>
                    <title>Takmeel - Admin Dashboard</title>
                    <meta name="description" content="Admin Dashboard" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/* Sidebar - reuse from Dashboard component */}
                <div className={sidebarStyles.sidebar}>
                    <div className={sidebarStyles.logo}>
                        <h1>Takmeel</h1>
                    </div>
                    <div className={sidebarStyles.userProfile}>
                        <div className={sidebarStyles.avatar}>
                            {/* <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="User Avatar" /> */}
                            <img src="/Avatar Men.png" alt="User Avatar" />
                            <span className={sidebarStyles.statusIndicator}></span>
                        </div>
                        <div className={sidebarStyles.userInfo}>
                            <h3>{session?.user?.name}</h3>
                            <p>Admin</p>
                        </div>
                    </div>
                    <nav className={sidebarStyles.navigation}>
                        <ul>
                            <Link
                                href="/admin"
                                style={{ textDecoration: 'none' }}
                            >
                                <li className={`${pathname === '/admin' ? sidebarStyles.active : ''}`}>
                                    <span className={sidebarStyles.icon}>📊</span>
                                    <span>Dashboard</span>
                                </li>
                            </Link>
                            <Link
                                href="/admin/news"
                                style={{ textDecoration: 'none' }}
                            >
                                <li className={`${pathname === '/admin/news' ? sidebarStyles.active : ''}`}>
                                    <span className={sidebarStyles.icon}>📝</span>
                                    <span>News</span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <main className={sidebarStyles.main}>
                    {/* Header - reuse from Dashboard component */}
                    <header className={sidebarStyles.header}>
                        <div className={sidebarStyles.headerActions}>
                            <ProfilePopover name={session?.user?.name} />
                        </div>
                    </header>

                    {/* Forms Content */}
                    <div className={sidebarStyles.content}>
                        <div className={styles.formsRow}>

                            {createNewPage ? <AddNewsForm setCreateNewPage={setCreateNewPage} setDataChanged={setDataChanged} editMode={!!newsToEdit}
                                newsToEdit={newsToEdit} /> : (

                                <section className={styles.recentNews}>
                                    <div className={styles.sectionHeader}>
                                        <h2>News & Updates</h2>
                                        <button type="button" onClick={() => setCreateNewPage(prev => !prev)} className={styles.signInButton}>Add New News</button>
                                    </div>
                                    <NewsTable newsData={newsData} setDataChanged={setDataChanged} setCreateNewPage={setCreateNewPage} setNewsToEdit={setNewsToEdit} loading={loading} />
                                </section>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}