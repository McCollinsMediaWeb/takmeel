"use client";

// import { getServerSession } from 'next-auth';
import { redirect, usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Head from 'next/head';
import { useSession } from "next-auth/react";
import ProfilePopover from './Components/ProfilePopover';
import Link from 'next/link';
import NewsTable from './Components/NewsTable';
import { useEffect, useState } from 'react';

export default function Home() {
    // const session = await getServerSession();
    const { data: session } = useSession();
    const pathname = usePathname();
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/news?dashboard=true');
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
    }, []);


    if (!session?.user) {
        redirect('/admin/login');
    } else {
        return (
            // <div className={styles.container}>
            //     <Head>
            //         <title>Dashboard</title>
            //     </Head>
            //     <header className={styles.header}>
            //         <h1>Takmeel Admin</h1>
            //         <div className={styles.profileSection} ref={menuRef}>
            //             <span>{session.user.name}</span>
            //             <div className={styles.profileWrapper} onClick={() => setShowMenu(!showMenu)}>
            //                 <img src="/profile.jpg" alt="Profile" className={styles.profileIcon} />
            //                 {showMenu && (
            //                     <div className={styles.dropdownMenu}>
            //                         <div className={styles.dropdownItem}>Settings</div>
            //                         <div className={styles.dropdownItem}>Logout</div>
            //                     </div>
            //                 )}
            //             </div>
            //         </div>
            //     </header>
            //     <div className={styles.sidebar}>
            //         <ul>
            //             <li>Home</li>
            //             <li>Analytics</li>
            //             <li>Users</li>
            //             <li>Projects</li>
            //             <li>Settings</li>
            //         </ul>
            //     </div>
            //     <main className={styles.main}>
            //         <section className={styles.card}>
            //             <h2>Users</h2>
            //             <p>1,234</p>
            //         </section>
            //         <section className={styles.card}>
            //             <h2>Sales</h2>
            //             <p>$12,345</p>
            //         </section>
            //         <section className={styles.card}>
            //             <h2>Performance</h2>
            //             <p>85%</p>
            //         </section>
            //         <section className={styles.card}>
            //             <h2>Tasks</h2>
            //             <p>12 Pending</p>
            //         </section>
            //         <section className={styles.card}>
            //             <h2>Messages</h2>
            //             <p>5 New</p>
            //         </section>
            //     </main>
            // </div>



            <div className={styles.container}>
                <Head>
                    <title>Takmeel - Admin Dashboard</title>
                    <meta name="description" content="Admin Dashboard" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.sidebar}>
                    <div className={styles.logo}>
                        <h1>Takmeel</h1>
                    </div>
                    <div className={styles.userProfile}>
                        <div className={styles.avatar}>
                            {/* <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="User Avatar" /> */}
                            <img src="/Avatar Men.png" alt="User Avatar" />
                            <span className={styles.statusIndicator}></span>
                        </div>
                        <div className={styles.userInfo}>
                            <h3>{session?.user?.name}</h3>
                            <p>Admin</p>
                        </div>
                    </div>
                    <nav className={styles.navigation}>
                        <ul>
                            <Link
                                href="/admin"
                                style={{ textDecoration: 'none' }}
                            >
                                <li className={`${pathname === '/admin' ? styles.active : ''}`}>

                                    <span className={styles.icon}>📊</span>
                                    <span>Dashboard</span>

                                </li>
                            </Link>
                            <Link
                                href="/admin/news"
                                style={{ textDecoration: 'none' }}
                            >
                                <li className={`${pathname === '/admin/news' ? styles.active : ''}`}>
                                    <span className={styles.icon}>📝</span>
                                    <span>News</span>
                                </li>
                            </Link>
                            <Link
                                href="/admin/meta-tags"
                                style={{ textDecoration: 'none' }}
                            >
                                <li className={`${pathname === '/admin/meta-tags' ? styles.active : ''}`}>
                                    <span className={styles.icon}>🏷️</span>
                                    <span>Meta Tags</span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <main className={styles.main}>
                    <header className={styles.header}>
                        {/* <button className={styles.menuButton}>≡</button>
                        <div className={styles.searchBar}>
                            <input type="text" placeholder="Search" />
                        </div> */}
                        <div className={styles.headerActions}>
                            {/* <div className={styles.headerAction}>
                                <span className={styles.icon}>✉️</span>
                                <span>Message</span>
                                <span className={styles.arrow}>▼</span>
                            </div> */}
                            {/* <div className={styles.headerAction}>
                                <span className={styles.icon}>🔔</span>
                                <span>Notification</span>
                                <span className={styles.arrow}>▼</span>
                            </div> */}

                            <ProfilePopover name={session?.user?.name} />

                            {/* <div className={styles.userAction}>
                                <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="User Avatar" />
                                <span>{session?.user?.name}</span>
                                <span className={styles.arrow}>▼</span>
                            </div> */}
                        </div>
                    </header>

                    <div className={styles.content}>
                        <section className={styles.recentSales}>
                            <div className={styles.sectionHeader}>
                                <h2>Recent News</h2>
                                <a href="/admin/news">Show All</a>
                            </div>
                            <NewsTable newsData={newsData} loading={loading} />
                            {/* <div className={styles.tableContainer}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <th>Date</th>
                                            <th>Invoice</th>
                                            <th>Customer</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salesData.map((sale, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" /></td>
                                                <td>{sale.date}</td>
                                                <td>{sale.invoice}</td>
                                                <td>{sale.customer}</td>
                                                <td>{sale.amount}</td>
                                                <td>
                                                    <span className={styles.statusPaid}>{sale.status}</span>
                                                </td>
                                                <td>
                                                    <button className={styles.detailButton}>Detail</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> */}
                        </section>

                        {/* <div className={styles.widgetsRow}>
                            <section className={styles.messagesWidget}>
                                <div className={styles.sectionHeader}>
                                    <h2>Messages</h2>
                                    <a href="#">Show All</a>
                                </div>
                                <div className={styles.messagesList}>
                                    {messagesData.map((message, index) => (
                                        <div key={index} className={styles.messageItem}>
                                            <div className={styles.messageSender}>
                                                <img src="/avatar-placeholder.png" alt="User Avatar" />
                                            </div>
                                            <div className={styles.messageContent}>
                                                <div className={styles.messageHeader}>
                                                    <h4>{message.sender}</h4>
                                                    <span className={styles.messageTime}>{message.time}</span>
                                                </div>
                                                <p>{message.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className={styles.calendarWidget}>
                                <div className={styles.sectionHeader}>
                                    <h2>Calendar</h2>
                                    <a href="#">Show All</a>
                                </div>
                                <div className={styles.calendar}>
                                    <div className={styles.calendarHeader}>
                                        <button onClick={prevMonth} className={styles.calendarNav}>❮</button>
                                        <h3>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
                                        <button onClick={nextMonth} className={styles.calendarNav}>❯</button>
                                    </div>
                                    <div className={styles.calendarGrid}>
                                        {days.map(day => (
                                            <div key={day} className={styles.calendarDay}>{day}</div>
                                        ))}
                                        {calendarDays.map((day, index) => (
                                            <div
                                                key={index}
                                                className={`${styles.calendarCell} ${!day.currentMonth ? styles.otherMonth : ''} ${day.day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear() ? styles.today : ''}`}
                                            >
                                                {day.day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className={styles.todoWidget}>
                                <div className={styles.sectionHeader}>
                                    <h2>To Do List</h2>
                                    <a href="#">Show All</a>
                                </div>
                                <div className={styles.todoForm}>
                                    <form onSubmit={handleAddTodo}>
                                        <input
                                            type="text"
                                            placeholder="Enter task"
                                            value={newTodo}
                                            onChange={(e) => setNewTodo(e.target.value)}
                                        />
                                        <button type="submit">Add</button>
                                    </form>
                                </div>
                                <div className={styles.todoList}>
                                    {todos.map((todo, index) => (
                                        <div key={index} className={styles.todoItem}>
                                            <input type="checkbox" id={`todo-${index}`} />
                                            <label htmlFor={`todo-${index}`}>{todo}</label>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div> */}
                    </div>
                </main>

                {/* <div className={styles.scrollToTop}>
                    <button>↑</button>
                </div> */}
            </div>
        )
    }
}