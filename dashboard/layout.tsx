import type { Metadata } from "next";
import DashboardLayout from "@/dashboard/components/DashboardLayout";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Dashboard - Word Sanctuary Global",
  description: "User dashboard for Word Sanctuary Global ministry platform",
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AuthProvider>
  );
}
