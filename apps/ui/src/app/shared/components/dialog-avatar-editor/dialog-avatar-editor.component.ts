import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Avatar } from '../../graphql';

@Component({
  selector: 'ui-dialog-avatar-editor',
  templateUrl: './dialog-avatar-editor.component.html',
  styleUrls: ['./dialog-avatar-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAvatarEditorComponent implements OnInit {
  selectedFiles: FileList;
  avatarSource: string;

  selected = false;
  accept = '.jpg, .jpeg, .png';
  placeholder = 'https://via.placeholder.com/200x200?text="No Image"';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Avatar & File,
    public dialogRef: MatDialogRef<DialogAvatarEditorComponent, Avatar | File>,
    private cdRef: ChangeDetectorRef
  ) {}

  selectFile($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.selectedFiles = target.files;

    const reader = new FileReader();
    reader.onload = () => {
      this.avatarSource = reader.result as string;
      this.selected = true;
      this.cdRef.detectChanges();
    };

    if (this.selectedFiles.item(0)) {
      reader.readAsDataURL(this.selectedFiles.item(0));
    }

    // console.log(this.selectedFiles);
  }

  clearInput($event: PointerEvent, fileInput: HTMLInputElement) {
    fileInput.value = '';
    this.selected = false;
    this.avatarSource = this.data.originalUrl || this.placeholder;
  }

  uploadAvatar(file: File) {
    if (!file) return;

    this.dialogRef.close(file);
  }

  ngOnInit() {
    this.avatarSource = this.data.originalUrl;
  }
}
