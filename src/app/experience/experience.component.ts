import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    // from https://stackoverflow.com/questions/50907542/download-a-file-from-asset-folder-when-clicking-on-a-button
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.download = 'Resume - Ilker Hadzhalaran';
    link.href = 'assets\\Resume - Ilker Hadzhalaran.pdf';
    link.click();
    link.remove();
  }

}
