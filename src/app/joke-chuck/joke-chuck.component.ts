import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../services/chuck-norris.service';

@Component({
  selector: 'app-joke-chuck',
  templateUrl: './joke-chuck.component.html',
  styleUrls: ['./joke-chuck.component.scss']
})
export class JokeChuckComponent implements OnInit {

  constructor(private joke: ChuckNorrisService) { }

  ngOnInit(): void {
    this.getChuckJoke();
  }

  jokeChuck: string;
  img: string;


  getChuckJoke() {
    (this.joke.getJoke()).subscribe(
      result => {
        this.jokeChuck = result.value;
        this.img = result.icon_url;
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

}
