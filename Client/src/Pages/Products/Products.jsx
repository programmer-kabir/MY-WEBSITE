import React from 'react';
import PagesBanner from '../../Share/PagesBanner/PagesBanner';
import FetureTopSection from '../Home/FetureTopSection/FetureTopSection';
import TitleSection from '../../Share/TitleSection/TitleSection';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
  return (
    <div className='w-full'>
      <PagesBanner title={'Responsive Startup Components & Template '} pera={'We offer innovative productivity solutions tailored to the needs of startups, businesses, and developers, empowering them to streamline their design and development processes. Our offerings encompass a wide range of tools and resources, including Startup HTML, Tailwind, Bootstrap, React Components, and customizable templates, all designed to elevate your business to the next level'} btn={'Explore Documents'}></PagesBanner>

      <div className='w-10/12 mx-auto'>
        <FetureTopSection></FetureTopSection>

        <TitleSection MainTitle={'Our Products'} SubTitle={'There are 100+ components and 20+ Template in Bootstrap, Html, Tailwind and React.js. Top 10+ Full stack React theme coming soon....'}></TitleSection>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-20 '>

          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>
          <ProductCard title={'Responsive HTML Template'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto perspiciatis accusamus..'} img={'https://i.ibb.co/SyswpSB/htmltemplete.png'} btn={'see more'} view={'2k+'}></ProductCard>

        </div>

      </div>

    </div>
  );
};

export default Products;