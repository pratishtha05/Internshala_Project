import "./globals.css";

export const metadata = {
  title: "Internship Search",
  description: "Internshala Internship Search Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}