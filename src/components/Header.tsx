

const Header = () => {
  return (
    <nav>
      <div className="w-[90rem] h-[12.5rem] mx-auto flex flex-row items-center justify-between px-[6.25rem]">
        <img
          className="w-[5.8125rem]"
          src="./assets/images/green-blue-medical-cross-doctor-modern-logo.png"
          alt="green-blue-medical-cross-doctor-modern-logo.png"
        />
        <ul className="flex flex-row text-white gap-[1.375rem]">
          {["home", "about us", "services", "doctors", "sign in", "register"].map((nav: string) =>
            <li key={nav}>
              <a className={`capitalize ${nav === "sign in" ? "signin-btn" : ""} ${nav === "register" ? "register-btn" : ""}`} href="">{nav}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
