import { LlamaService } from './../services/llama.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-llamatest',
  templateUrl: './llamatest.component.html',
  styleUrl: './llamatest.component.scss'
})
export class LlamatestComponent {
  inputText: string = '';
  response: string = '';

  constructor(private LlamaService: LlamaService) { }

  getLlamaResponse() {
    this.LlamaService.getLlamaResponse(this.inputText).subscribe(
      res => {
        this.response = res;
      },
      err => {
        console.error(err);
        this.response = 'Error occurred!';
      }
    );
  }
}
