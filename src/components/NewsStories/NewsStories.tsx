import { NewsStoriesElement } from "@/components/NewsStories/NewsStoriesElement/NewsStoriesElement.tsx";

import css from "./NewsStories.module.css";

export const NewsStories = () => {
  return (
    <div className={css.newsSlider}>
      <NewsStoriesElement />
      <NewsStoriesElement />
      <NewsStoriesElement />
    </div>
  );
};
