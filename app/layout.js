import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { AppContextProvider } from "@/Context/AppContext";

export const metadata = {
  title: "DeepSeek App",
  description: "FullStack app - DeepSeek",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className="">{children}</body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
