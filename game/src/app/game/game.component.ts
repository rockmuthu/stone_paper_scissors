import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  data: any;

  userName!: string;
  user: any;

  userScore = 0;
  compScore = 0;
  userSelected!: string;
  compSelected!: string;
  round: any = 6;

  status!: string;

  compWeapons = [
    'Rock',
    'Paper',
    'Scissor'
  ];

  result!: string;

  visible: boolean = false;

  constructor(private gameService: GameService) { }


  ngOnInit(): void {
    this.getUser();
  }

  // Picking One
  pick(weapon: any) {

    if (this.round == 0) {

      this.finalResult();

    } else {
      this.round--;

      console.log(this.round);

      this.userSelected = weapon;
      console.log("User:" + this.userSelected);

      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log("Computer:" + this.compSelected);

      this.checkResult();

    }
  }


  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;

    switch (userChoice + compChoice) {
      case 'RockScissor':
      case 'PaperRock':
      case 'ScissorPaper':
        this.win(userChoice, compChoice);
        break;
      case 'RockPaper':
      case 'ScissorRock':
      case 'PaperScissor':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }
  }


  win(user: string, comp: string) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.status = 'You win!';
    this.clearField();
  }


  lose(user: string, comp: string) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.status = 'Computer win!';
    this.clearField();
  }

  draw(user: string, comp: string) {
    this.userSelected = user;
    this.compSelected = comp;
    this.status = 'Match Draw';
    this.clearField();
  }


  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 3000);
  }

  showDialog() {
    this.visible = true;
  }


  finalResult() {
    if (this.compScore > this.userScore) {
      this.result = "Computer wins the Game...";

    } else if (this.compScore < this.userScore) {
      this.result = "User wins the Game...";

    } else {
      this.result = "Match Tie...";

    }

    this.round = "...";
    this.send();
  }

  reload() {
    window.location.reload();
  }


  // Save User
  saveUser() {
    localStorage.setItem('name', JSON.stringify(this.userName));

    
    this.getUser();
  }

  getUser() {
    let user = localStorage.getItem('name');
    if (user) {
      this.user = JSON.parse(user);
    }
  }



    // Api to Post Data
    send() {
      this.data = {
        "name": this.user,
        "userScore": this.userScore,
        "compScore": this.compScore,
        "status": this.result

      }
      this.gameService.post(this.data).subscribe(response => {
        console.log('API response:', response);
      },
        error => {
          console.error('API error:', error);
          // Handle the error if needed
        }
      );
    }



  }

