const readline = require('readline');
let tasks = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function addTask(task) {
    tasks.push(task);
    console.log(`Added task: "${task}"`);
}
function deleteTask(taskNumber) {
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        const removedTask = tasks.splice(taskNumber - 1, 1);
        console.log(`Deleted task: "${removedTask}"`);
    } else {
        console.log('Invalid task number.');
    }
}
function viewTasks() {
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        console.log('Tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}
function promptUser() {
    rl.question('1.Add\n2.Delete\n3.View\n4.Exit\nTask:', (action) => {
        switch (action) {
            case '1':
                rl.question('Enter the task to add: ', (task) => {
                    addTask(task);
                    promptUser();
                });
                break;
            case '2':
                rl.question('Enter the task number to delete: ', (taskNumber) => {
                    deleteTask(parseInt(taskNumber));
                    promptUser();
                });
                break;
            case '3':
                viewTasks();
                promptUser();
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log('Invalid action. Please choose add, delete, view, or exit.');
                promptUser();
                break;
        }
    });
}
console.log('\n\tWelcome to the To-Do List Application!');
promptUser();
rl.on('close', () => {
    console.log('Exiting the application. Goodbye!');
});
