'use client';

import '@/app/ui/global.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { inter } from '@/app/ui/fonts';
import { StyleProvider } from '@ant-design/cssinjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${inter.className} antialiasing`} suppressHydrationWarning={true}>
            <StyleProvider hashPriority="high">
                <AntdRegistry>{children}</AntdRegistry>
            </StyleProvider>
        </body>
      </html>
  );
}
