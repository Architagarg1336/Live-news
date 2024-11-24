// type Article = {
//   author: string | null;
//   category: string;
//   country: string;
//   description: string;
//   image: string | null;
//   language: string;
//   published_at: string;
//   source: string;
//   title: string;
//   url: string;
// }

// type Pagination = {
//   count: Int;
//   limit: Int;
//   offset: Int;
//   total: Int;
// }


// type NewsResponse = {
//   pagination: {
//     limit: number;
//     count: number;
//     offset: number;
//     total: number;
//   };
//   data: Array<{
//     author: string | null;
//     category: string;
//     country: string;
//     description: string;
//     image: string | null;
//     language: string;
//     published_at: string;
//     source: string;
//     title: string;
//     url: string;
//   }>;
// };


// type Category = 
// | "business"
// | "entertainment"
// | "general"
// | "health"
// | "science"
// | "sports"
// | "technology"





type Category = 
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

type Pagination = {
    count: number;
    limit: number;
    offset: number;
    total: number;
};

type NewsResponse = {
    data: Article[];
    pagination: Pagination;
};