import React from "react";
import NavItem from "./NavbarItem";

const Navbar = () => {
    return (
        <div className="sticky top-0 flex items-center justify-between px-20 py-6 text-[10px] z-10">
            <div className="flex items-center gap-4 tracking-tight">
                <NavItem text="About" />
                <NavItem text="Our Fleet" />
                <NavItem text="Advantages" />
                <NavItem text="Global" />
            </div>

            <div className="flex items-center gap-4 tracking-tight">
                <NavItem text="+971 54 432 5050" />
                <NavItem text="info@jeskojets.com" />
            </div>
        </div>
    );
};

export default Navbar;
