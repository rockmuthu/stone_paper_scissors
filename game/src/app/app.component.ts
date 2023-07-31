import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  items: MenuItem[] | undefined;
  title = 'game';


  visible: boolean = false;


  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Game',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-refresh',
            routerLink: '/game'
          },
          {
            label: 'Scores',
            icon: 'pi pi-times',
            routerLink: '/score'
          }
        ]
      },
      {
        label: 'Account',
        items: [
          // {
          //   label: 'LogIn',
          //   icon: 'pi pi-external-link',
          //   command: () => {
          //     this.showDialog();
          //   }
          // },
          {
            label: 'LogOut',
            icon: 'pi pi-upload',
            command: () => {
              this.logout();
            }
          }
        ]
      }
    ];
  }


  showDialog() {
    this.visible = true;
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
