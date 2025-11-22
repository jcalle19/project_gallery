import "./globals.css";
import { RefProvider } from './contexts/refContext.jsx';
import { SocketProvider } from './contexts/socketContext.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RefProvider>
        <SocketProvider>
          <body>
            {children}
          </body>
        </SocketProvider>
      </RefProvider>
    </html>
  );
}
