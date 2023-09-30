import { PrismaClient } from "@prisma/client";

export default async function BooksList() {
    const prisma = new PrismaClient();
    const books = await prisma.book.findMany();

    return books.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th className="border border-slate-300 first">Title</th>
                    <th className="border border-slate-300 second">Author</th>
                </tr>
            </thead>
            <tbody>
                {books.map((value: any, key: any) => {
                    return (
                        <tr key={key}>
                            <td className="border border-slate-300 first">{value.title}</td>
                            <td className="border border-slate-300 second">{value.author}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    ) : (
        <div>No data</div>
    )
}