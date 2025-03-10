import Navbar from "./general/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
};

export default Layout;
