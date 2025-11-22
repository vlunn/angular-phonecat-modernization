import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PhoneListComponent } from "./phone-list.component";

@NgModule({
    imports: [CoreModule, CommonModule, RouterModule, FormsModule],
    declarations: [PhoneListComponent],
    exports: [PhoneListComponent],
})
export class PhoneListModule {}
