import { useQuery } from '@tanstack/react-query';

const ComponentsGet = () => {
    const {refetch, data: components = [],isLoading:loading} = useQuery({
        queryKey: ["components"],
        queryFn:async()=>{
          const res = await fetch(`${import.meta.env.VITE_LOCAL_SERVER}/components`);
          return res.json(
          );
        }
      })
      return [components,refetch,loading,]
};

export default ComponentsGet;