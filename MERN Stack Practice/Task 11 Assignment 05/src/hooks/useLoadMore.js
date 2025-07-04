import { useState } from "react";

export default function useLoadMore(items = [], initialCount = 4, step = 4) {
  const data = Array.isArray(items) ? items : [];
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const loadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  const hasMore = visibleCount < data.length;

  const visibleItem = data.slice(0, visibleCount);
  return { visibleItem, loadMore, hasMore };
}
