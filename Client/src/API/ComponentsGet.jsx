import { useQuery } from '@tanstack/react-query';

const ComponentsGet = () => {
    const {refetch, data: components = [],isLoading:loading} = useQuery({
        queryKey: ["components"],
        queryFn:async()=>{
          const res = await fetch('/navComponents.json');
          return res.json(
          );
        }
      })
      return [components,refetch,loading,]
};

export default ComponentsGet;