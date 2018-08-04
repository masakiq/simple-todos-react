import React from 'react';
import TodoItem from './TodoItem';

const todos = [
    {
      title: 'Todo1のタイトル',
      text: 'Todo1のテキスト',
      created_at: 'Todo1の作成日時',
    },
    {
      title: 'Todo2のタイトル',
      text: 'Todo2のテキスト',
      created_at: 'Todo2の作成日時test',
    },
  ];

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>テキスト</th>
              <th>作成日時</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <TodoItem
                title={todo.title}
                text={todo.text}
                created_at={todo.created_at}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;