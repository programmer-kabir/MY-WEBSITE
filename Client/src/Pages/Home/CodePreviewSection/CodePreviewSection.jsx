import React, { useState } from 'react';
import TitleSection from '../../Share/TitleSection/TitleSection';
import { Box, Tab, Tabs } from '@mui/material';
import TabsCard from '../../../Components/TabsCard/TabsCard';

const CodePreviewSection = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='w-10/12 mx-auto'>
            <TitleSection
                MainTitle={'Available in HTML, CSS, Tailwind Components'}
                SubTitle={
                    'There are many features added to components, and here shows the code. We provide the best design quality and clean code. All code is for free!'
                }
            ></TitleSection>
            {/* tabs for show basic components  */}
            <div className=' '> 
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="HTML" />
                        <Tab label="Tailwind" />
                        <Tab label="Bootstrap" />
                        <Tab label="React" />
                    </Tabs>
                </Box>
                {/* Render tab content based on the selected value */}
                {value === 0 && <div><TabsCard></TabsCard></div>}
                {value === 1 && <div><TabsCard></TabsCard></div>}
                {value === 2 && <div><TabsCard></TabsCard></div>}
                {value === 3 && <div><TabsCard></TabsCard></div>}
            </div>
        </section>
    );
};

export default CodePreviewSection;
