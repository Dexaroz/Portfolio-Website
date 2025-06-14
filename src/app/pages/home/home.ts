import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {ThreeViewerComponent} from '../../components/three-viewer/three-viewer';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    ThreeViewerComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
