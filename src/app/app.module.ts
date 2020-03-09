import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RenderersMaterialRendererModule } from "@incrudable/material-form-renderer";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RenderersMaterialRendererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
