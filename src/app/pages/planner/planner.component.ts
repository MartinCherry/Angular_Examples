import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  plannerTasks = [
    {
      text: 'Task 1',
      done: false,
    },
  ];
  inputValue = '';

  ngOnInit(): void {
    this.plannerTasks.splice(0);
  }

  addTask(): void {
    if (this.inputValue !== '') {
      const newTask = { text: this.inputValue, done: false };

      this.inputValue = '';

      this.plannerTasks.push(newTask);
    }
  }
  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }

  getUnfinishedTasks(): number {
    return this.plannerTasks.filter((task) => task.done).length;
  }

  clearAllList(): void {
    this.plannerTasks.splice(0);
  }
}
