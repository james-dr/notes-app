import prisma from "@/lib/prisma"

export const GET = async (req: Request) => {
    const notes = await prisma.note.findMany();
    return new Response(JSON.stringify(notes), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}
