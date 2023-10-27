import { getPage } from "../../shared/lib/index.js";

export default () => {
    return getPage({
        title: "Каталог",
        body: `
            <h1>Каталог</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">Каталог</a>
                    </li>
                    <li>
                        <a href="/catalog.html">Каталог</a>
                    </li>
                </ul>
            </nav>
        `
    })
}