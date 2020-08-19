import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public downloadFile() {
    // from https://stackoverflow.com/questions/50907542/download-a-file-from-asset-folder-when-clicking-on-a-button
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.download = 'Resume - Ilker Hadzhalaran';
    link.href = 'assets\\Resume - Ilker Hadzhalaran.pdf';
    link.click();
    link.remove();
  }

}
