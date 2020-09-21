import { css } from '@emotion/core';
import React from 'react';
import ArticleCard from '../components/articleCard';
import Layout from '../components/layout';

// temporary data for testing
const data = {
  title: 'טיפים להתנהלות נכונה עם העברות בפנטזי',
  summery: `עוד מעט הפרמייר ליג תחזור לחיינו ואיתה גם משחק הפנטזי פרמייר ליג המוכר
  והאהוב. בינתיים אנחנו, שחקני הפנטזי, עומלים על בניית הקבוצה שתשמש
  אותנו במהלך העונה. אלא שהטור הזה לא הולך לעסוק בבניית הקבוצה אלא
  בהעברות בזמן העונה, כנראה החלק הכי טריקי במשחק הפנטזי.`,
  image: 'boy-with-football.png',
  author: guest
  publishedDate: 'ספטמבר 9, 2020',
  language: 'he',
  slug: 'blog/1',
};

export default function Home() {
  return (
    <Layout maxWidth="1170">
      <div
        css={css`
          margin-top: 3.35rem;
        `}
      >
        <ArticleCard data={data} />
      </div>
    </Layout>
  );
}
