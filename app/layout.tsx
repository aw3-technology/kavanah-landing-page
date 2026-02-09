import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Kavanah",
    description: "AI-powered task manager. Capture every idea in 3 seconds. AI organizes them instantly. Turn scattered thoughts into shipped projects.",
    metadataBase: new URL('https://kavanah.vercel.app'),
    openGraph: {
        title: "Kavanah",
        description: "AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects.",
        url: "https://kavanah.vercel.app",
        siteName: "Kavanah",
        images: [
            {
                url: "/kavanah-social-share.png",
                width: 1954,
                height: 1144,
                alt: "Kavanah",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kavanah",
        description: "AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects.",
        images: ["/kavanah-social-share.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
