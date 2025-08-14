"use client";
import React, { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { CiDark, CiDesktop, CiLight } from "react-icons/ci";

const Theme = () => {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        let appliedTheme = "light";

        if (savedTheme?.startsWith("system")) {
            const isDark = savedTheme.includes("dark");
            appliedTheme = isDark ? "dark" : "light";
            setTheme("system");
        } else if (savedTheme === "dark") {
            appliedTheme = "dark";
            setTheme("dark");
        } else {
            appliedTheme = "light";
            setTheme("light");
        }

        document.body.classList.add(appliedTheme);
    }, [theme]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleChangeTheme = (theme: string) => {
        document.body.classList.remove("dark", "light");
        switch (theme) {
            case "system": {
                const prefersDark = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                const systemTheme = prefersDark ? "dark" : "light";
                localStorage.setItem("theme", "system" + systemTheme);
                document.body.classList.add(systemTheme);
                setTheme("system");
                setIsSubMenuOpen(false);
                break;
            }
            case "dark": {
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setTheme("dark");
                setIsSubMenuOpen(false);
                break;
            }
            case "light": {
                document.body.classList.add("light");
                localStorage.setItem("theme", "light");
                setTheme("light");
                setIsSubMenuOpen(false);
                break;
            }
        }
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) //Check if the click is not inside the drop down
            ) {
                setIsSubMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <div>
            <DropDown
                itemArray={["system", "dark", "light"]}
                current={theme}
                setIsSubMenuOpen={setIsSubMenuOpen}
                isSubMenuOpen={isSubMenuOpen}
                dropdownRef={dropdownRef}
                handleActionChanges={handleChangeTheme}
            />
            {["system", "dark", "light"].map((mode, i) => (
                <div key={i}></div>
            ))}

            
        </div>
    );
};
export default Theme;
