import { useEffect, useState } from "react";

function parseHash(hash) {
  const match = /^#\/posts\/(\d+)$/.exec(hash);
  if (match) {
    return { name: "post", id: Number(match[1]) };
  }
  return { name: "list" };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export function navigateToPost(id) {
  window.location.hash = `#/posts/${id}`;
}

export function navigateToList() {
  window.location.hash = "#/";
}
