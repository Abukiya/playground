function Header({ count, isLoading }) {
  return (
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
          {isLoading ? "Loading…" : `${count} posts`}
        </span>
      </div>
    </header>
  );
}

export default Header;
