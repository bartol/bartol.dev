import React from 'react'
// import Search from '../components/Search'
import styled from '@emotion/styled'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch, Hits, connectSearchBox, connectStats,
} from 'react-instantsearch-dom'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import Exit from '../../static/x.svg'
import SEO from '../components/SEO'
import NoHits from '../components/no-hits'

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
  max-width: 175px;
  width: 45vw;
  padding: 6px 6px 6px 8px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.9rem;
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
    height: 0.95rem;
    width: 0.95rem;

    /* margin-right: 2px; */
    margin-left: 5px;
    background: url(${Exit});
    cursor: pointer;
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
    {/* {isSearchStalled ? <NoHits /> : ''} */}
  </form>
)

const CustomSearchBox = connectSearchBox(Search)

const Stats = ({ nbHits }) => {
  if (nbHits === 0) {
    return (
      <>
        <div className="numOfHits">{nbHits}</div>
        <NoHits />
      </>
    )
  }
  return <div className="numOfHits">{nbHits}</div>
}

const CustomStats = connectStats(Stats)

export default () => (
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
  </Layout>
)
