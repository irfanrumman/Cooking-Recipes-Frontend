"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllUsers = async (role?: "USER" | "AUTHOR" | "ADMIN") => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    const params = new URLSearchParams();
    if (role) {
        params.set("role", role);
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/users?${params.toString()}`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: "no-cache",
        });

        return await res.json();
    } catch {
        return {
            success: false,
            message: "Unable to reach the server. Please try again later."
        }
    }
}

export const getAllPosts = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts`, {
            headers: {
                Cookie: `accessToken=${accessToken}`
            },
            cache: "no-cache",
        });

        return await res.json();
    } catch {
        return {
            success: false,
            message: "Unable to reach the server. Please try again later."
        }
    }
}

export const toggleFeatured = async (postId: string, isFeatured: boolean) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in!"
        }
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/${postId}`, {
            method: "PATCH",
            headers: {
                Cookie: `accessToken=${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ isFeatured })
        });

        const result = await res.json();

        if (result.success) {
            revalidateTag("featured-posts", { expire: 0 });
            revalidateTag("public-posts", { expire: 0 });
            revalidateTag("premium-posts", { expire: 0 });
        }

        return result;
    } catch {
        return {
            success: false,
            message: "Unable to reach the server. Please try again later."
        }
    }
}
