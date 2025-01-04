import '../styles/globals.css'; // Certifique-se de que o caminho está correto
import { AppProps } from 'next/app'; // Importa os tipos do Next.js para tipagem

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
