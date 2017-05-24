import { Component, Input } from '@angular/core'

@Component({
  selector: 'kgi-image-block',
  templateUrl: './image-block.html',
  styleUrls: ['./image-block.css']
})
export class ImageBlockComponent {
  @Input() images: string[]
}
