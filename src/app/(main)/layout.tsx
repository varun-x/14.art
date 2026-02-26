import { AppNavBar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div>
      <AppNavBar />
      {children}
    </div>
  );
}
