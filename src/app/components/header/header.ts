import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
  isVisible: boolean = true;
  activeSection: string | null = 'home';

  sections: string[] = ['home', 'projects', 'skills', 'education', 'about-me', 'contact'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment && this.sections.includes(fragment)) {
        this.activeSection = fragment;
      } else {
        this.activeSection = 'home';
      }
    });
  }
}
