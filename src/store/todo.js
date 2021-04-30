import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    {
      id: 1,
      title:
        'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
      completed: false,
    },
    {
      id: 2,
      title:
        'consequat ut nulla sed accumsan felis ut at dolor quis odio consequat',
      completed: false,
    },
    {
      id: 3,
      title:
        'ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero',
      completed: true,
    },
    {
      id: 4,
      title:
        'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor',
      completed: true,
    },
    {
      id: 5,
      title:
        'facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus',
      completed: true,
    },
    {
      id: 6,
      title:
        'non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet',
      completed: true,
    },
    {
      id: 7,
      title:
        'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing',
      completed: true,
    },
    {
      id: 8,
      title:
        'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis',
      completed: true,
    },
    {
      id: 9,
      title: 'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem',
      completed: false,
    },
    {
      id: 10,
      title: 'nisi volutpat eleifend donec ut dolor morbi vel lectus in quam',
      completed: false,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
