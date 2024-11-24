'use client'

import { useRouter } from "next/navigation";

type Props ={
  article :Article
};


function ReadMoreButton({article}: Props) {
  const router = useRouter();

  const handleClick = () =>{

    const queryString = Object.entries(article)
      .map(([key, value]) => {
        // Handle null/undefined values
        if (value === null || value === undefined) {
          value = '';
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");

    const url = `/article?${queryString}`;
    router.push(url);
  }
  return (
 <button onClick={handleClick} className="bg-orange-300 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-400 w-full">Read More</button>
  )
}

export default ReadMoreButton
