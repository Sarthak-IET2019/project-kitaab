import { CODES } from "@/globals/globals";
import { AuthServices } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
const Navbar = () => {
  const router = useRouter();
  const [logoutView, setLogoutView] = useState(true);

  // Handle visibility of logout based on routes
  useEffect(() => {
    if (router.asPath === "/") setLogoutView(false);
    else setLogoutView(true);
  }, [router.asPath]);

  //   Handle Logout
  const HandleLogout = async () => {
    let responseCode = await AuthServices?.HandleUserLogout();
    if (responseCode === CODES?.SUCCESS) {
      alert("Logged out successfully");
      router.push("/");
    } else {
      alert("Cannot log you out!");
    }
  };
  return (
    <div className=" w-full bg-white flex px-8 py-2 sticky top-0 justify-between items-center z-40 shadow-sm">
      <div className="w-1/2 text-3xl font-extrabold text-text text-left">
        किताब
      </div>
      {logoutView && (
        <div className="relative w-1/2 flex justify-end gap-x-4 items-center">
          <Link href={"/topics"} className="font-medium font-poppins underline">
            अनुक्रमणिका
          </Link>
          <button
            className="outline-none bg-accent text-white font-medium p-2 rounded-full font-poppins hover:bg-hoverBg transition-all flex items-center justify-center gap-x-2"
            onClick={HandleLogout}
          >
            <MdLogout size={"20px"} />
          </button>
          <button className="outline-none bg-accent text-white font-medium p-2 rounded-full font-poppins hover:bg-hoverBg transition-all flex items-center justify-center gap-x-2">
            <Link href={"/admin"} className="font-medium font-poppins">
              <RiAdminFill size={"20px"} />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
