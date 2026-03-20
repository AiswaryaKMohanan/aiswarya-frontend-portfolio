import "./globals.css";

export const metadata = {
  title: "Aiswarya Kotharambath | Senior Frontend Developer",
  description: "Senior Frontend Developer (React, TypeScript) – Dubai Ready",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
