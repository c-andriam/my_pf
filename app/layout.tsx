import './globals.css';
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata = {
  title: 'candriam | Ingénieur Logiciel & Systèmes',
  description: 'Portfolio de candriam, spécialisé en développement bas niveau, outils, et systèmes open-source.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${firaCode.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body>
        <main className="container mx-auto max-w-4xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
