import { css } from '@emotion/core';
import React from 'react';
import ArticleCard from '../components/articleCard';
import Layout from '../components/layout';
import SmallCard from '../components/smallCard';

// temporary data for testing
const mainArticleData = {
  title: 'טיפים להתנהלות נכונה עם העברות בפנטזי',
  summery: `עוד מעט הפרמייר ליג תחזור לחיינו ואיתה גם משחק הפנטזי פרמייר ליג המוכר
  והאהוב. בינתיים אנחנו, שחקני הפנטזי, עומלים על בניית הקבוצה שתשמש
  אותנו במהלך העונה. אלא שהטור הזה לא הולך לעסוק בבניית הקבוצה אלא
  בהעברות בזמן העונה, כנראה החלק הכי טריקי במשחק הפנטזי.`,
  image: 'boy-with-football.png',
  imageDescription: 'ילד עם כדור',
  author: guest
  publishedDate: 'ספטמבר 9, 2020',
  language: 'he',
  slug: 'blog/1',
};

const cardData = {
  title: '"מציאות" העונה במשחק הפנטזי של הפרמייר ליג לעונת 20/21',
  subTitle: 'איך לא להישאר בלי כסף אחרי בחירת כל השחקנים הטובים.',
  summery: '',
  image: 'dog-with-football.png',
  imageDescription: 'כלב עם כדור',
  author: guest
  publishedDate: 'ספטמבר 14, 2020',
  language: 'he',
  slug: 'blog/',
};

const cards = Array.from({ length: 9 }, (_, i) => {
  return { ...cardData, slug: cardData.slug + i };
});

export default function Home() {
  return (
    <Layout maxWidth="1170">
      <div
        css={css`
          margin-top: 3.35rem;
        `}
      >
        <ArticleCard data={mainArticleData} />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 10%;
            margin: 3.35rem 0;
          `}
        >
          {cards.map(card => (
            <SmallCard key={card.slug} data={card} type="small" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
