import {Component, Input} from '@angular/core';
import {Project} from '../../models/project.model';
import {NgForOf} from '@angular/common';
import {ProjectsCard} from '../projects-card/projects-card';

@Component({
  selector: 'app-projects-grid',
  imports: [
    NgForOf,
    ProjectsCard
  ],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss'
})
export class ProjectsGrid {
  @Input() projects: Project[] = [];
}
