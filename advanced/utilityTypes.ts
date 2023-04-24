// Partial<T> condiciona los elementos de la interface
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {}

const newTask = { name: 'Kevin' };

updateTask('1', newTask);

// Required<T> obliga el uso de los elementos de la interface
interface ToDo {
  id?: number;
  name?: string;
}

const myTodo: Required<ToDo> = {};

// Records<Keys, Types> Para la creación de objetos
interface CatInfo {
  age: number;
  name: string;
}

type CatName = 'moi' | 'baris' | 'luffy';

const cats: Record<CatName, CatInfo> = {
  moi: { age: 2, name: '' },
  baris: { age: 2, name: '' },
  luffy: { age: 2, name: '' },
};

// Pick <T, Properties> toma propiedades de una interface y devuelve otra con las propiedades tomadas
interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}

type ToDoPreview = Pick<ToDo, 'title' | 'completed'>;

const otherToDo: ToDoPreview = {};

// Omit<T, Properties> contrario a pick
type ToDoOmitted = Omit<ToDo, 'description'>;
const toDoOmitted: ToDoOmitted = {};
