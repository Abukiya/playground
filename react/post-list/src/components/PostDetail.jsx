import { useEffect, useState } from "react";
import { fetchpost, fetchcomments } from "../api/getpost";
import CommentList from "./CommentList";
import CommentSkeleton from "./CommentSkeleton";
import PostSkeleton from "./PostSkeleton";
import ErrorMessage from "./ErrorMessage";

function PostDetail({ id, post: initialPost, onBack }) {
  const [post, setPost] = useState(initialPost);
  const [isPostLoading, setIsPostLoading] = useState(initialPost == null);
  const [postError, setPostError] = useState(null);

  const [comments, setComments] = useState([]);
  const [areCommentsLoading, setAreCommentsLoading] = useState(true);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    if (initialPost) return;
    let cancelled = false;

    async function loadPost() {
      try {
        const data = await fetchpost(id);
        if (!cancelled) setPost(data);
      } catch (err) {
        if (!cancelled) setPostError(err.message);
      } finally {
        if (!cancelled) setIsPostLoading(false);
      }
    }
    loadPost();

    return () => {
      cancelled = true;
    };
  }, [id, initialPost]);

  useEffect(() => {
    let cancelled = false;

    async function loadComments() {
      try {
        const data = await fetchcomments(id);
        if (!cancelled) setComments(data);
      } catch (err) {
        if (!cancelled) setCommentsError(err.message);
      } finally {
        if (!cancelled) setAreCommentsLoading(false);
      }
    }
    loadComments();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (postError) {
    return (
      <div className="space-y-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
        >
          ← Back to posts
        </button>
        <ErrorMessage message={postError} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
      >
        ← Back to posts
      </button>

      {isPostLoading ? (
        <PostSkeleton />
      ) : (
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
              Post #{post.id}
            </span>
            <span className="text-xs text-slate-400">User {post.userId}</span>
          </div>

          <h1 className="mt-4 text-2xl font-semibold capitalize leading-snug text-slate-900">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {post.body}
          </p>
        </article>
      )}

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">Comments</h2>
          {!areCommentsLoading && !commentsError && (
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
              {comments.length}
            </span>
          )}
        </div>

        {areCommentsLoading && <CommentSkeleton />}

        {!areCommentsLoading && commentsError && (
          <ErrorMessage message={commentsError} />
        )}

        {!areCommentsLoading && !commentsError && <CommentList comments={comments} />}
      </section>
    </div>
  );
}

export default PostDetail;
