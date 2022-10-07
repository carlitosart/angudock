import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getTodos()
  }

  todos: any[] = []

  description: any
  descriptionEdit: any
  todoEdit: any 
  deleteId: any

  getTodos(){
    this.backendService.getTodos().subscribe(
      {
        next: (data) => {
          this.todos = data
  
      }
    }
    )
  }

  saveTodo(){
    console.log(this.description)
    this.backendService.saveTodo({description: this.description}).subscribe(
      {
        next: (data) => {
          this.getTodos()
          this.description = ''
        }
      }
    )
  }

  updateTodo(){
    this.todoEdit.description = this.descriptionEdit
    this.backendService.updateTodo(this.todoEdit).subscribe(
      {
        next: data =>{
          this.getTodos()
        }
      }
    )
  }
  showModalUpdate = false
  showModalDelete = false
  toggleModalUpdate(todo:any = null){
    if(todo !=null){
      this.todoEdit = todo
      this.descriptionEdit = todo.description
    }
    this.showModalUpdate = !this.showModalUpdate
  }

  toggleModalDelete(todo:any=null){
    if(todo!== null){
      this.deleteId = todo
    }
    this.showModalDelete = !this.showModalDelete
  }
  deleteTodo(){
    console.log(this.deleteId);
    
    this.backendService.deleteTodo(this.deleteId.id).subscribe(
      {
        next: data => {
          this.getTodos()
        },
        error: err =>{
          console.log(err);
          
        }
      }
    )
  }

}