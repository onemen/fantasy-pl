import styled from '@emotion/styled';
import { Link as RouterLink } from '@reach/router';
import Img from 'gatsby-image';
import { rankings as matchSorterRankings } from 'match-sorter';
import React from 'react';
import theme from '../../styles/theme';
import MatchSorterWorker from './match-sorter.worker';

let matchSorterWorker;

function getMatchSorterWorker() {
  if (!matchSorterWorker) {
    matchSorterWorker = new MatchSorterWorker();
  }
  return matchSorterWorker;
}

function BlogPostCard({ blogpost }) {
  const { slug, title, description, keywords, banner } = blogpost;

  return (
    <div
      css={{
        margin: 25,
        width: 320,
        background: theme.colors.white,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        padding: 30,
      }}
    >
      <RouterLink to={slug} css={{ color: 'initial' }}>
        <h2 css={{ marginTop: 0, lineHeight: 1.4 }}>{title}</h2>
        <Img fluid={banner.childImageSharp.fluid} alt={keywords.join(', ')} />
        <div css={{ margin: '16px 0 0 0' }}>{description}</div>
      </RouterLink>
    </div>
  );
}
BlogPostCard = React.memo(BlogPostCard);

function useQueryParamState(searchParamName) {
  const [value, setValue] = React.useState(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    const searchParams = new URL(window.location).searchParams;
    if (searchParams.has(searchParamName)) {
      return searchParams.get(searchParamName);
    } else {
      return '';
    }
  });

  React.useEffect(() => {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set(searchParamName, value);
    if (value) {
      window.history.replaceState(window.history.state, '', newUrl);
    } else {
      newUrl.searchParams.delete(searchParamName);
      window.history.replaceState(window.history.state, '', newUrl);
    }
  }, [searchParamName, value]);

  return [value, setValue];
}

const CategoryButton = styled.button([
  {
    cursor: 'pointer',
    padding: '2px 4px',
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 3,
    fontSize: 12,
    margin: '2.5px',
  },
  ({ isSelected }) => {
    const selectedStyles = {
      color: theme.colors.white,
      backgroundColor: theme.colors.link_color_hover,
    };
    const unselectedStyles = {
      color: theme.colors.link_color_hover,
      backgroundColor: theme.colors.white,
    };
    return isSelected
      ? { '&&&': { ...selectedStyles, ':hover': selectedStyles } }
      : { '&&&': { ...unselectedStyles, ':hover': unselectedStyles } };
  },
]);

function Intersection({ onVisible }) {
  const target = React.useRef(null);
  const onVisibleRef = React.useRef(onVisible);

  React.useEffect(() => {
    onVisibleRef.current = onVisible;
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const isIntersecting = entries.some(e => e.isIntersecting);
      if (isIntersecting) {
        onVisibleRef.current();
      }
    });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={target} />;
}

function Search(props) {
  // this will be the same every time and because this re-renders on every
  // keystroke I'm pretty sure useMemo is appropriate here.
  const blogposts = React.useMemo(() => {
    return props.blogposts.edges.map(e => ({
      ...e.node.fields,
      excerpt: e.node.excerpt,
    }));
  }, [props.blogposts.edges]);

  const categories = React.useMemo(
    () => Array.from(new Set(blogposts.flatMap(post => post.categories))),
    [blogposts]
  );

  const [search, setSearch] = useQueryParamState('q');
  const [filteredBlogPosts, setFilteredBlogPosts] = React.useState(
    // if there's a search, let's wait for it to load
    // otherwise let's initialize to the blogposts
    search ? [] : blogposts
  );

  const [maxPostsToRender, setMaxPostsToRender] = React.useState(10);
  const blogPostsToDisplay = filteredBlogPosts.slice(0, maxPostsToRender);
  React.useEffect(() => {
    if (!search) {
      setFilteredBlogPosts(blogposts);
    }
    getMatchSorterWorker()
      .searchAndSort(blogposts, search, {
        keys: [
          {
            key: 'title',
            threshold: matchSorterRankings.CONTAINS,
          },
          {
            key: 'categories',
            threshold: matchSorterRankings.CONTAINS,
            maxRanking: matchSorterRankings.CONTAINS,
          },
          {
            key: 'keywords',
            threshold: matchSorterRankings.CONTAINS,
            maxRanking: matchSorterRankings.CONTAINS,
          },
          {
            key: 'description',
            threshold: matchSorterRankings.CONTAINS,
            maxRanking: matchSorterRankings.CONTAINS,
          },
        ],
      })
      .then(
        results => setFilteredBlogPosts(results),
        error => {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      );
  }, [blogposts, search]);

  function handleCategoryClick(category) {
    setSearch(s => {
      if (s.includes(category)) {
        return s.split(category).join('').trim();
      }
      return `${s.trim()} ${category}`.trim();
    });
  }

  function handlePreventSubmit(event) {
    // the form is used only to enable https://support.mozilla.org/en-US/kb/how-search-from-address-bar
    // we want to prevent an actual submit (page reload) when pressing Enter
    event.preventDefault();
  }

  return (
    <>
      <div css={{ maxWidth: 500, margin: 'auto' }}>
        <div css={{ position: 'relative', color: '#000000' }}>
          <form action="/blog" method="GET" onSubmit={handlePreventSubmit}>
            <input
              name="q" /* the GET query parameter in SITE_URL/blog/?q=test */
              css={{ width: '100%', paddingLeft: 50 }}
              onChange={event => setSearch(event.target.value)}
              type="search"
              placeholder="חיפוש בארכיון"
              aria-label="חיפוש בארכיון"
              value={search}
              autoFocus
            />
          </form>
          <div
            css={{
              position: 'absolute',
              left: 14,
              top: 10,
              opacity: 0.6,
              fontSize: '0.8rem',
            }}
          >
            {filteredBlogPosts.length}
          </div>
        </div>
        <div>
          {categories.map(category => (
            <CategoryButton
              key={category}
              onClick={() => handleCategoryClick(category)}
              isSelected={search.includes(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </div>
      <div
        css={{
          marginTop: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {blogPostsToDisplay.map(blogpost => (
          <BlogPostCard key={blogpost.id} blogpost={blogpost} />
        ))}
      </div>
      {maxPostsToRender < filteredBlogPosts.length ? (
        <>
          <div
            css={{
              marginTop: 20,
              textAlign: 'center',
              color: 'var(--link_color)',
              fontWeight: 'bold',
            }}
          >
            רוצה להמשיך? מציג את כל המאמרים...
          </div>
          <Intersection onVisible={() => setMaxPostsToRender(Infinity)} />
        </>
      ) : null}
    </>
  );
}

export default Search;

/* eslint no-func-assign: "off" */
/* eslint jsx-a11y/no-autofocus: "off" */
