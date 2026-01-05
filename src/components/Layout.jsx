import { Navbar, Footer } from '.';

const Layout = ({ children }) => {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
