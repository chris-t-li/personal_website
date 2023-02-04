function NavBar() {
    return (
        <header>
            <div id="socialMedia">
                <ul>
                    <li><a href="https://twitter.com/au_chrisli" target="_blank" className="fa-brands fa-twitter"></a></li>
                    <li><a href="https://www.linkedin.com/in/chris-t-li/" target="_blank" className="fa-brands fa-linkedin"></a>
                    </li>
                    <li><a href="https://github.com/chris-t-li" target="_blank" className="fa-brands fa-github"></a></li>
                    <li><a href="https://medium.com/@chris.lty07" target="_blank" className="fa-brands fa-medium"></a></li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li><a href="#aboutMe">Intro</a></li>
                    <li><a href="#tech-stack">TechStack</a></li>
                    <li><a href="#work">Projects</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;