import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgi-image-block',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class ImageBlockComponent {
  @Input() images: string[]
}
