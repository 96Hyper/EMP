const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Create the layout for the homepage using HTML and CSS.",
        taskDate: "2024-10-22",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Navigation",
        taskDescription: "Add navigation links to the header.",
        taskDate: "2024-10-23",
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Development Environment",
        taskDescription: "Install Node.js and Angular CLI.",
        taskDate: "2024-10-20",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Create API Endpoints",
        taskDescription: "Develop RESTful API endpoints for the application.",
        taskDate: "2024-10-24",
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate with Database",
        taskDescription: "Connect the application to the MongoDB database.",
        taskDate: "2024-10-21",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Create unit tests for the newly created API endpoints.",
        taskDate: "2024-10-25",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Design User Profile Page",
        taskDescription: "Create a responsive user profile page layout.",
        taskDate: "2024-10-26",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: false,
        taskTitle: "Implement User Authentication",
        taskDescription: "Set up user login and registration functionality.",
        taskDate: "2024-10-27",
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct Code Review",
        taskDescription: "Review code for the previous sprint.",
        taskDate: "2024-10-19",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Update Project Documentation",
        taskDescription:
          "Revise the project documentation for the latest changes.",
        taskDate: "2024-10-28",
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Codebase",
        taskDescription: "Improve code readability and structure.",
        taskDate: "2024-10-18",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation for Stakeholders",
        taskDescription: "Create slides for the upcoming stakeholder meeting.",
        taskDate: "2024-10-29",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct User Testing",
        taskDescription: "Gather feedback from users on the latest features.",
        taskDate: "2024-10-30",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: false,
        taskTitle: "Analyze Test Results",
        taskDescription: "Review user testing data and report findings.",
        taskDate: "2024-10-31",
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure CI/CD pipeline for automated deployments.",
        taskDate: "2024-10-15",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
   const employees =  JSON.parse(localStorage.getItem("employees"))
   const admin =  JSON.parse(localStorage.getItem("admin"))
    return {employees , admin}
};
