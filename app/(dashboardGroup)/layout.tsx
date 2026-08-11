import { Navbar } from "@/components/shared/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getMe } from "@/service/getMe";
import DashboardSidebar from "./_components/DashboardSidebar";
import { Footer } from "@/components/shared/footer";

const DashboardLayout = async (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
   const user = await getMe();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar user={user} />
          <div className="flex flex-1 min-w-0 flex-col">
            <div className="sticky top-14 z-40 flex items-center gap-2 border-b border-border bg-background px-4 py-2 sm:top-16 md:hidden">
              <SidebarTrigger />
              <span className="text-sm font-medium">Menu</span>
            </div>
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </div>
      </SidebarProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;