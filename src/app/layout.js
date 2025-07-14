
import "./globals.css";
import TheamProvider from "./TheamProvider";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <TheamProvider>
          {children}
        </TheamProvider>
        
      </body>
    </html>
  );
}
