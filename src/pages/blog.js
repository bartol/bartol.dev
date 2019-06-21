import React from 'react'
// import Search from '../components/Search'
import styled from '@emotion/styled'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch, Hits, connectSearchBox, connectStats,
} from 'react-instantsearch-dom'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import Exit from '../../static/exit.svg'
import SEO from '../components/SEO'

const searchClient = algoliasearch('YMC567Y2Z5', '433ac749b039503ffe3f555236fdced1')

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .numOfHits {
    /* background-color: red; */
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-right: 0.75rem;
    font-size: 1.1rem;
    color: var(--parameters);
    line-height: 1.7;
  }
`

const Input = styled.input`
  -webkit-appearance: none;
  background-color: var(--bg);
  width: 175px;
  padding: 6px 8px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  border: 2px solid var(--parameters);
  border-radius: var(--radius);
  color: var(--heading);

  :focus {
    border-color: var(--main);
    outline: none;
  }

  ::placeholder {
    color: var(--parameters);
  }

  ::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;

    /* Now your own custom styles */
    height: 10px;
    width: 10px;
    /* margin-right: 2px; */
    margin-left: 5px;
    background: url(${Exit});
    cursor: pointer;

    /* Will place small red box on the right of input (positioning carries over) */
  }
`

const Search = ({ currentRefinement, /* isSearchStalled, */ refine }) => (
  <form noValidate action="" role="search" onSubmit={event => event.preventDefault()}>
    <Input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder="Search posts"
      aria-label="Search posts"
      autoFocus={typeof window !== 'undefined' && window.innerWidth >= 1025}
    />
    {/* {isSearchStalled ? 'Search is stalled' : ''} */}
  </form>
)

const CustomSearchBox = connectSearchBox(Search)

const Stats = ({ nbHits }) => <div className="numOfHits">{nbHits}</div>

const CustomStats = connectStats(Stats)

export default () => (
  // const posts = usePosts()

  <Layout>
    <SEO title="Posts" />
    <InstantSearch searchClient={searchClient} indexName="blog">
      <FlexBox>
        <h1>Posts</h1>
        <FlexBox>
          <CustomStats />
          <CustomSearchBox />
        </FlexBox>
      </FlexBox>
      <Hits hitComponent={PostPreview} />
    </InstantSearch>
    {/* {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))} */}
  </Layout>
)
