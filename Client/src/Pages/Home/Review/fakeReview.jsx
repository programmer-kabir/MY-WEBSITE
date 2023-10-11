import { useQuery } from '@tanstack/react-query';
import React from 'react';
const fakeReview = () => {
    const {refetch, data: reviews = [], isLoading:loading} = useQuery({
        queryKey: ["reviews"],
        queryFn:async()=>{
          const res = await fetch('./reviews.json');
          return res.json(
          );
        }
      })
      return [reviews,refetch,loading,]
};

export default fakeReview;