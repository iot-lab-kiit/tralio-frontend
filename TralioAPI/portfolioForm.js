const portfolioButtons = [
  "Profile",
  "Education",
  "Skills",
  "Projects",
  "Experience",
  "Courses",
  "Organisation",
  "Interest",
  "Award",
];

const addFeature = [
  "Education",
  "Projects",
  "Experience",
  "Courses",
  "Organisation",
  "Interest",
  "Award",
];

const portfolioFields = {
  Profile: [
    {
      type: "text",
      name: "First Name",
      placeholder: "First Name",
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      type: "text",
      name: "Last Name",
      placeholder: "Last Name",
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      type: "text",
      name: "Bio",
      placeholder: "Bio",
      validation: {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
  ],
  Education: [
    {
      type: "text",
      name: "Degree",
      placeholder: "Degree",
    },
    {
      type: "text",
      name: "School/ College/ University",
      placeholder: "School/ College/ University",
    },
    {
      type: "text",
      name: "City",
      placeholder: "City",
    },
    {
      type: "text",
      name: "Country",
      placeholder: "Country",
    },
    {
      type: "dual-date",
      date1 : {
        name : "startDate",
        placeholder: "Start Date"
      },
      date2 : {
        name : "endDate",
        placeholder: "End Date"
      }
    },
  ],
  Skills: [
    {
      type: "text",
      name: "Skill",
      placeholder: "Skill",
    },
    {
      type: "text",
      name: "Information/ Sub-skill",
      placeholder: "Information/ Sub-skill",
    },
    {
      type: "select",
      name: "skillLevel",
      placeholder: "Skill Level",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
  ],
  Projects: [
    {
      type: "text",
      name: "Project Title",
      placeholder: "Project Title",
    },
    {
      type: "text",
      name: "Short Description",
      placeholder: "Short Description",
    },
  ],
  Experience: [
    {
      type: "text",
      name: "Job Title",
      placeholder: "Job Title",
    },
    {
      type: "text",
      name: "Short Description",
      placeholder: "Short Description",
    },
    {
      type: "text",
      name: "City",
      placeholder: "City",
    },
    {
      type: "text",
      name: "Country",
      placeholder: "Country",
    },
  ],
  Courses: [
    {
      type: "text",
      name: "Course Title",
      placeholder: "Course Title",
    },
    {
      type: "text",
      name: "Institution",
      placeholder: "Institution",
    },
  ],
  Organisation: [
    {
      type: "text",
      name: "Organisation",
      placeholder: "Organisation",
    },
    {
      type: "text",
      name: "Position",
      placeholder: "Position",
    },
    {
      type: "text",
      name: "City",
      placeholder: "City",
    },
    {
      type: "text",
      name: "Country",
      placeholder: "Country",
    },
  ],
  Interest: [
    {
      type: "text",
      name: "Interest",
      placeholder: "Interest",
    },
    {
      type: "text",
      name: "Additional Information",
      placeholder: "Additional Information",
    },
  ],
  Award: [
    {
      type: "text",
      name: "Award",
      placeholder: "Award",
    },
    {
      type: "text",
      name: "Issuer",
      placeholder: "Issuer",
    },
  ],
};

export { portfolioFields, portfolioButtons, addFeature };
