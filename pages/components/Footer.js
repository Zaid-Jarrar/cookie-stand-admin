function Footer({counter}) {
  return (
    <footer className="px-5 py-3 bg-[#342c2c] fixed bottom-0 left-0 right-0">
      <div className="text-sm text-white">
      {counter} Locations Worldwide
      </div>
      <p className="text-sm text-white">All Copyrights Reserved For Zaid Jarrar &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
