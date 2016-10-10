export class Init {
  load() {
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
      console.log('No todos Found ... creating');
      var todos = [
        {
          text: 'test1'
        },
        {
          text: 'test2'
        },
        {
          text: 'test3'
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      return
    } else {
      console.log('Found Todos ...');
    }
  }
}
