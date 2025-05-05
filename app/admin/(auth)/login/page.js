"use client";

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from "./styles.module.css"
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginPage = () => {

    const { data: session } = useSession();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();


    useEffect(() => {
        if (session?.user) {
            router.replace("/admin");
        }
    }, [session, router]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);

        if (!email || !password) {
            setError("Please fill in all fields")
            return
        }



        setError("")


        try {
            setIsLoading(true)

            let options = { redirect: false, email, password };
            const res = await signIn("credentials", options);
            console.log("response", res);

            // If authentication is successful, redirect to dashboard
            router.push("/admin")
        } catch (error) {
            setError("Invalid email or password")
        } finally {
            setIsLoading(false)
        }
    }


    if (!session?.user) {
        return (
            <div className={styles.container}>
                <div className={styles.loginWrapper}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Welcome back</h2>
                        <p className={styles.subtitle}>Sign in to your account to continue</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Login</h3>
                            <p className={styles.cardDescription}>Enter your credentials to access your account</p>
                        </div>

                        <div className={styles.cardContent}>
                            {error && (
                                <div className={styles.errorAlert}>
                                    <p>{error}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <span className={styles.inputIcon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </span>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <div className={styles.passwordHeader}>
                                        <label htmlFor="password" className={styles.label}>
                                            Password
                                        </label>
                                        <Link href="/forgot-password" className={styles.forgotPassword}>
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <span className={styles.inputIcon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                        </span>
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={styles.input}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className={styles.passwordToggle}
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                                    <line x1="2" x2="22" y1="2" y2="22" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitButton} disabled={isLoading}>
                                    {isLoading ? "Signing in..." : "Sign in"}
                                </button>
                            </form>
                        </div>

                        {/* <div className={styles.cardFooter}>
                            <div className={styles.divider}>
                                <span>Or continue with</span>
                            </div>
    
                            <div className={styles.socialButtons}>
                                <button className={styles.socialButton}>Google</button>
                                <button className={styles.socialButton}>GitHub</button>
                            </div>
    
                            <div className={styles.signupText}>
                                Don't have an account?{" "}
                                <Link href="/register" className={styles.signupLink}>
                                    Sign up
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }

    return null;

};

export default LoginPage;