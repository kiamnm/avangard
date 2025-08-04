
import "./globals.css";
import TheamProvider from "./TheamProvider";
import "bootstrap/dist/css/bootstrap.min.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no"></meta>
      </head>
      <body >
        <TheamProvider>
          {children}
        </TheamProvider>
        
      </body>
    </html>
  );
}
