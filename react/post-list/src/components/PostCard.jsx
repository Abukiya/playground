function PostCard({ post, index, onOpen }) {
  const isClickable = typeof onOpen === "function";

  const handleKeyDown = (event) => {
    if (!isClickable) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(post);
    }
  };

  return (
    <article
      onClick={isClickable ? () => onOpen(post) : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? "button" : undefined}
      aria-label={isClickable ? `Open post: ${post.title}` : undefined}
      className={`group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
        isClickable ? "cursor-pointer" : ""
      }`}
    >
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

export default PostCard;
