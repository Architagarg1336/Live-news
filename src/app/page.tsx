import React from 'react'
import { categories } from '../../constants';
import fetchNews from '../../lib/fetchNews';
import NewsList from './NewsList';
import response from '../../response.json';

 async function HomePage() {
  //fetch the news data
  const news : NewsResponse = response || await fetchNews(categories.join(","));   // Passed as string => 'General, Buisness,Entertainment,Science,Health,Sports,Technology'

  console.log(news);
  
  return (
    <div>
      <NewsList news = {news} />
    </div>
  )
}

export default HomePage
