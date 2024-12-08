import React, { useState } from 'react';
import michael from '../assets/michael.png';

// TypeScript Interface for Team Member
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const Team: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample team data (can be replaced with API data)
  const teamMembers: TeamMember[] = [
    {
      name: "Michael Habermas",
      role: "BD Learning Assistant",
      description:
        "Michael has a myriad of experience in cross-functional teams, leveraging the best educational outcomes for the BD Labs team.",
      image: michael,
    },
    // Additional team members go here
  ];

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div
      className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-[#fff4ec]'
      } transition-colors duration-300`}
      id="team"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="mb-6 px-4 py-2 bg-gray-800 text-white dark:bg-gray-100 dark:text-black rounded-lg shadow-md"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>

        {/* Page Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}
        >
          Meet the People Behind Labs
        </h2>
        <p
          className={`text-lg mt-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Decades of combined engineering experience.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-2xl p-6 flex flex-col items-center ${
                isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
              }`}
            >
              <img
                src={member.image}
                alt={`Profile of ${member.name}`}
                className="w-48 h-48 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-lg mt-2">{member.role}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;









// original main code before implementing darkMode feature 
// import React, { useState } from 'react';
// import michael from '../assets/michael.png';

// const Team = () => {
//     const teamMembers = [
//         { name: "Michael Habermas",
//             role: "BD Learning Assistant",
//             description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
//             image: michael },
//             { name: "Michael Habermas",
//                 role: "BD Learning Assistant",
//                 description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
//                 image: michael },
//                 { name: "Michael Habermas",
//                     role: "BD Learning Assistant",
//                     description: "Michael has got a myriad of expreience in cross functional teams to leverage the best yield of education in the BD labs team",
//                     image: michael }
        
//     ];
//     return (
//         <div className="bg-gray-50 py-16 bg-[#145074]" id="team">
//             <div className="container mx-auto px-4 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the People behind Labs</h2>
//                 <p className="text-white text-lg mt-2">Decades of combined Engineering Experience</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
//                             <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover" />
//                             <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
//                             <p className="text-gray-600 text-lg mt-2">{member.role}</p>
//                         </div>
//                     ))}



//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Team;