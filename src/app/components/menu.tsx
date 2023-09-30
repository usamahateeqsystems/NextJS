import Link from "next/link";

export default function Menu() {
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
        </ul>

    )
}