import Menu from "../components/menu";

import { PrismaClient } from "@prisma/client";

export async function IssuedList() {
    const prisma = new PrismaClient();
    const issued = await prisma.issued.findMany({
        include: {
            member: true,
            book: true,
          },
    });

    return issued.length > 0 ? (
        <table className="table-fixed border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300 first">Book</th>
                    <th className="border border-slate-300 second">Issued to</th>
                </tr>
            </thead>
            <tbody>
                {issued.map((value: any, key: any) => {
                    return (
                        <tr key={key}>
                            <td className="border border-slate-300 first">{value.book.title}</td>
                            <td className="border border-slate-300 second">{value.member.name}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    ) : (
        <div>No data</div>
    )
}

export default function Members() {
    return (
        <div>
            <Menu />
            <h1 className="text-3xl">Members</h1>
            <IssuedList />
        </div>
    )
} 