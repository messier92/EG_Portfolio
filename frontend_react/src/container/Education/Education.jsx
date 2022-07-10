import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Education.scss';

const Education = () => {

    const [education, setEducation] = useState([])

    function compare(a, b) 
    {
      if (a.startYear > b.startYear) return 1;
      if (a.startYear < b.startYear) return -1;
      return 0;
    }

    function sortEducation(data) {
      const sortedEducation = [...data].sort(compare);
      setEducation(sortedEducation);
    }

    useEffect(() => {
        const educationQuery = '*[_type == "education"]'
        client.fetch(educationQuery)
        .then((data) => {
            sortEducation(data);
        })
    }, [])
   
    return (
        <>
          <h2 className="head-text">My Certificates and Education</h2>
          <div className="app__education-container">
          <motion.div className="app__education-list">
            <h2>Certifications</h2>
          </motion.div>


          
          <div className="app__education-container">
            <motion.div className="app__education-list">
            </motion.div>

            <div className="app__education-exp">     
              {education.map((school) => (
                <motion.div
                  className="app__skills-exp-item"
                  key={school.year}
                >
                  <div className="app__education-exp-year">
                    <p className="bold-text">{school.year}</p>
                  </div>
                  <motion.div className="app__skills-exp-works">
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.1 }}
                          className="app__skills-exp-work"
                          data-for={school.school}
                          key={school.school}
                        >
                          <h4 className="bold-text">{school.school}</h4>
                          <p className="p-text">{school.qualification}</p>
                        </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </>
      );
}

export default AppWrap(MotionWrap(Education, 'app__education'), 'education', 'app__primarybg');