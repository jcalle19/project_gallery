import "./css/globals.css";
import { RefProvider } from './contexts/refContext.jsx';
import { SocketProvider } from './contexts/socketContext.jsx';
import { StateProvider } from './contexts/stateContext.jsx';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RefProvider>
        <StateProvider>
          <SocketProvider>
            <body>
              {children}
            </body>
          </SocketProvider>
        </StateProvider>
      </RefProvider>
    </html>
  );
}
