"use client"

import Link from "next/link";

const ErrorPage  = () => {
    return (
        <div>
            <span className="error">Error loading user!</span>
            <Link className="error__link" href="/">Return Home</Link>
        </div>
    )
};

export default ErrorPage;