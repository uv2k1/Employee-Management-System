const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Complete Report",
          "taskDescription": "Prepare the monthly sales report.",
          "taskDate": "2025-01-01",
          "category": "Work",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly team sync-up.",
          "taskDate": "2025-01-02",
          "category": "Meetings",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Client",
          "taskDescription": "Send project status updates to the client.",
          "taskDate": "2025-01-03",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Perform a full inventory check in the warehouse.",
          "taskDate": "2025-01-01",
          "category": "Logistics",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the quarterly business review.",
          "taskDate": "2025-01-02",
          "category": "Work",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review the code submitted by junior developers.",
          "taskDate": "2025-01-01",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Debug Issues",
          "taskDescription": "Fix bugs reported by the QA team.",
          "taskDate": "2025-01-03",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Schedule Interviews",
          "taskDescription": "Plan and schedule interviews for new hires.",
          "taskDate": "2025-01-01",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Employee Training",
          "taskDescription": "Organize the training session for new employees.",
          "taskDate": "2025-01-05",
          "category": "HR",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Website Update",
          "taskDescription": "Update the company website with new content.",
          "taskDate": "2025-01-01",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Server Maintenance",
          "taskDescription": "Perform routine maintenance on company servers.",
          "taskDate": "2025-01-03",
          "category": "IT",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = () =>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}