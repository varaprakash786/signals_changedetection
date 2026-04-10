import { Routes } from '@angular/router';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { ChangeDetectionComponent } from './changedetection/changedetection.component';
import { ChangeDetectionInputComponent } from './changedetectionInputs/changedetectioninput.component';
import { ChangeDetectionDatashComponent } from './changedetectionDatasharing/changedetectiondatasharing.component';
import { CreateSignalComponent } from './createSignal.component';
import { UpdateSignalComponent } from './updateSignal.component';
import { UpdateSignal1Component } from './updateSignal1.component';
import { TodoListSignalComponent } from './tolistSignal.component';
import { ComputedSignalComponent } from './computedSignal.component';
import { EffectSignalComponent } from './effectSignal.component';
import { UntrackedSignalComponent } from './untrackedSignal.component';
import { CartUsingSignalComponent } from './cartusingSignal.component';
import { LinkedSignalComponent } from './linkedSignal.component';
import { ObservableToSignalComponent } from './ObservaleToSignal.component';
import { FilterProductComponent } from './filterproductsignal/filterproduct.component';

export const routes: Routes = [
    {path: '', redirectTo: 'layout' , pathMatch: 'full' },
    {path: 'layout', loadComponent: () => 
        import('./layout/layout.component').then(m => m.LayoutComponent),
        children: [
            { path: '', redirectTo: 'chngDet', pathMatch: 'full' },
            {path: 'chngDet' , component: ChangeDetectionComponent},
            {path: 'chngDet2' , component: ChangeDetectionInputComponent},
            {path: 'chngDet3' , component: ChangeDetectionDatashComponent},
             {path: 'creation' , component: CreateSignalComponent},
            {path: 'update' , component: UpdateSignalComponent},
            {path: 'update1' , component: UpdateSignal1Component},
            {path: 'todolist' , component: TodoListSignalComponent},
            {path: 'computed' , component: ComputedSignalComponent},
            {path: 'effect' , component: EffectSignalComponent},
            {path: 'untrack' , component: UntrackedSignalComponent},
            {path: 'cart' , component: CartUsingSignalComponent},
            {path: 'link' , component: LinkedSignalComponent},
            {path: 'obsToSignal' , component: ObservableToSignalComponent},
            {path: 'filter' , component: FilterProductComponent},
        ]
    }        
];
