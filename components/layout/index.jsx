import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col h-screen mostly-customized-scrollbar">
        <Navbar />
        <div className="w-full flex flex-grow font-poppins">{children}</div>
      </div>
    </>
  );
};

export default Layout;
