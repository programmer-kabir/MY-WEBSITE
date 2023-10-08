import { useQuery } from '@tanstack/react-query';
import React from 'react';
const fakeBlogs = () => {
    const {refetch, data: blogs = [], isLoading:loading} = useQuery({
        queryKey: ["blogs"],
        queryFn:async()=>{
          const res = await fetch('./blogs.json');
          return res.json(
          );
        }
      })
      return [blogs,refetch,loading,]
};

export default fakeBlogs;