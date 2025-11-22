import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Phone } from "./phone.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [Phone],
})
export class PhoneModule {}
