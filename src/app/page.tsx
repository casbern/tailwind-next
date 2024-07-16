export default function Home() {
  return (
    <div className="h-screen bg-slate-900 p-8 text-slate-100">
      <h1 className="flex items-center gap-3 text-5xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500">
        Hello
      </h1>
      <h1 className="size-3">World</h1>

      <button
        disabled
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Signin
      </button>
    </div>
  )
}
