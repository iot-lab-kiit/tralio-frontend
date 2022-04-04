// Portfolio Fields Name following convention of plural form
// Portfolio Fields name must be same as portfolio Buttons and hence same in addFeature


const portfolioButtons = [
  "Profile",
  "Educations",
  "Skills",
  "Projects",
  "Experiences",
  "Courses",
  "Organisations",
  "Interests",
  "Awards",
];

const addFeature = [
  "Educations",
  "Projects",
  "Experiences",
  "Courses",
  "Organisations",
  "Interests",
  "Awards",
];

const portfolioFields = {
  Profile: [
    [
      {
        type: "text",
        name: "profileFirstName",
        placeholder: "First Name",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
      {
        type: "text",
        name: "profileLastName",
        placeholder: "Last Name",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
      {
        type: "text",
        name: "profileBio",
        placeholder: "Bio",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20,
        },
      },
    ],
  ],
  Educations: [
    [
      {
        type: "text",
        name: "educationDegree",
        placeholder: "Degree",
      },
      {
        type: "text",
        name: "educationInstitute",
        placeholder: "School/ College/ University",
      },
      {
        type: "text",
        name: "educationCity",
        placeholder: "City",
      },
      {
        type: "text",
        name: "educationCountry",
        placeholder: "Country",
      },
      {
        type: "dual-date",
        date1: {
          name: "educationStartDate",
          placeholder: "Start Date",
        },
        date2: {
          name: "educationEndDate",
          placeholder: "End Date",
        },
      },
    ],
  ],
  Skills: [
    [
      {
        type: "text",
        name: "skillsSkillName",
        placeholder: "Skill",
      },
      {
        type: "text",
        name: "skillsSkillInfo",
        placeholder: "Information/ Sub-skill",
      },
      {
        type: "select",
        name: "skillsSkillLevel",
        placeholder: "Skill Level",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
      },
    ],
  ],
  Projects: [
    [
      {
        type: "text",
        name: "projectsTitle",
        placeholder: "Project Title",
      },
      {
        type: "text",
        name: "projectsShortDescription",
        placeholder: "Short Description",
      },
    ],
  ],
  Experiences: [
    [
      {
        type: "text",
        name: "experiencesJobTitle",
        placeholder: "Job Title",
      },
      {
        type: "text",
        name: "experiencesShortDescription",
        placeholder: "Short Description",
      },
    ],
  ],
  Courses: [
    [
      {
        type: "text",
        name: "coursesTitle",
        placeholder: "Course Title",
      },
      {
        type: "text",
        name: "coursesInstitution",
        placeholder: "Institution",
      },
    ],
  ],
  Organisations: [
    [
      {
        type: "text",
        name: "organisationName",
        placeholder: "Organisation",
      },
      {
        type: "text",
        name: "organisationPosition",
        placeholder: "Position",
      },
      {
        type: "text",
        name: "organisationCity",
        placeholder: "City",
      },
      {
        type: "text",
        name: "organisationCountry",
        placeholder: "Country",
      },
    ],
  ],
  Interests: [
    [
      {
        type: "text",
        name: "interestsName",
        placeholder: "Interest",
      },
      {
        type: "text",
        name: "interestsDescription",
        placeholder: "Additional Information",
      },
    ],
  ],
  Awards: [
    [
      {
        type: "text",
        name: "awardsName",
        placeholder: "Award",
      },
      {
        type: "text",
        name: "awardIssuer",
        placeholder: "Issuer",
      },
    ],
  ],
};

export { portfolioFields, portfolioButtons, addFeature };

/*
const portfolioFields = {
  Profile: [
    {
      profile1: [
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
    },
  ],
  Educations: [
    {
      education1: [
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
          date1: {
            name: "startDate",
            placeholder: "Start Date",
          },
          date2: {
            name: "endDate",
            placeholder: "End Date",
          },
        },
      ],
    },
  ],
  Skills: [
    {
      skill1: [
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
    },
  ],
  Projects: [
    {
      project1: [
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
    },
  ],
  Experiences: [
    {
      experience1: [
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
    },
  ],
  Courses: [
    {
      course1: [
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
    },
  ],
  Organisations: [
    {
      organisation1: [
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
    },
  ],
  Interests: [
    {
      interest1: [
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
    },
  ],
  Awards: [
    {
      award1: [
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
    },
  ],
};
*/
