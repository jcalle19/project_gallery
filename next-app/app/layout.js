import "./css/globals.css";
import { RefProvider } from './contexts/refContext.jsx';
import { SocketProvider } from './contexts/socketContext.jsx';
import { StateProvider } from './contexts/stateContext.jsx';
import { UIProvider } from './contexts/uiContext.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RefProvider>
        <StateProvider>
          <UIProvider>
            <SocketProvider>
              <body>
                {children}
              </body>
            </SocketProvider>
          </UIProvider>
        </StateProvider>
      </RefProvider>
    </html>
  );
}
