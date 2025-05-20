const BASE_URL = process.env.PUBLIC_BASE_URL

export default async function Home() {
  const notes = await fetch(`${BASE_URL}/api/notes`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  
  return (
    <main>
     <h1>Hello World</h1> 
     {
      notes.map(note => {
        return (
          <p key={note.id}>{note.content}</p>
        )
      })
     }
    </main>
  );
}
