
import { headers } from "next/headers";


async function getMembersList() {
    const host = headers().get("host");
    let res;
    if (host?.startsWith("localhost"))
    {
        res = await fetch(`http://${host}/api/members`);
    }
    else{
        res = await fetch(`https://${host}/api/members`);
    }
    return res.json()
}

export default async function Members() {
    const data = await getMembersList()

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
                    {data.members.map((value: any, key: any) => {
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