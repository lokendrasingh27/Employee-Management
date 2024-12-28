const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Complete report analysis",
          description: "Analyze the monthly sales report and submit findings.",
          date: "2024-12-28",
          category: "Analysis",
          active: true,
          newTask: true,
          complete: false,
          failed: false
        },
        {
          title: "Prepare presentation",
          description: "Create a PowerPoint presentation for the client meeting.",
          date: "2024-12-30",
          category: "Presentation",
          active: true,
          newTask: false,
          complete: false,
          failed: false
        },
        {
          title: "Team meeting notes",
          description: "Compile and distribute notes from last week's team meeting.",
          date: "2024-12-25",
          category: "Documentation",
          active: false,
          newTask: false,
          complete: true,
          failed: false
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        complete: 1,
        failed: 0
      }
    },
    {
      id: 2,
      firstName: "Vihaan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Update client database",
          description: "Add recent client interactions to the CRM system.",
          date: "2024-12-27",
          category: "Database",
          active: true,
          newTask: true,
          complete: false,
          failed: false
        },
        {
          title: "Schedule training",
          description: "Coordinate training sessions for the new recruits.",
          date: "2024-12-29",
          category: "HR",
          active: true,
          newTask: false,
          complete: false,
          failed: false
        },
        {
          title: "Fix server issue",
          description: "Resolve server downtime issue reported by the IT team.",
          date: "2024-12-26",
          category: "IT",
          active: false,
          newTask: false,
          complete: false,
          failed: true
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        complete: 0,
        failed: 1
      }
    },
    {
      id: 3,
      firstName: "Ishaan",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Develop marketing plan",
          description: "Draft a new marketing strategy for Q1 2025.",
          date: "2024-12-31",
          category: "Marketing",
          active: true,
          newTask: true,
          complete: false,
          failed: false
        },
        {
          title: "Client follow-up",
          description: "Follow up with clients on pending proposals.",
          date: "2024-12-27",
          category: "Client Relations",
          active: false,
          newTask: false,
          complete: true,
          failed: false
        },
        {
          title: "Website update",
          description: "Update the homepage design as per new guidelines.",
          date: "2024-12-29",
          category: "Web Development",
          active: true,
          newTask: false,
          complete: false,
          failed: false
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        complete: 1,
        failed: 0
      }
    },
    {
      id: 4,
      firstName: "Aryan",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Test new software",
          description: "Run performance tests on the newly developed software.",
          date: "2024-12-27",
          category: "Testing",
          active: true,
          newTask: true,
          complete: false,
          failed: false
        },
        {
          title: "Organize team outing",
          description: "Plan and arrange the year-end team outing.",
          date: "2024-12-30",
          category: "HR",
          active: true,
          newTask: false,
          complete: false,
          failed: false
        },
        {
          title: "Inventory audit",
          description: "Conduct an end-of-year audit of office supplies.",
          date: "2024-12-28",
          category: "Audit",
          active: false,
          newTask: false,
          complete: true,
          failed: false
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        complete: 1,
        failed: 0
      }
    },
    {
      id: 5,
      firstName: "Aditya",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare budget report",
          description: "Draft the financial budget report for the next quarter.",
          date: "2024-12-31",
          category: "Finance",
          active: true,
          newTask: true,
          complete: false,
          failed: false
        },
        {
          title: "Client onboarding",
          description: "Guide new clients through the onboarding process.",
          date: "2024-12-28",
          category: "Client Relations",
          active: true,
          newTask: false,
          complete: false,
          failed: false
        },
        {
          title: "Fix bugs in app",
          description: "Identify and resolve reported bugs in the mobile app.",
          date: "2024-12-26",
          category: "Development",
          active: false,
          newTask: false,
          complete: false,
          failed: true
        }
      ],
      taskNumbers: {
        active: 2,
        newTask: 1,
        complete: 0,
        failed: 1
      }
    }
  ];
  
  const admin = [
    {
      id: 1,
      firstName: "Kiran",
      email: "admin@example.com",
      password: "123"
    }
  ];
  

  
  export const setLocalStorage= ()=>{
     localStorage.setItem('employees',JSON.stringify(employees));
     localStorage.setItem('admin',JSON.stringify(admin));
  }
  export const getLocalStorage= ()=>{
      const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }