import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from '../../services/data.service';
import { TreeComponent } from '../../components/tree/tree.component';
import { ConsoleUser } from '../../classes/consoleUser';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})
export class ManagementPageComponent implements OnInit {

  /**
   * TODO
   *  rename this to 'account-management-page'
   * add the Root level as a 'collection'
   * https://codepen.io/aanjulena/pen/ZLZjzV
   */


// testing

  currentUser: any;

  mockGroups: any[] = [
    {
      'Id': 2,
      'Name': 'Group 1',
      'GroupType': 'BackupGroup',
      'ParentId': 1,
      'GroupPath': 'Group 1',
      'GroupKey': 'group1',
      'MaxSizeGB': 100,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:15:10.357',
      'ModifiedOn': '2017-12-05T09:15:10.443',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 3,
      'Name': 'Collection 1',
      'GroupType': 'AdminGroup',
      'ParentId': 1,
      'GroupPath': 'Collection 1',
      'GroupKey': '',
      'MaxSizeGB': 200,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 0,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:17:12.307',
      'ModifiedOn': '2017-12-05T09:34:14.88',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 4,
      'Name': 'Collection 2',
      'GroupType': 'AdminGroup',
      'ParentId': 1,
      'GroupPath': 'Collection 2',
      'GroupKey': '',
      'MaxSizeGB': 100,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 0,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:17:25.56',
      'ModifiedOn': '2017-12-05T09:17:25.577',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 5,
      'Name': 'Group 2',
      'GroupType': 'BackupGroup',
      'ParentId': 1,
      'GroupPath': 'Group 2',
      'GroupKey': 'group 2',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:33:40.503',
      'ModifiedOn': '2017-12-05T09:33:40.53',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 6,
      'Name': 'Collection 1 A',
      'GroupType': 'AdminGroup',
      'ParentId': 3,
      'GroupPath': 'Collection 1\\Collection 1 A',
      'GroupKey': '',
      'MaxSizeGB': 100,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 0,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:34:00.713',
      'ModifiedOn': '2017-12-05T09:34:00.737',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 7,
      'Name': 'Group 1 A',
      'GroupType': 'BackupGroup',
      'ParentId': 3,
      'GroupPath': 'Collection 1\\Group 1 A',
      'GroupKey': 'group1',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:34:24.89',
      'ModifiedOn': '2017-12-05T09:34:24.94',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 8,
      'Name': 'Group 1 oo',
      'GroupType': 'BackupGroup',
      'ParentId': 4,
      'GroupPath': 'Collection 2\\Group 1 oo',
      'GroupKey': 'group',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:34:51.54',
      'ModifiedOn': '2017-12-05T09:34:51.577',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 9,
      'Name': 'Group 2 oo',
      'GroupType': 'BackupGroup',
      'ParentId': 4,
      'GroupPath': 'Collection 2\\Group 2 oo',
      'GroupKey': 'group',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:35:03.907',
      'ModifiedOn': '2017-12-05T09:35:03.94',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 10,
      'Name': 'Group 01',
      'GroupType': 'BackupGroup',
      'ParentId': 6,
      'GroupPath': 'Collection 1\\Collection 1 A\\Group 01',
      'GroupKey': 'group',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:35:54.897',
      'ModifiedOn': '2017-12-05T09:35:54.923',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 11,
      'Name': 'Group 02',
      'GroupType': 'BackupGroup',
      'ParentId': 6,
      'GroupPath': 'Collection 1\\Collection 1 A\\Group 02',
      'GroupKey': 'group',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:36:07.937',
      'ModifiedOn': '2017-12-05T09:36:07.967',
      'ModifiedBy': 'admin',
      'Cert': false
    },
    {
      'Id': 12,
      'Name': 'Group 2 A',
      'GroupType': 'BackupGroup',
      'ParentId': 3,
      'GroupPath': 'Collection 1\\Group 2 A',
      'GroupKey': 'group',
      'MaxSizeGB': 10,
      'MaxUsers': 0,
      'OverSpill': 0,
      'Disabled': false,
      'DefaultLimitMB': 1024,
      'StoragePoolId': 1,
      'StoragePool': 'Storage Pool',
      'RollupWindowMin': 10,
      'RollupWindowMax': 20,
      'RollupMonthly': true,
      'RollupCount': 1,
      'RollupCountOnMirror': -1,
      'MirroringEnabled': true,
      'RestoreFromMirrorEnabled': false,
      'HsmEnabled': true,
      'BakReferEnabled': false,
      'CreatedOn': '2017-12-05T09:36:21.773',
      'ModifiedOn': '2017-12-05T09:36:21.803',
      'ModifiedBy': 'admin',
      'Cert': false
    }
  ];




  rootGroup = 'Storage Platform';
  structuredGroupData = this.dataService.structuredGroupData;

  constructor(private dataService: DataService) {
    // testing


    // real
    // this.dataService.fetchGroups();
  }

  ngOnInit() {

    this.currentUser = this.dataService.currentConsoleUser;

    if (!this.currentUser || this.currentUser === undefined || this.currentUser === null) {
      // this.router.navigate['login'];
      console.log("NO CURRENT USER!!!");
      return;
    }

    this.dataService.currentConsoleUser = new ConsoleUser('Admin', 'Basic QWRtaW46cGFzc3dvcmQ=', 'jono-pc', 1 , 'Collection 0', []);
    const p = this.dataService.getNestedChildren(this.mockGroups, this.dataService.currentConsoleUser.rootBackupGroupId);
    const x = _.orderBy(p, function(e){return e.GroupType; }, ['asc']);
    this.dataService.structuredGroupData = x;
  }
}
