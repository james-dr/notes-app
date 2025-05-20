import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
    const data = await req.json();
    const note = await prisma.note.create({
        data: {
            title: data.title,
            content: data.content,
        },
    });
    return Response.json(note);
}