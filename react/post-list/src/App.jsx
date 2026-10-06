import { fetchposts } from "./api/getpost";
import { useState, useEffect } from "react";

function PostCard({ post, index }) {
  return (
    <article className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          {index + 1}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
          Post #{post.id}
        </span>
      </div>

      <h2 className="text-lg font-semibold capitalize leading-snug text-slate-900 transition group-hover:text-slate-700">
        {post.title}
      </h2>

      <p className="text-sm leading-relaxed text-slate-600">{post.body}</p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
        <span>User {post.userId}</span>
        <span className="font-medium text-slate-500 transition group-hover:text-slate-700">
          Read more →
        </span>
      </div>
    </article>
  );
}

function PostSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="size-9 rounded-full bg-slate-200" />
        <div className="h-5 w-20 rounded-full bg-slate-100" />
      </div>
      <div className="mt-4 h-4 w-3/4 rounded bg-slate-200" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-11/12 rounded bg-slate-100" />
        <div className="h-3 w-2/3 rounded bg-slate-100" />
      </div>
      <div className="mt-5 h-3 w-full rounded bg-slate-100" />
    </div>
  );
}

function App() {
  const [post, setpost] = useState([]);
  const [ispostloading, setispostLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getpost() {
      try {
        const data = await fetchposts();
        setpost(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setispostLoading(false);
      }
    }
    getpost();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
              P
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900">Post List</h1>
              <p className="text-xs text-slate-500">Latest 10 posts</p>
            </div>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
            {ispostloading ? "Loading…" : `${post.length} posts`}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {ispostloading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </div>
        )}

        {!ispostloading && error && (
          <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-700">Could not load posts</p>
            <p className="mt-1 text-sm text-red-600">{error}</p>
          </div>
        )}

        {!ispostloading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {post.map((p, i) => (
              <PostCard key={p.id} post={p} index={i} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
