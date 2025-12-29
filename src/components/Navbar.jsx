import React from "react";
import NavItem from "./NavbarItem";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-20 py-8 text-[10px] z-[100] pointer-events-none">
            <div className="flex items-center gap-4 tracking-tight pointer-events-auto">
                <NavItem text="About" />
                <NavItem text="Our Fleet" />
                <NavItem text="Advantages" />
                <NavItem text="Global" />
            </div>

            {/* Empty space in middle for the animated logo to land */}
            <div className="w-[150px]" />

            <div className="flex items-center gap-4 tracking-tight pointer-events-auto">
                <NavItem text="+971 54 432 5050" />
                <NavItem text="info@jeskojets.com" />
            </div>
        </div>
    );
};

export default Navbar;