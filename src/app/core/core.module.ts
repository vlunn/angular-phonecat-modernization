import { NgModule } from "@angular/core";
import { PhoneModule } from './phone/phone.module';
import { CheckmarkPipe } from "./checkmark/checkmark.pipe";

@NgModule({
    imports: [PhoneModule],
    declarations: [CheckmarkPipe],
    exports: [CheckmarkPipe],
})
export class CoreModule {}
