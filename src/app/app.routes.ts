import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Download } from './pages/download/download';
import { Help } from './pages/help/help';
import { Whyoreon } from './pages/whyoreon/whyoreon';
import { Docs } from './pages/docs/docs';
import { InstallationGuide } from './pages/documentation/installation-guide/installation-guide';
import { PostInstallation } from './pages/documentation/post-installation/post-installation';
import { PackageManagement } from './pages/documentation/package-management/package-management';
import { SoftwareCenter } from './pages/documentation/software-center/software-center';
import { SystemUpdates } from './pages/documentation/system-updates/system-updates';
import { SecurityHardening } from './pages/documentation/security-hardening/security-hardening';
import { UserManagement } from './pages/documentation/user-management/user-management';
import { CommandLine } from './pages/documentation/command-line/command-line';
import { Virtualization } from './pages/documentation/virtualization/virtualization';
import { ServerSetup } from './pages/documentation/server-setup/server-setup';
import { Development } from './pages/documentation/development/development';

export const routes: Routes = [
  { path: '', component: Home }, // home page
  { path: 'download', component: Download }, // download page
  { path: 'help', component: Help }, // help page
  { path: 'whyoreon', component: Whyoreon }, // why oreon
  { path: 'docs', component: Docs }, // documentation page
  //documentation paths

  { path: 'docs/installation-guide', component: InstallationGuide },
  { path: 'docs/post-installation', component: PostInstallation },
  { path: 'docs/package-management', component: PackageManagement },
  { path: 'docs/software-center', component: SoftwareCenter },

  { path: 'docs/system-updates', component: SystemUpdates },
  { path: 'docs/user-management', component: UserManagement },
  { path: 'docs/security-harding', component: SecurityHardening },

  { path: 'docs/command-line', component: CommandLine },
  { path: 'docs/virtualization', component: Virtualization },
  { path: 'docs/server-setup', component: ServerSetup },
  { path: 'docs/development', component: Development },

  { path: '**', redirectTo: '' }, // error page (needs to be implemented still, goes to homepage for now)
];
