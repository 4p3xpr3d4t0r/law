import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../userauth/authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  searchBlogs = '';
  articles: object;
  blogs = [];
  lat: number;
  lon: number;
  public isLoggedIn: boolean;
  constructor(private posts: PostsService, private router: Router, public auth: AuthenticateService) {
  }

  ngOnInit() {

    this.posts.getPosts().subscribe(data => {
      this.posts.getUsers().subscribe(users => {
        data.map(post => {
          post.user = users.find(u => u.uid === post.data.uid);
        });
        this.articles = data;
        const b = Object.keys(data).map(key => ({type: key, value: this.articles[key]}));
        this.blogs = b;

      });
    });
    this.isLoggedIn = this.auth.isUserLoggedIn;
  }

  logout() {
    this.auth.logout();
    localStorage.clear();
  }

  goAuth() {
    this.router.navigate(['/auth']);
  }
}