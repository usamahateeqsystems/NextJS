import { PrismaClient } from "@prisma/client";

async function getMembersList() {
    const prisma = new PrismaClient();
    const members = await prisma.member.findMany();
    return members;
}

export default async function Members() {
    const members = await getMembersList()

    return (
        <div>
            <h1 className="text-3xl">Members</h1>
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
        </div>
    )
} 