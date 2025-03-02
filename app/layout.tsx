import { Metadata } from "next";
import React from "react";
import "@/src/styles/main.scss";

export const metadata: Metadata = {
  title: "Mystic Square",
  description: "Fun mysterious puzzle game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app-container">
          {children}
          <footer className="footer">
            <div className="social-links">
              <a
                href="https://eabdelmaksoud.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="noselect"
                  src="/pp1.png"
                  height={32}
                  width={32}
                />
              </a>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
