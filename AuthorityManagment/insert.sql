???prompt PL/SQL Developer import file
prompt Created on 2018年12月17日 by Administrator
set feedback off
set define off
prompt Disabling triggers for SYS_MENU...
alter table SYS_MENU disable all triggers;
prompt Disabling triggers for SYS_ORG...
alter table SYS_ORG disable all triggers;
prompt Disabling triggers for SYS_ORG_USER...
alter table SYS_ORG_USER disable all triggers;
prompt Disabling triggers for SYS_ROLE...
alter table SYS_ROLE disable all triggers;
prompt Disabling triggers for SYS_ROLE_MENU...
alter table SYS_ROLE_MENU disable all triggers;
prompt Disabling triggers for SYS_ROLE_USER...
alter table SYS_ROLE_USER disable all triggers;
prompt Disabling triggers for SYS_USER...
alter table SYS_USER disable all triggers;
prompt Deleting SYS_USER...
delete from SYS_USER;
commit;
prompt Deleting SYS_ROLE_USER...
delete from SYS_ROLE_USER;
commit;
prompt Deleting SYS_ROLE_MENU...
delete from SYS_ROLE_MENU;
commit;
prompt Deleting SYS_ROLE...
delete from SYS_ROLE;
commit;
prompt Deleting SYS_ORG_USER...
delete from SYS_ORG_USER;
commit;
prompt Deleting SYS_ORG...
delete from SYS_ORG;
commit;
prompt Deleting SYS_MENU...
delete from SYS_MENU;
commit;
prompt Loading SYS_MENU...
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('e37ce2aa-1fc6-4b6a-962c-05f72d204ee6', '测试目录', '0', 4, null, 0, '0', null, 'fa-cogs', to_timestamp('06-12-2018 19:27:01.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('06-12-2018 19:27:01.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '这是测试目录');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('9e1b7a3f-0247-4fec-acfb-d9360ab50b36', '测试菜单1', 'e37ce2aa-1fc6-4b6a-962c-05f72d204ee6', 1, 'qqq', 1, '0', 'qqq', null, to_timestamp('06-12-2018 19:52:44.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('09-12-2018 10:20:21.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '这是测试菜单');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('580f5678-e2d8-494a-af7c-32361457234d', '部门管理', 'D5342FB095BD4257B1BFD8187A8988FE', 4, '/sysorg/sysorglist', 1, '0', 'system:org:list', null, to_timestamp('08-12-2018 19:35:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('08-12-2018 19:35:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('9b374a44-258b-4198-b854-fe1b72f74b13', '测试菜单2', 'e37ce2aa-1fc6-4b6a-962c-05f72d204ee6', 2, null, 1, '0', null, null, to_timestamp('09-12-2018 10:23:55.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('09-12-2018 10:23:55.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '这是测试菜单2');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('4fc709a9-6159-409e-a60d-dafdce86a1d5', '新增', '22519E12BEFD40CA9F8247D0C6A4DD6A', 1, null, 2, '0', 'system:user:add', null, to_timestamp('15-12-2018 20:48:14.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:02:55.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '新增用户');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('59cb93d2-5c35-4882-9c9e-d5e4a8b2143c', '编辑用户', '22519E12BEFD40CA9F8247D0C6A4DD6A', 2, null, 2, '0', 'system:user:edit', null, to_timestamp('15-12-2018 20:52:39.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:03:07.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '编辑');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('964d39e2-c851-4de4-b16e-69f21b84195e', '重置', '22519E12BEFD40CA9F8247D0C6A4DD6A', 3, null, 2, '0', 'system:user:resetPwd', null, to_timestamp('15-12-2018 20:53:49.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 20:53:49.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '重置密码');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('2ef2ebf1-96c1-4483-92fe-7a85c0ca5984', '新增', '7399A0D362084749B8A34543266141C8', 1, null, 2, '0', 'system:menu:add', null, to_timestamp('15-12-2018 21:02:10.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:02:10.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '新增菜单');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('d7569d5e-8a43-4610-9178-46c06e6abb1f', '编辑', '7399A0D362084749B8A34543266141C8', 2, null, 2, '0', 'system:menu:edit', null, to_timestamp('15-12-2018 21:03:40.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:03:40.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '编辑菜单');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('e2e27d19-c0b1-48c3-b21a-730fc8ea1146', '新增', '85A8E673994B424E8A466E1524188D1E', 1, null, 2, '0', 'system:role:add', null, to_timestamp('15-12-2018 21:06:25.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:06:25.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '新增角色');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('2c73903d-a734-4c07-8024-b1b96fd0f090', '编辑', '85A8E673994B424E8A466E1524188D1E', 2, null, 2, '0', 'system:role:edit', null, to_timestamp('15-12-2018 21:08:49.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:08:49.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '编辑角色');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('e3576e81-a583-46b8-b53c-84ff5f33123b', '新增', '580f5678-e2d8-494a-af7c-32361457234d', 1, null, 2, '0', 'system:org:add', null, to_timestamp('15-12-2018 21:10:20.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:10:20.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '新增部门');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('8a027b38-cd9e-4d19-b8d0-1341d8ee8fec', '编辑', '580f5678-e2d8-494a-af7c-32361457234d', 2, null, 2, '0', 'system:org:edit', null, to_timestamp('15-12-2018 21:10:55.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:10:55.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '编辑部门');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('2bfe8a59-720f-4c5c-b7ef-50e7ea1a16ab', '权限配置', '85A8E673994B424E8A466E1524188D1E', 3, null, 2, '0', 'system:role:permsConfig', null, to_timestamp('15-12-2018 21:13:32.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 21:13:32.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '权限配置');
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('D5342FB095BD4257B1BFD8187A8988FE', '系统管理', '0', 3, null, 0, '0', null, 'fa-cogs', to_timestamp('20-11-2018 20:31:58.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('20-11-2018 20:32:13.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('22519E12BEFD40CA9F8247D0C6A4DD6A', '用户管理', 'D5342FB095BD4257B1BFD8187A8988FE', 1, '/sysuser/sysuserlist', 1, '0', 'system:user:list', null, to_timestamp('20-11-2018 20:31:58.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('20-11-2018 20:32:13.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('85A8E673994B424E8A466E1524188D1E', '角色管理', 'D5342FB095BD4257B1BFD8187A8988FE', 2, '/sysrole/sysrolelist', 1, '0', 'system:role:list', null, to_timestamp('20-11-2018 20:31:58.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('20-11-2018 20:32:13.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('7399A0D362084749B8A34543266141C8', '菜单管理', 'D5342FB095BD4257B1BFD8187A8988FE', 3, '/sysmenu/sysmenulist', 1, '0', 'system:menu:list', null, to_timestamp('20-11-2018 20:31:58.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('20-11-2018 20:32:13.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
insert into SYS_MENU (menu_id, menu_name, parent_id, order_num, url_addr, menu_type, menu_status, perms, menu_icon, create_time, update_time, remark)
values ('30EFC7DB6B82409E94B3B836AFADDCAE', '字典管理', 'D5342FB095BD4257B1BFD8187A8988FE', 5, null, 1, '0', null, null, to_timestamp('20-11-2018 20:31:58.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('20-11-2018 20:32:13.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null);
commit;
prompt 19 records loaded
prompt Loading SYS_ORG...
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('2981EE8EAD384B57818CEEA6177F723C', '0', '系统管理部门', 1, to_date('08-12-2018 20:17:30', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:17:30', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', null, null, null);
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('9F3872ABA1D048B29328532862B90267', '2981EE8EAD384B57818CEEA6177F723C', '深圳总公司', 2, to_date('08-12-2018 20:29:15', 'dd-mm-yyyy hh24:mi:ss'), to_date('16-12-2018 14:57:09', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '张三', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('0371B110F5E64ACAB4835B93E6B12D71', '2981EE8EAD384B57818CEEA6177F723C', '江西分公司', 3, to_date('08-12-2018 20:29:15', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:29:15', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '李四', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('3B082F5FA53E4F78B4F6C9F15F1D2D9A', '9F3872ABA1D048B29328532862B90267', '研发部门', 1, to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '王二', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('600EF85E20C949A9AF65E9ADFC16CDE1', '9F3872ABA1D048B29328532862B90267', '市场部门', 2, to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '麻子', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('6C26EC54E76B4B50A6A7186856DE781D', '0371B110F5E64ACAB4835B93E6B12D71', '测试部门', 3, to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), to_date('16-12-2018 14:54:21', 'dd-mm-yyyy hh24:mi:ss'), '测试部门', '0', '0', '王五', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('3D000D604A9F4EA295A744344414C1C4', '9F3872ABA1D048B29328532862B90267', '财务部门', 4, to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '张飞', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('6F9F8716ACB54781ADDDE19954F62ACB', '9F3872ABA1D048B29328532862B90267', '运维部门', 5, to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:31:44', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '赵云', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('7C640205A63F49DAB61FDDC99B141965', '0371B110F5E64ACAB4835B93E6B12D71', '市场部门', 1, to_date('08-12-2018 20:34:02', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:34:02', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '关羽', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('8AC93F062F904EF28D3ADB85B84BF041', '0371B110F5E64ACAB4835B93E6B12D71', '财务部门', 2, to_date('08-12-2018 20:34:02', 'dd-mm-yyyy hh24:mi:ss'), to_date('08-12-2018 20:34:02', 'dd-mm-yyyy hh24:mi:ss'), null, '0', '0', '马超', '17607009639', '168285473@qq.com');
insert into SYS_ORG (org_id, parent_org_id, org_name, order_num, create_time, update_time, remark, del_flag, org_status, fzr, lxdh, email)
values ('efb1d579-6f3a-40cf-b15a-9c2c3df7dfaa', '0371B110F5E64ACAB4835B93E6B12D71', '测试部门2', 4, to_date('16-12-2018 14:54:00', 'dd-mm-yyyy hh24:mi:ss'), to_date('16-12-2018 14:54:34', 'dd-mm-yyyy hh24:mi:ss'), '老将黄忠', '0', '0', '黄忠', '17607009639', '168285473@qq.com');
commit;
prompt 11 records loaded
prompt Loading SYS_ORG_USER...
insert into SYS_ORG_USER (org_id, user_id)
values ('0371B110F5E64ACAB4835B93E6B12D71', '8887e818-71b7-4305-a28a-e580d7f04a40');
insert into SYS_ORG_USER (org_id, user_id)
values ('2981EE8EAD384B57818CEEA6177F723C', '893B224017C742F1896D35816D0FCD5B');
insert into SYS_ORG_USER (org_id, user_id)
values ('9F3872ABA1D048B29328532862B90267', 'F8A4D9376E134643BB1CF1A1E8435246');
insert into SYS_ORG_USER (org_id, user_id)
values ('0371B110F5E64ACAB4835B93E6B12D71', 'bb76895f-7832-477a-8a8e-b63718a2769a');
insert into SYS_ORG_USER (org_id, user_id)
values ('0371B110F5E64ACAB4835B93E6B12D71', '3fcdf38a-ac5d-48de-9eaf-48e65ad3061f');
commit;
prompt 5 records loaded
prompt Loading SYS_ROLE...
insert into SYS_ROLE (role_id, role_name, del_flag, create_time, update_time, remark, role_description, role_status)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'admin', '0', to_timestamp('17-11-2018 18:57:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('17-11-2018 18:57:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null, '系统管理员', '0');
insert into SYS_ROLE (role_id, role_name, del_flag, create_time, update_time, remark, role_description, role_status)
values ('E46D6876FB244C82A8C1BB73E3D29F75', 'common', '0', to_timestamp('17-11-2018 18:57:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('17-11-2018 18:57:06.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null, '普通用户', '0');
insert into SYS_ROLE (role_id, role_name, del_flag, create_time, update_time, remark, role_description, role_status)
values ('526581a8-59c7-4d5c-a607-c6c15e84cee4', 'test', '0', to_timestamp('15-12-2018 20:10:38.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('16-12-2018 23:01:27.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '这是测试角色啊', '测试角色', '0');
commit;
prompt 3 records loaded
prompt Loading SYS_ROLE_MENU...
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'e37ce2aa-1fc6-4b6a-962c-05f72d204ee6');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '9e1b7a3f-0247-4fec-acfb-d9360ab50b36');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '580f5678-e2d8-494a-af7c-32361457234d');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('526581a8-59c7-4d5c-a607-c6c15e84cee4', 'e37ce2aa-1fc6-4b6a-962c-05f72d204ee6');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('526581a8-59c7-4d5c-a607-c6c15e84cee4', '9e1b7a3f-0247-4fec-acfb-d9360ab50b36');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('526581a8-59c7-4d5c-a607-c6c15e84cee4', '9b374a44-258b-4198-b854-fe1b72f74b13');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '9b374a44-258b-4198-b854-fe1b72f74b13');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '4fc709a9-6159-409e-a60d-dafdce86a1d5');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '59cb93d2-5c35-4882-9c9e-d5e4a8b2143c');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '964d39e2-c851-4de4-b16e-69f21b84195e');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '2ef2ebf1-96c1-4483-92fe-7a85c0ca5984');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'd7569d5e-8a43-4610-9178-46c06e6abb1f');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'e2e27d19-c0b1-48c3-b21a-730fc8ea1146');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '2c73903d-a734-4c07-8024-b1b96fd0f090');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'e3576e81-a583-46b8-b53c-84ff5f33123b');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '8a027b38-cd9e-4d19-b8d0-1341d8ee8fec');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '2bfe8a59-720f-4c5c-b7ef-50e7ea1a16ab');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '22519E12BEFD40CA9F8247D0C6A4DD6A');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '30EFC7DB6B82409E94B3B836AFADDCAE');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '7399A0D362084749B8A34543266141C8');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '85A8E673994B424E8A466E1524188D1E');
insert into SYS_ROLE_MENU (role_id, menu_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', 'D5342FB095BD4257B1BFD8187A8988FE');
commit;
prompt 22 records loaded
prompt Loading SYS_ROLE_USER...
insert into SYS_ROLE_USER (role_id, user_id)
values ('4C103CBBF71B48B7B1D5CF5C767C7D94', '893B224017C742F1896D35816D0FCD5B');
insert into SYS_ROLE_USER (role_id, user_id)
values ('E46D6876FB244C82A8C1BB73E3D29F75', 'F8A4D9376E134643BB1CF1A1E8435246');
commit;
prompt 2 records loaded
prompt Loading SYS_USER...
insert into SYS_USER (user_id, username, password, email, phonenumber, sex, salt, user_status, del_flag, last_login_time, create_time, update_time, remark, realname)
values ('8887e818-71b7-4305-a28a-e580d7f04a40', 'sunquan', 'e04a8901f9803e0c3a2f3ddf48692834', '168285473@qq.com', '17607009639', '0', null, '0', '0', null, to_timestamp('15-12-2018 13:40:57.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('16-12-2018 13:03:27.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '碧眼儿', '孙权');
insert into SYS_USER (user_id, username, password, email, phonenumber, sex, salt, user_status, del_flag, last_login_time, create_time, update_time, remark, realname)
values ('bb76895f-7832-477a-8a8e-b63718a2769a', 'liubei', 'bc141f7c8e47c00b630b4a8daa6ac908', '168285473@qq.com', '17607009639', '1', null, '0', '0', null, to_timestamp('09-12-2018 11:07:25.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 13:45:57.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '卖草鞋的', '刘备');
insert into SYS_USER (user_id, username, password, email, phonenumber, sex, salt, user_status, del_flag, last_login_time, create_time, update_time, remark, realname)
values ('3fcdf38a-ac5d-48de-9eaf-48e65ad3061f', 'caocao', 'e9e06d9a8ede2ce1680a1a7db0374399', '168285473@qq.com', '17607009639', '0', null, '0', '0', null, to_timestamp('09-12-2018 12:08:38.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 13:45:47.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), '宁我负天下人！', '曹操');
insert into SYS_USER (user_id, username, password, email, phonenumber, sex, salt, user_status, del_flag, last_login_time, create_time, update_time, remark, realname)
values ('893B224017C742F1896D35816D0FCD5B', 'admin', '038bdaf98f2037b31f1e75b5b4c9b26e', '168285473@qq.com', '17607009639', '0', null, '0', '0', null, to_timestamp('16-11-2018 22:15:20.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('16-11-2018 22:15:20.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null, '管理员');
insert into SYS_USER (user_id, username, password, email, phonenumber, sex, salt, user_status, del_flag, last_login_time, create_time, update_time, remark, realname)
values ('F8A4D9376E134643BB1CF1A1E8435246', 'zhangsan', '2a0d136ceacafe198ea64ac09daaf1b6', '168285473@qq.com', '17607009639', '1', null, '0', '0', null, to_timestamp('17-11-2018 18:58:34.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), to_timestamp('15-12-2018 20:58:49.000000', 'dd-mm-yyyy hh24:mi:ss.ff'), null, '张三');
commit;
prompt 5 records loaded
prompt Enabling triggers for SYS_MENU...
alter table SYS_MENU enable all triggers;
prompt Enabling triggers for SYS_ORG...
alter table SYS_ORG enable all triggers;
prompt Enabling triggers for SYS_ORG_USER...
alter table SYS_ORG_USER enable all triggers;
prompt Enabling triggers for SYS_ROLE...
alter table SYS_ROLE enable all triggers;
prompt Enabling triggers for SYS_ROLE_MENU...
alter table SYS_ROLE_MENU enable all triggers;
prompt Enabling triggers for SYS_ROLE_USER...
alter table SYS_ROLE_USER enable all triggers;
prompt Enabling triggers for SYS_USER...
alter table SYS_USER enable all triggers;
set feedback on
set define on
prompt Done.
