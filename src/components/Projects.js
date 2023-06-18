import React, { useState, useEffect } from 'react';

// import Projects data
import { projectsData } from '../Data';

// import Projects nav data
import { projectsNav } from '../Data';

// import component
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get Projects base on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly gap-8 items-center text-white'>
          {projectsNav.map((item, i) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, i);
                }}
                className={`${active === i ? 'active' : ''}
                cursor-pointer capitalize m-4
                `}
                key={i}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
