const Layout = ({ children }) => {
  return (
    <div className="w-[min(1280px,calc(100%-4rem))] mx-auto min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
