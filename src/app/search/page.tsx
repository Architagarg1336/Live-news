import React from 'react'
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../NewsList';
import { categories } from '../../../constants';
type Props={
  searchParams?:{term:string}
};

async function SearchPage({searchParams}:Props) {

  const news:NewsResponse = await fetchNews("general",searchParams?.term,true);
  return (
    <div>
      <h1 className="headerTitle">Search Results for :{searchParams?.term}</h1>
      <NewsList news ={news} />
    </div>
  )
}

export default SearchPage
