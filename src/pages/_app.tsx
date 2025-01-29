import '../styles/globals.css';
import { AppProps } from 'next/app';
import AppProvider from '../contexts/AppContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import {  ModalProvider } from '../contexts/ModalContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <> 
      <AppProvider>
        <ThemeProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </AppProvider>
    </>
    );
}
