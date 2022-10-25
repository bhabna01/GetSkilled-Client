import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';


const Categories = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h1>This category has{categories.length}</h1>
            {
                categories.map(category => <CourseCard key={category._id}
                    category={category}>
                </CourseCard>)
            }

        </div>
    );
};

export default Categories;