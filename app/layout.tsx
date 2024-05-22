import '@/app/ui/global.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { notoSans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${notoSans.className} antialiasing`} suppressHydrationWarning={true}>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
  );
}
