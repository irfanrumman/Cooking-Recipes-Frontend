import { Navbar } from "@/components/shared/navbar";
import { AuthProvider } from "@/lib/authContext";
import { getMe } from "@/service/getMe";

const AuthGroupLayout = async (
    { children }: { children: React.ReactNode }) => {

         const user = await getMe();
  return <div>

    <AuthProvider>
    <Navbar user={user}/>
    {children}
    </AuthProvider>
  </div>;
};

export default AuthGroupLayout;
