function CommentList({ comments }) {
  if (comments.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
        No comments yet.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
              {comment.name.charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                {comment.name}
              </p>
              <p className="truncate text-xs text-slate-400">{comment.email}</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {comment.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
