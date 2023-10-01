import Link from "next/link";

export default function Header() {
    return (
        <ul>
            <li>
                <Link href="/books" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Books
                </Link>
            </li>
            <li>
                <Link href="/members" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Members
                </Link>
            </li>
            <li>
                <Link href="/issued" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Books Issued
                </Link>

            </li>
            <li>
                <Link href="/about" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    About
                </Link>

            </li>
        </ul>

    )
}