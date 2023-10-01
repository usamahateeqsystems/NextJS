import { PrismaClient } from "@prisma/client";
import Link from "next/link";

async function BooksList() {
    const prisma = new PrismaClient();
    const books = await prisma.book.findMany();

    return books.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th className="border border-slate-300 first">Title</th>
                    <th className="border border-slate-300 second">Author</th>
                    <th className="border border-slate-300 second">Detail</th>
                </tr>
            </thead>
            <tbody>
                {books.map((value: any, key: any) => {
                    return (
                        <tr key={key}>
                            <td className="border border-slate-300 first">{value.title}</td>
                            <td className="border border-slate-300 second">{value.author}</td>
                            <td className="border border-slate-300 second">
                                <Link href={`/books/${value.id}`}>
                                    View
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    ) : (
        <div>No data</div>
    )
}

export default function Books() {
    return (
        <div>
            <h1 className="text-3xl">Books</h1>
            <BooksList />
        </div>
    )
} 