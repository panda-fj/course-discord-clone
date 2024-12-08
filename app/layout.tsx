import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";


const openSans = Open_Sans({
    weight: "400",
    variable: "--font-open-sans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            afterSignOutUrl="/"
        >
            <html lang="ja-JP" suppressHydrationWarning>
                <body
                    className={cn(openSans.variable, "font-open_sans bg-white dark:bg-[#313338] antialiased")}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
