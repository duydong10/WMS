// src/components/Header.jsx
// --------------------------------------------------------
import { createTheme, ThemeProvider } from "flowbite-react";
import { Navbar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'
import useDarkModeDetector from "./DarkMode.jsx";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { FaUserLock } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiArrowRightSFill } from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const HeaderTheme = createTheme({
    navbar: {
        "root": {
            "base": "bg-white px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
            "rounded": {
                "on": "rounded",
                "off": ""
            },
            "bordered": {
                "on": "border",
                "off": ""
            },
            "inner": {
                "base": "mx-auto flex flex-wrap items-center justify-between",
                "fluid": {
                    "on": "",
                    "off": "container"
                }
            }
        },
        "brand": {
            "base": "flex items-center"
        },
        "collapse": {
            "base": "w-full md:block md:w-auto",
            "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
            "hidden": {
                "on": "hidden",
                "off": ""
            }
        },
        "link": {
            "base": "block py-2 pl-3 pr-4 md:p-0",
            "active": {
                "on": "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
                "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
            },
            "disabled": {
                "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                "off": ""
            }
        },
        "toggle": {
            "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
            "icon": "h-6 w-6 shrink-0",
            "title": "sr-only"
        },
        dropdown: {
            "arrowIcon": "ml-2 h-4 w-4",
            "content": "py-1 focus:outline-none",
            "floating": {
                "animation": "transition-opacity",
                "arrow": {
                    "base": "absolute z-10 h-2 w-2 rotate-45",
                    "style": {
                        "dark": "bg-gray-900 dark:bg-gray-700",
                        "light": "bg-white",
                        "auto": "bg-white dark:bg-gray-700"
                    },
                    "placement": "-4px"
                },
                "base": "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
                "content": "py-1 text-sm text-gray-700 dark:text-gray-200",
                "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
                "header": "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
                "hidden": "invisible opacity-0",
                "item": {
                    "container": "",
                    "base": "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                    "icon": "mr-2 h-4 w-4"
                },
                "style": {
                    "dark": "bg-gray-900 text-white dark:bg-gray-700",
                    "light": "border border-gray-200 bg-white text-gray-900",
                    "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                },
                "target": "w-fit"
            },
            "inlineWrapper": "flex items-center"
        }
    }
})


export default function HeaderFormat() {
    const isDarkMode = useDarkModeDetector();
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <>
            <ThemeProvider theme={HeaderTheme}>
                <Navbar fluid rounded>
                    <a href="https://tanhungha.com.vn" className="flex">
                        {isDarkMode ? (
                            <img src={logoDark} className="mr-3 h-6 sm:h-9" alt="Logo" />
                        ) : (<img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />)}
                    </a>
                    <div className="flex flex-row" onClick={() => {
                        setShow(false);
                        setMenu(s => !s);
                    }}>
                        <Dropdown
                            className="mx-2"
                            arrowIcon={false}
                            label={
                                <>
                                    <div className="hidden lg:flex items-center">
                                        <span>Menu</span>
                                        {/* <IoIosArrowDown className="ml-2 h-4 w-4" /> */}
                                        {menu ? (
                                            <IoIosArrowUp className="ml-2 h-4 w-4" />
                                        ) : (
                                            <IoIosArrowDown className="ml-2 h-4 w-4" />
                                        )}
                                    </div>
                                    <MdOutlineMenu className="h-6 w-6 block lg:hidden" />
                                </>
                            }>
                            <DropdownHeader className="flex items-center">
                                <MdAccountCircle className="mr-2 h-4 w-4" />
                                <span className="block text-sm">Hello, {localStorage.getItem("account")}</span>
                            </DropdownHeader>
                            <DropdownDivider />
                            <DropdownItem href="/change_password" icon={FaUserLock}>Change Password</DropdownItem>
                            <DropdownItem icon={IoLanguage}>Change Language</DropdownItem>
                            <DropdownDivider />
                            <button type="button" className="flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white lg:hidden">
                                <IoMdSettings className="mr-2 h-4 w-4" />
                                <div onClick={e => {
                                    e.stopPropagation();
                                    setShow(s => !s);
                                }}>
                                    AGV Controller
                                </div>
                            </button>
                            <div className="lg:hidden flex flex-col">
                                {show && (
                                    <div className="flex flex-col pl-1">
                                        <DropdownItem href="/create_task" icon={RiArrowRightSFill}>Create Task</DropdownItem>
                                        <DropdownItem href="/continue_task" icon={RiArrowRightSFill}>Continue Task</DropdownItem>
                                        <DropdownItem href="/cancel_task" icon={RiArrowRightSFill}>Cancel Task</DropdownItem>
                                        <DropdownItem href="/agv_callback" icon={RiArrowRightSFill}>AGV Callback</DropdownItem>
                                    </div>
                                )}
                            </div>
                            <DropdownDivider className="lg:hidden" />
                            <DropdownItem href="/login" icon={HiLogout} onClick={() => {
                                localStorage.removeItem("jwtToken"),
                                    localStorage.removeItem("account")
                            }}>
                                Sign out
                            </DropdownItem>
                        </Dropdown>
                    </div>
                </Navbar>
            </ThemeProvider>
        </>
    )
};