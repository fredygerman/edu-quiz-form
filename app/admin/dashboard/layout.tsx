import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
