import { CODES } from "@/globals/globals";
import { AuthServices } from "@/services/auth.service";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { MdLogout } from "react-icons/md";
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
    <div className=" w-full bg-gradient-to-r from-blue to-purple flex px-8 py-4 sticky top-0 justify-between items-center">
      <div className="text-2xl font-bold text-white text-left">किताब</div>
      {logoutView && (
        <div>
          <button
            className="outline-none bg-white text-purple font-medium p-4 rounded-full font-poppins hover:scale-125 transition-all"
            onClick={HandleLogout}
          >
            <MdLogout size={"20px"} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
