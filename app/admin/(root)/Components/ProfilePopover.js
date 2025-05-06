import { useEffect, useRef, useState } from 'react';
import styles from '../styles.module.css';
import { signOut } from 'next-auth/react';

function ProfilePopover({ name }) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef(null);

    // Close popover when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.profilePopoverContainer} ref={popoverRef}>
            <div
                className={styles.userAction}
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="User Avatar" /> */}
                <img src="/Avatar Men.png" alt="User Avatar" />
                <span>{name}</span>
                <span className={styles.arrow}>▼</span>
            </div>

            {isOpen && (
                <div className={styles.profilePopover}>
                    <div className={styles.profileHeader}>
                        {/* <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="User Avatar" /> */}
                        <img src="/Avatar Men.png" alt="User Avatar" />
                        <div>
                            <h4>{name}</h4>
                            <p>Admin</p>
                        </div>
                    </div>

                    <div className={styles.profileDivider}></div>

                    <ul className={styles.profileMenu}>
                        <li>
                            <span className={styles.menuIcon}>👤</span>
                            <span>My Profile</span>
                        </li>
                        <li className={styles.logoutItem} onClick={() => signOut()}>
                            <span className={styles.menuIcon}>🚪</span>
                            <span>Logout</span>
                        </li>
                        {/* <li>
                            <span className={styles.menuIcon}>⚙️</span>
                            <span>Account Settings</span>
                        </li>
                        <li>
                            <span className={styles.menuIcon}>🔒</span>
                            <span>Privacy Settings</span>
                        </li> */}
                    </ul>

                    {/* <div className={styles.profileDivider}></div>

                    <ul className={styles.profileMenu}>
                        <li>
                            <span className={styles.menuIcon}>❓</span>
                            <span>Help Center</span>
                        </li>
                        <li className={styles.logoutItem}>
                            <span className={styles.menuIcon}>🚪</span>
                            <span>Logout</span>
                        </li>
                    </ul> */}
                </div>
            )}
        </div>
    );
}

export default ProfilePopover;