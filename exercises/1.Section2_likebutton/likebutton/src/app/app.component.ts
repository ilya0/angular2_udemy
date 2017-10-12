import { Component } from '@angular/core';
import { ButtonComponent } from './button.component'

let component = new ButtonComponent(10,true);
component.onClick();
console.log(`likecounter: ${component._likecounter},isSelected: ${component.isSelected}`);