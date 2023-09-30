import Menu from "../components/menu";
import BooksList from "./books";

export default function Books() {
    return (
        <div>
            <Menu />
            <h1 className="text-3xl">Books</h1>
            <BooksList />
        </div>
    )
} 