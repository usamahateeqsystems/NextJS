import Menu from "../components/header";

import { PrismaClient } from "@prisma/client";

export async function MembersList() {
    const prisma = new PrismaClient();
    const members = await prisma.member.findMany();

    return members.length > 0 ? (
        <table className="table-fixed border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300 first">Name</th>
                    <th className="border border-slate-300 second">Email</th>
                </tr>
            </thead>
            <tbody>
                {members.map((value: any, key: any) => {
                    return (
                        <tr key={key}>
                            <td className="border border-slate-300 first">{value.name}</td>
                            <td className="border border-slate-300 second">{value.email}</td>
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
            <h1 className="text-3xl">Members</h1>
            <MembersList />
        </div>
    )
} 