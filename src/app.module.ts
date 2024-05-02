import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { DomainsModule } from './domains/domains.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { InstancesModule } from './instances/instances.module';
import { SystemsModule } from './systems/systems.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    AccountsModule,
    DomainsModule,
    OrganizationsModule,
    InstancesModule,
    SystemsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
