#!/usr/bin/env node
import  inquirer from 'inquirer';
import chalk from "chalk";
let todoList: { text: string; done: boolean }[] = [];

async function  startMenu () {
  let  choice  = await inquirer.prompt([
    {
      type: "rawlist",
      name: 'action',
      message: 'ToDo List Menu',
      choices: ['Add Task', 'Mark Task as Done', 'Show List','Delete a Task', 'Exit'],
    },
  ]);

  switch (choice.action) {
    case 'Add Task': 
      const  task  = await inquirer.prompt([
        {
          type: 'input',
          name: 'action',
          message: 'Enter task:',
        },
      ]);
      todoList.push({ text: task.action, done: false });
    
      break;

    case 'Mark Task as Done':
      const  index  = await inquirer.prompt([
        {
          type: 'input',
          name: 'action',
          message: 'Enter the task number to mark as done:',
        },
      ]);
      const taskIndex = parseInt(index.action) - 1;
      if (taskIndex >= 0 && taskIndex < todoList.length) {
        todoList[taskIndex].done = true;
       
      } else {
        console.log('Invalid task number.');
      }
      break;

    case 'Show List':
        if(todoList.length != 0){
            todoList.forEach((item, index) => {
                const status = item.done ? 'Status: Done' : 'Status: To be done';
                console.log(`${index + 1}.${item.text}---->${status} `);
            });1
              }else{
            console.log("No Record Found");
        }
      
      break;
    case 'Delete a Task':
      const  d_index  = await inquirer.prompt([
        {
          type: 'input',
          name: 'action',
          message: 'Enter the task number you want to delete:',
        },
      ]);
      const d_taskIndex = parseInt(d_index.action) - 1;
      if (d_taskIndex >= 0 && d_taskIndex < todoList.length) {
        todoList.splice(d_taskIndex ,1);
       
      } else {
        console.log('Invalid task number.');
      }
      break;
    case 'Exit':
      console.log('Exiting the application.');
      return;
  }
    
    startMenu();
};
function main(){
    //console.clear();
    console.log(chalk.blue.bold(`Welcome to ${chalk.yellow.bold("To DO list")} Application`)) 
    startMenu() ;
    }
main(); 
