function ErrorMessage({ message }) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p className="font-medium text-red-700">Could not load posts</p>
      <p className="mt-1 text-sm text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;
