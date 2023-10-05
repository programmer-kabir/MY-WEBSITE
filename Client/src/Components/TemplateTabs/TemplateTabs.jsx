import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs'
import Card from '../Card/Card';
const TemplateTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='w-12/12 mx-auto flex justify-center items-center  my-10'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Business</Tab>
                    <Tab>Agency</Tab>
                    <Tab>E-commerce</Tab>
                    <Tab>Dashboard</Tab>

                </TabList>
                <TabPanel>
                <div className='w-8/12 grid grid-cols-2 gap-10 justify-center'>
                        <Card></Card>
                        <Card></Card>
                </div>
                </TabPanel>
                <TabPanel>
                <div className='w-8/12 grid grid-cols-2 gap-10 justify-center'>
                        <Card></Card>
                        <Card></Card>
                </div>
                </TabPanel>
                <TabPanel>
                <div className='w-8/12 grid grid-cols-2 gap-10 justify-center'>
                        <Card></Card>
                        <Card></Card>
                </div>
                </TabPanel>
                <TabPanel>
                <div className='w-8/12 grid grid-cols-2 gap-10 justify-center'>
                        <Card></Card>
                        <Card></Card>
                </div>
                </TabPanel>
                <TabPanel>
                <div className='w-8/12 grid grid-cols-2 gap-10 justify-center'>
                        <Card></Card>
                        <Card></Card>
                </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default TemplateTabs;