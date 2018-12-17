------------------------------------------------------
-- Export file for user GUOZW@PDBORCL               --
-- Created by Administrator on 2018-12-17, 21:54:18 --
------------------------------------------------------

set define off
spool AuthorityManagment.log

prompt
prompt Creating table SYS_MENU
prompt =======================
prompt
create table SYS_MENU
(
  menu_id     VARCHAR2(36) default sys_guid() not null,
  menu_name   VARCHAR2(100),
  parent_id   VARCHAR2(36),
  order_num   INTEGER,
  url_addr    VARCHAR2(100),
  menu_type   INTEGER,
  menu_status CHAR(1),
  perms       VARCHAR2(100),
  menu_icon   VARCHAR2(100),
  create_time TIMESTAMP(6) default sysdate,
  update_time TIMESTAMP(6) default sysdate,
  remark      VARCHAR2(1000)
)
;
comment on table SYS_MENU
  is '菜单表';
comment on column SYS_MENU.menu_id
  is '菜单id';
comment on column SYS_MENU.menu_name
  is '菜单名称';
comment on column SYS_MENU.parent_id
  is '父菜单id';
comment on column SYS_MENU.order_num
  is '排序';
comment on column SYS_MENU.url_addr
  is '菜单请求地址';
comment on column SYS_MENU.menu_type
  is '菜单类型 0-目录 1-菜单 2-按钮';
comment on column SYS_MENU.menu_status
  is '菜单状态 0-启用 1-不启用';
comment on column SYS_MENU.perms
  is '权限标识符';
comment on column SYS_MENU.menu_icon
  is '菜单图标';
comment on column SYS_MENU.create_time
  is '创建时间';
comment on column SYS_MENU.update_time
  is '更新时间';
comment on column SYS_MENU.remark
  is '备注';
alter table SYS_MENU
  add constraint PK_SYS_MENU_MENU_ID primary key (MENU_ID);

prompt
prompt Creating table SYS_ORG
prompt ======================
prompt
create table SYS_ORG
(
  org_id        VARCHAR2(36) default sys_guid() not null,
  parent_org_id VARCHAR2(36),
  org_name      VARCHAR2(200),
  order_num     INTEGER,
  create_time   DATE default sysdate,
  update_time   DATE default sysdate,
  remark        VARCHAR2(500),
  del_flag      CHAR(1) default 0,
  org_status    CHAR(1) default 0,
  fzr           VARCHAR2(100),
  lxdh          VARCHAR2(100),
  email         VARCHAR2(100)
)
;
comment on table SYS_ORG
  is '部门表';
comment on column SYS_ORG.org_id
  is '部门id';
comment on column SYS_ORG.parent_org_id
  is '父部门id';
comment on column SYS_ORG.org_name
  is '部门名称';
comment on column SYS_ORG.order_num
  is '部门排序';
comment on column SYS_ORG.create_time
  is '创建时间';
comment on column SYS_ORG.update_time
  is '更新时间';
comment on column SYS_ORG.remark
  is '备注';
comment on column SYS_ORG.del_flag
  is '删除标识 0-存在 1-删除';
comment on column SYS_ORG.org_status
  is '部门状态 0-正常 1-停用';
comment on column SYS_ORG.fzr
  is '部门负责人';
comment on column SYS_ORG.lxdh
  is '联系电话';
comment on column SYS_ORG.email
  is '邮箱';
alter table SYS_ORG
  add constraint PK_SYS_ORG_ID primary key (ORG_ID);

prompt
prompt Creating table SYS_ORG_USER
prompt ===========================
prompt
create table SYS_ORG_USER
(
  org_id  VARCHAR2(36),
  user_id VARCHAR2(36)
)
;
comment on table SYS_ORG_USER
  is '部门-用户关联表';
comment on column SYS_ORG_USER.org_id
  is '部门id';
comment on column SYS_ORG_USER.user_id
  is '用户id';

prompt
prompt Creating table SYS_ROLE
prompt =======================
prompt
create table SYS_ROLE
(
  role_id          VARCHAR2(36) default sys_guid() not null,
  role_name        VARCHAR2(36),
  del_flag         CHAR(1) default 0,
  create_time      TIMESTAMP(6) default sysdate,
  update_time      TIMESTAMP(6) default sysdate,
  remark           VARCHAR2(1000),
  role_description VARCHAR2(100),
  role_status      CHAR(1) default 0
)
;
comment on table SYS_ROLE
  is '角色表';
comment on column SYS_ROLE.role_id
  is '角色id';
comment on column SYS_ROLE.role_name
  is '角色名称';
comment on column SYS_ROLE.del_flag
  is '删除标识 0-正常 1-删除';
comment on column SYS_ROLE.create_time
  is '创建时间';
comment on column SYS_ROLE.update_time
  is '更新时间';
comment on column SYS_ROLE.remark
  is '备注';
comment on column SYS_ROLE.role_description
  is '角色描述';
comment on column SYS_ROLE.role_status
  is '角色状态 0-启用 1-未启用';
alter table SYS_ROLE
  add constraint PK_SYS_ROLE_ROLE_ID primary key (ROLE_ID);

prompt
prompt Creating table SYS_ROLE_MENU
prompt ============================
prompt
create table SYS_ROLE_MENU
(
  role_id VARCHAR2(36),
  menu_id VARCHAR2(36)
)
;
comment on table SYS_ROLE_MENU
  is '角色-菜单关联表';
comment on column SYS_ROLE_MENU.role_id
  is '角色id';
comment on column SYS_ROLE_MENU.menu_id
  is '菜单id';

prompt
prompt Creating table SYS_ROLE_USER
prompt ============================
prompt
create table SYS_ROLE_USER
(
  role_id VARCHAR2(36),
  user_id VARCHAR2(36)
)
;
comment on table SYS_ROLE_USER
  is '角色-用户关联表';
comment on column SYS_ROLE_USER.role_id
  is '角色id';
comment on column SYS_ROLE_USER.user_id
  is '用户id';

prompt
prompt Creating table SYS_USER
prompt =======================
prompt
create table SYS_USER
(
  user_id         VARCHAR2(36) default sys_guid() not null,
  username        VARCHAR2(30),
  password        VARCHAR2(50),
  email           VARCHAR2(30),
  phonenumber     VARCHAR2(11),
  sex             CHAR(1),
  salt            VARCHAR2(36),
  user_status     CHAR(1) default 0,
  del_flag        CHAR(1) default 0,
  last_login_time TIMESTAMP(6),
  create_time     TIMESTAMP(6) default sysdate,
  update_time     TIMESTAMP(6) default sysdate,
  remark          VARCHAR2(1000),
  realname        VARCHAR2(50)
)
;
comment on table SYS_USER
  is '用户表';
comment on column SYS_USER.user_id
  is '用户id';
comment on column SYS_USER.username
  is '用户名';
comment on column SYS_USER.password
  is '密码';
comment on column SYS_USER.email
  is '邮箱';
comment on column SYS_USER.phonenumber
  is '手机号码';
comment on column SYS_USER.sex
  is '性别 0-男 1-女 2-未知';
comment on column SYS_USER.salt
  is '盐加密';
comment on column SYS_USER.user_status
  is '账号状态 0-正常 1-停用';
comment on column SYS_USER.del_flag
  is '删除标识 0-存在 1-删除';
comment on column SYS_USER.last_login_time
  is '最后一次登录时间 ';
comment on column SYS_USER.create_time
  is '创建时间';
comment on column SYS_USER.update_time
  is '更新时间';
comment on column SYS_USER.remark
  is '备注';
comment on column SYS_USER.realname
  is '真实名称';
alter table SYS_USER
  add constraint PK_SYS_USER_USER_ID primary key (USER_ID);


spool off
