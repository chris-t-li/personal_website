import hailmary from "../assets/books/projectHailMary.jpeg";
import stolenfocus from "../assets/books/stolen_focus.jpg";
import thepremonition from "../assets/books/thePremonition.jpeg";
import cryptography from "../assets/books/cryptography.jpeg";

function Books() {
    return (
        <section id="books">
            <div className="container">
                <h2>Books</h2>
                <h3>What I've been reading...</h3>
                <div>
                    <article>
                        <a href="https://www.goodreads.com/book/show/54493401-project-hail-mary" target="_blank">

                            <img
                                src={hailmary} alt="Project Hail Mary" /></a>
                    </article>
                    <article>
                        <a href="https://stolenfocusbook.com/" target="_blank"><img src={stolenfocus}
                            alt="Stolen Focus Cover" /></a>
                    </article>
                    <article>
                        <a href="https://wwnorton.com/books/9781324004295" target="_blank"><img
                            src={cryptography} alt="Cryptography" /></a>
                    </article>
                    <article>
                        <a href="https://wwnorton.com/books/9780393881554" target="_blank"><img
                            src={thepremonition} alt="The Premonition" /></a>
                    </article>
                </div>
                <div>
                    <a href="#contact" className="fa-solid fa-arrow-down"></a>
                </div>
            </div>
        </section>
    )
}

export default Books;