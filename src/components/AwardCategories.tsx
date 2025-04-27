import React from 'react'
import {
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
  AiOutlineGlobal,
  AiOutlineRead,
} from 'react-icons/ai';
import { MdSportsKabaddi } from 'react-icons/md';
import { BsTreeFill, BsPeopleFill, BsLaptop } from 'react-icons/bs';
import { GiHandGrip, GiTeacher } from 'react-icons/gi';
import { HiOutlineScale } from 'react-icons/hi2';
import { RiAwardLine } from 'react-icons/ri';

interface AwardCategory {
  title: string;
  description: string;
  icon: string;
}

const AwardCategories: React.FC = () => {  
  const categories = [
    {      
      title: 'BEST SCHOOL (INFRASTRUCTURE)',      
      icon: '/icons/infrastructure.svg',    
      IconComponent: AiOutlineFundProjectionScreen,
    },    
    {      
      title: 'BEST SCHOOL (SPORTS FACILITIES)',      
      icon: '/icons/sports.svg',    
      IconComponent: MdSportsKabaddi,
    },    
    {      
      title: 'BEST SCHOOL (ECO-FRIENDLY)',      
      icon: '/icons/eco-friendly.svg',    
      IconComponent: AiOutlineGlobal,
    },    
    {      
      title: 'BEST SCHOOL (FACILITIES FOR STUDENTS WITH SPECIAL NEEDS)',      
      icon: '/icons/special-needs.svg',    
      IconComponent: GiHandGrip,
    },    
    {      
      title: 'BEST SCHOOL (ACADEMIC PERFORMANCE)',      
      icon: '/icons/academic.svg',    
      IconComponent: AiOutlineRead,
    },    
    {      
      title: 'BEST SCHOOL (CLEAN AND HYGIENIC ENVIRONMENT)',      
      icon: '/icons/hygiene.svg',    
      IconComponent: BsTreeFill,
    },    
    {      
      title: 'BEST SCHOOL (INNOVATIVE TEACHING PRACTICES)',      
      icon: '/icons/teaching.svg', 
      IconComponent: AiOutlineBulb,   
    },    
    {      
      title: 'BEST SCHOOL (BUDGET-FRIENDLY WITH MAXIMUM FACILITIES)',      
      icon: '/icons/budget.svg',    
      IconComponent: HiOutlineScale,
    },    
    {      
      title: 'BEST SCHOOL (DIGITAL)',      
      icon: '/icons/digital.svg',   
      IconComponent: BsLaptop, 
    },  
  ];
  const awardCategories = [
    {
      title: 'HIGHLY DYNAMIC PRINCIPAL AWARD',
      IconComponent: RiAwardLine,
    },
    {
      title: 'INNOVATIVE TEACHER OF THE YEAR',
      IconComponent: GiTeacher,
    },
  ]

  return (
    <div className="container mx-auto py-24">
        <h2 className="text-3xl font-bold text-center mb-12">AWARD CATEGORIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {categories.map((category, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >






                <div className="relative">
                     {/* Icon with padding */}
                    <div className="p-4 rounded-full bg-primary-500/10 flex items-center justify-center">
                        {category.IconComponent && (
                            <category.IconComponent className="w-12 h-12" />
                        )}
                    </div>

                </div>
                {/* Title */}
                <h3 className="mt-4 text-center text-sm md:text-base font-medium px-4">{category.title}</h3>

            </div>
        ))}







        </div>
      
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {awardCategories.map((category, index) => (
            <div
                key={index}
                className="flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-primary-500 text-white p-6"
            >
                {/* Icon with padding */}
                <div className="p-4 rounded-full bg-primary-500/10 flex items-center justify-center">
                    {category.IconComponent && (
                        <category.IconComponent className="w-12 h-12" />
                    )}

                </div>
                <h3 className="text-center text-base font-medium px-4">{category.title}</h3>

            </div>
        ))}
      </div>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {categories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img src={category.icon} alt={category.title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>
      ))}
    </div> */}
    </div> 
  );
};

export default AwardCategories;
