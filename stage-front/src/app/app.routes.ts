import { Routes } from '@angular/router';
import {authorizationGuard} from "./guard/authorization.guard";
import {authenticationGuard} from "./guard/authentication.guard";
import {LoginComponent} from "./routes/login/login.component";
import {SuperAdminHomeComponent} from "./routes/super-admin/super-admin-home/super-admin-home.component";
import {UsersComponent} from "./routes/super-admin/users/users.component";
import {ProfilesComponent} from "./routes/super-admin/profiles/profiles.component";
import {PortsComponent} from "./routes/super-admin/ports/ports.component";
import {MonCompteComponent} from "./routes/super-admin/mon-compte/mon-compte.component";
import {ParametrageComponent}  from "./routes/super-admin/parametrage/parametrage.component";
import {ListPortComponent} from "./routes/super-admin/parametrage/list-port/list-port.component";
import {
  OperataionManutentionComponent
} from "./routes/super-admin/parametrage/operataion-manutention/operataion-manutention.component";
import {OperationMarineComponent} from "./routes/super-admin/parametrage/operation-marine/operation-marine.component";
import {
  OperationLogistiqueComponent
} from "./routes/super-admin/parametrage/operation-logistique/operation-logistique.component";
import {UserDetailsComponent} from "./routes/super-admin/users/components/user-details/user-details.component";


export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"super-admin" ,
    component:SuperAdminHomeComponent ,
    canActivate:[authenticationGuard,authorizationGuard],
    data: {
      authority:"SUPER_ADMIN"
    },
    children:[
      {
        path:"utilisateurs",
        component:UsersComponent,
      },
      {
        path:"",
        redirectTo:"utilisateurs",
        pathMatch:"full"
      },
      {
        path:"profiles",
        component:ProfilesComponent
      },
      {
        path:"paramétrage",
        component:ParametrageComponent,
        children:[
          {
            path:"",
            component:ListPortComponent
          },
          {
            path:":nomPort/:nomTerminal/:terminalId/manutention/:operationId",
            component:OperataionManutentionComponent
          },
          {
            path:":nomPort/:nomTerminal/:terminalId/marine/:operationId",
            component:OperationMarineComponent
          },
          {
            path:":nomPort/:nomTerminal/:terminalId/logistique/:operationId",
            component:OperationLogistiqueComponent
          }
          ]
      },
      {
        path:"ports",
        component:PortsComponent
      },{
        path:"mon-compte/:matricule",
        component:MonCompteComponent
      },{
        path:"utilisateurs/:matricule",
        component:UserDetailsComponent
      }
    ]
  }
];
