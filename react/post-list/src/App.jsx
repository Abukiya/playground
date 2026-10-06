import { fetchposts } from "./api/getpost";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import PostSkeleton from "./components/PostSkeleton";
import ErrorMessage from "./components/ErrorMessage";
import PostDetail from "./components/PostDetail";
import {
  useHashRoute,
  navigateToPost,
  navigateToList,
} from "./hooks/useHashRoute";

function App() {
  const [post, setpost] = useState([]);
  const [ispostloading, setispostLoading] = useState(true);
  const [error, setError] = useState(null);
  const route = useHashRoute();

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

  const selectedPost =
    route.name === "post" ? post.find((p) => p.id === route.id) : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header count={post.length} isLoading={ispostloading} />

      {route.name === "post" ? (
        <main className="mx-auto max-w-3xl px-6 py-10">
          <PostDetail
            key={route.id}
            id={route.id}
            post={selectedPost ?? null}
            onBack={navigateToList}
          />
        </main>
      ) : (
        <main className="mx-auto max-w-6xl px-6 py-10">
          {ispostloading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <PostSkeleton key={i} />
              ))}
            </div>
          )}

          {!ispostloading && error && <ErrorMessage message={error} />}

          {!ispostloading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {post.map((p, i) => (
                <PostCard
                  key={p.id}
                  post={p}
                  index={i}
                  onOpen={(selected) => navigateToPost(selected.id)}
                />
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
