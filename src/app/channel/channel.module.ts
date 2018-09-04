import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewChannelResolver, ChannelResolver } from './channel.resolver';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelService} from './channel.service';
import { ChannelFormComponent } from './channel-form/channel-form.component';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelEditComponent } from './channel-edit/channel-edit.component';
import { ChannelListComponent } from './channel-list/channel-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ChannelRoutingModule
  ],
  declarations: [
    ChannelFormComponent,
    ChannelCreateComponent,
    ChannelDetailComponent,
    ChannelEditComponent,
    ChannelListComponent
  ],
  providers: [
    NewChannelResolver,
    ChannelResolver,
    ChannelService
  ]
})
export class ChannelModule { }
