import React, { useEffect, useRef, useState } from 'react'
import menuIcon from "../../assets/images/icon-menu.svg"
import menuClose from "../../assets/images/icon-menu-close.svg"

export default function Header() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef()
    console.log(menuRef)


    useEffect(() => {
        const handle = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)
        return () => {
            document.removeEventListener("mousedown", handle)
        }
    })


    return (
        <header>
            <section className="header_container">
                <h1>W.</h1>
                <nav aria-label='Menu Nav'>
                    <ul className={`menu_items ${open ? "show_menu" : "hide_menu"}`}
                        ref={menuRef}>

                        <div className="menu_close" onClick={() => setOpen(!open)}>
                            <img src={menuClose} alt="menu icon close" />
                        </div>

                        <li>
                            <a href="home">Home</a>
                        </li>
                        <li>
                            <a href="new">New</a>
                        </li>
                        <li>
                            <a href="popular">Popular</a>
                        </li>
                        <li>
                            <a href="trending">Trending</a>
                        </li>
                        <li>
                            <a href="categories">Categories</a>
                        </li>
                    </ul>
                    <div className={`${open ? "page" : ""}`}></div>
                </nav>

                <div className="menu-button" onClick={() => setOpen(!open)}>
                    <img src={menuIcon} alt="menu icon" />
                </div>
            </section>
        </header>
    )
}
