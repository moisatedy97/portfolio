import { db } from "@/server/db";

export default async function HomePage() {
  const data = await db.query.posts.findMany();

  return (
    <main>
      {data.map((post) => (
        <div key={post.id}>
          <h1>{post.name}</h1>
        </div>
      ))}
    </main>
  );
}
