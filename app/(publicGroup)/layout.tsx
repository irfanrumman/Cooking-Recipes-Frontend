import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

const PublicGroupLayout = async (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
    const user = await getMe();
  return (
    <div className="flex min-h-full flex-col">
      <Navbar user={user}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default PublicGroupLayout