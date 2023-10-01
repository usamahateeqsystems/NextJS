import { PrismaClient } from "@prisma/client";

export async function BooksItem(Id: any) {
    const prisma = new PrismaClient();
    const book = await prisma.book.findFirst({
        where: {
            id: {
                equals: parseInt(Id)
            }
        },
        include: {
            issued: {
                include: {
                    member: true,
                }
            },
        },
    });
    return book
}


export default async function Book({ params }: any) {
    const id = params.id
    const book = await BooksItem(parseInt(id));
    return book ? (
        <div>
            <h1 className="text-3xl">{book.title}
            </h1>
            <p>Written By: {book.author}</p>
            <h1 className="text-3xl">Issued to</h1>
            {book.issued.map((value: any, key: any) => {
                return (
                    <p>--{value.member.name}</p>
                );
            })}
        </div>
    ) : (
        <div>No Data</div>
    )
}