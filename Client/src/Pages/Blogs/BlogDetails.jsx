import React from 'react';
import { useParams } from 'react-router-dom';
import TitleSection from '../../Share/TitleSection/TitleSection';
import fakeBlogs from './fakeBlogs';

const BlogDetails = () => {
    const {id} = useParams()
    console.log(id);
    const [blogs] = fakeBlogs();
    return (
        <div className='pt-6'>
            <TitleSection MainTitle={`Blog Details`}/>
        </div>
    );
};

export default BlogDetails;