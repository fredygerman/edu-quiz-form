import { SidebarProvider } from "@/components/ui/sidebar"
import HomeHeader from "@/components/layout/home-header"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-1 flex-col">
        <HomeHeader />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
