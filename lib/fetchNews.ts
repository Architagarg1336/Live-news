import {gql} from "graphql-request";
import sortNewsByImage from "./sortImageByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  try {
    // GraphQL Query
    const query = gql`
      query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
      ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          countries: "in"
          sort: "published_desc"
          keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            limit
            count
            offset
            total
          }
        }
      }
    `;

    console.log('Sending request with params:', {
      categories: category,
      keywords: keywords,
      apiKey: process.env.MEDIASTACK_API_KEY?.slice(0, 5) + '...' // Log partially hidden API key
    });

    const res = await fetch('https://feidifang.us-east-a.ibm.stepzen.net/api/ornery-quoll/__graphql', {
      method: 'POST',
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const newsResponse = await res.json();
    console.log('Raw API Response:', JSON.stringify(newsResponse, null, 2));

    // Check if the response has the expected structure
    if (!newsResponse?.data?.myQuery) {
      console.error('Invalid API response structure:', newsResponse);
      return {
        pagination: { limit: 0, count: 0, offset: 0, total: 0 },
        data: []
      };
    }

    // Sort function by images vs not images present
    const sortedNews = sortNewsByImage(newsResponse.data.myQuery);
    console.log('Sorted news count:', sortedNews.data.length);
    
    return sortedNews;

  } catch (error) {
    console.error('Error in fetchNews:', error);
    // Return empty response instead of throwing
    return {
      pagination: { limit: 0, count: 0, offset: 0, total: 0 },
      data: []
    };
  }
};
export default fetchNews

//Example usage
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=2215126c8f8291b0ce5a4ba10095a7d8"