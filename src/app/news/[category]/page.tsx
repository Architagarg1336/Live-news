
import NewsList from '../../NewsList'
import fetchNews from '../../../../lib/fetchNews';
import { categories } from '../../../../constants';

type Props={
  params : {category:Category};
}
async function NewsCategory({params :{category}}:Props) {
  const news:NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className='headerTitle'>{category}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default NewsCategory



//usage of below code
// It pre-generates web pages for specific categories (like business, entertainment, sports, etc.) so they are ready to use when someone visits your site. These pages are created at build time, so they load faster.


export async function generateStaticParams() {
  return categories.map(category=>({
    category:category
  }))
}


//This generates prebuild pages of these categories

//localhost:3000/news/business
//localhost:3000/news/entertainment 
//localhost:3000/news/sports
//localhost:3000/news/general

//this will keep catche files up to date