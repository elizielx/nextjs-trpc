export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col">
        <a className="text-blue-300 hover:text-blue-500" href="/server">
          Server Component
        </a>
        <a className="text-blue-300 hover:text-blue-500" href="/client">
          Client Component
        </a>
      </div>
    </main>
  );
}
