import type { FC } from "react";
import css from "./IndexPage.module.css";

import { Page } from "@/components/Page.tsx";
import { Header } from "@/components/Header/Header.tsx";
import { NewsStories } from "@/components/NewsStories/NewsStories.tsx";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className={css.pageContainer}>
        <Header />
        <NewsStories />
      </div>
    </Page>
  );
};
