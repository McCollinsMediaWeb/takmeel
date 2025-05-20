"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
// import { Heart, MessageCircle } from "lucide-react"
import "./instagramfeed.css"

const SAMPLE_PROFILE = {
    username: "yourbusiness",
    fullName: "Your Business Name",
    profilePicture: "/placeholder.svg?height=150&width=150",
    followers: 1234,
    following: 567,
    posts: 42,
    bio: "Official account of Your Business. Follow us for updates, promotions, and more!",
    isVerified: true,
}

const SAMPLE_POSTS = Array(9)
    .fill(null)
    .map((_, i) => ({
        id: `post-${i}`,
        imageUrl: `/placeholder.svg?height=300&width=300&text=Post ${i + 1}`,
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 100),
        caption: `This is a sample caption for post ${i + 1}. #sample #instagram #feed`,
        url: `https://instagram.com/p/sample-${i}`,
    }))

export default function InstagramFeed() {
    const [profile, setProfile] = useState(SAMPLE_PROFILE)
    const [posts, setPosts] = useState(SAMPLE_POSTS)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <LoadingSkeleton />
    }

    return (
        <div className="instagram-container">
            {/* Profile Header */}
            <div className="instagram-profile">
                <div className="profile-picture">
                    <Image
                        src={profile.profilePicture || "/placeholder.svg"}
                        alt={profile.username}
                        fill
                        className="profile-picture-img"
                    />
                </div>

                <div className="profile-details">
                    <div className="profile-header">
                        <h2 className="profile-username">{profile.username}</h2>
                        {profile.isVerified && <span className="verified-badge">✓</span>}
                    </div>

                    <div className="profile-stats">
                        <div className="stat">
                            <div className="stat-value">{profile.posts}</div>
                            <div className="stat-label">Posts</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">{profile.followers.toLocaleString()}</div>
                            <div className="stat-label">Followers</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">{profile.following.toLocaleString()}</div>
                            <div className="stat-label">Following</div>
                        </div>
                    </div>

                    <div className="profile-bio">
                        <h3 className="profile-fullname">{profile.fullName}</h3>
                        <p className="profile-bio-text">{profile.bio}</p>
                    </div>

                    <button className="instagram-button">Follow on Instagram</button>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="posts-grid">
                {posts.map((post) => (
                    <Link
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={post.id}
                        className="post-card"
                    >
                        <Image
                            src={post.imageUrl || "/placeholder.svg"}
                            alt={`Instagram post ${post.id}`}
                            fill
                            className="post-image"
                        />
                        <div className="post-overlay">
                            <div className="overlay-content">
                                <div className="overlay-icon">
                                    {/* <Heart className="icon" /> */}
                                    <span>{post.likes}</span>
                                </div>
                                <div className="overlay-icon">
                                    {/* <MessageCircle className="icon" /> */}
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ textAlign: "center" }}>
                <Link
                    href={`https://instagram.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-outline"
                >
                    View Full Profile on Instagram
                </Link>
            </div>
        </div>
    )
}

function LoadingSkeleton() {
    return (
        <div className="instagram-container">
            <div className="instagram-profile">
                <div className="profile-picture">
                    <div className="skeleton" />
                </div>

                <div className="profile-details">
                    <div className="profile-header">
                        <div className="skeleton skeleton-text" style={{ width: "8rem", height: "1.5rem" }} />
                    </div>

                    <div className="profile-stats">
                        {Array(3).fill(null).map((_, idx) => (
                            <div className="stat" key={idx}>
                                <div className="skeleton" style={{ width: "2rem", height: "1.25rem", marginBottom: "0.25rem" }} />
                                <div className="skeleton" style={{ width: "3rem", height: "1rem" }} />
                            </div>
                        ))}
                    </div>

                    <div className="profile-bio">
                        <div className="skeleton" style={{ width: "10rem", height: "1.25rem", marginBottom: "0.5rem" }} />
                        <div className="skeleton" style={{ width: "100%", maxWidth: "16rem", height: "1rem" }} />
                    </div>

                    <div className="skeleton" style={{ width: "100%", height: "2.25rem" }} />
                </div>
            </div>

            <div className="posts-grid">
                {Array(9)
                    .fill(null)
                    .map((_, i) => (
                        <div key={i} className="skeleton" style={{ aspectRatio: "1/1", width: "100%" }} />
                    ))}
            </div>
        </div>
    )
}
