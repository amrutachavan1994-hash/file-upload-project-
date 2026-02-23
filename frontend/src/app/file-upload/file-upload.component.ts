import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadResponse: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append("file", this.selectedFile);

    this.http.post("http://localhost:5000/api/fileupload/upload", formData)
      .subscribe((response: any) => {
        this.uploadResponse = "File uploaded successfully: " + response.url;
      });
  }
}
