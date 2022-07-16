import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Education.scss';

const Education = () => {

    const [education, setEducation] = useState([])
    const [certifications, setCertifications] = useState([])

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

    function sortCertifications(data) {
      const sortedCertifications = [...data].sort(compare);
      setCertifications(sortedCertifications);
    }

    useEffect(() => {
      const certificationsQuery = '*[_type == "certifications"]'
      client.fetch(certificationsQuery)
      .then((data) => {
        sortCertifications(data);
      })
  }, [])

    useEffect(() => {
        const educationQuery = '*[_type == "education"]'
        client.fetch(educationQuery)
        .then((data) => {
            sortEducation(data);
        })
    }, [])
   
    return (
        <>
          <h2 className="head-text">My <span>Certificates</span> and <span>Education</span></h2>

          <div className="app__education-container">
          <div className="app__education-exp">     
            <h2>Certifications</h2>
              {certifications.map((certificate) => (
                <motion.div
                  className="app__education-exp-item"
                  key={certificate.year}
                >
                  <div className="app__education-exp-year">
                    <p className="bold-text">{certificate.year}</p>
                  </div>
                  <motion.div className="app__education-exp-schools">
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.1 }}
                          className="app__education-exp-school"
                          data-for={certificate.school}
                          key={certificate.school}
                        >
                          <a href={certificate.href}><h2 className="bold-text">{certificate.qualification}</h2></a>
                          <h2 className="p-text">{certificate.school}</h2>
                        </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>





            <div className="app__education-exp">     
            <h2>Education</h2>
              {education.map((school) => (
                <motion.div
                  className="app__education-exp-item"
                  key={school.year}
                >
                  <div className="app__education-exp-year">
                    <p className="bold-text">{school.year}</p>
                  </div>
                  <motion.div className="app__education-exp-schools">
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.1 }}
                          className="app__education-exp-school"
                          data-for={school.school}
                          key={school.school}
                        >
                          <h2 className="bold-text">{school.school}</h2>
                          <h2 className="p-text">{school.qualification}</h2>
                        </motion.div>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.1 }}
                          className="app__education-exp-school"
                          data-for={school.school}
                          key={school.school}
                        >
                          <p className="p-text">{school.desc}</p>
                        </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      );
}

export default AppWrap(MotionWrap(Education, 'app__education'), 'education', 'app__primarybg');