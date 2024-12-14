import {Component, Input, OnInit} from '@angular/core';
import {HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {BrnSelectComponent, BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmSelectImports, HlmSelectOptionComponent} from "@spartan-ng/ui-select-helm";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Event} from "@angular/router";


@Component({
  selector: 'app-select-shift-item',
  standalone: true,
  imports: [
    HlmTrowComponent,
    HlmThComponent,
    HlmSelectImports,
    BrnSelectImports,
    BrnSelectComponent,
    HlmSelectOptionComponent,
    ReactiveFormsModule
  ],
  templateUrl: './select-shift-item.component.html',
  styleUrl: './select-shift-item.component.css'
})
export class SelectShiftItemComponent implements OnInit{
  @Input() equipe!: any;
  form=new FormGroup({
    shift: new FormControl('')
  })

  setShift($event: Event) {
    console.log($event)

  }

  ngOnInit(): void {
    if(this.equipe.shift){
      this.form.patchValue({
        shift: this.equipe.shift
      })
    }

    this.form.valueChanges.subscribe((data)=>{
      if(data.shift){
        this.equipe.shift=data.shift
      }else {
        this.equipe.shift=null;
      }
    })
  }
}
