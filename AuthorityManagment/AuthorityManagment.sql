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
  is '�˵���';
comment on column SYS_MENU.menu_id
  is '�˵�id';
comment on column SYS_MENU.menu_name
  is '�˵�����';
comment on column SYS_MENU.parent_id
  is '���˵�id';
comment on column SYS_MENU.order_num
  is '����';
comment on column SYS_MENU.url_addr
  is '�˵������ַ';
comment on column SYS_MENU.menu_type
  is '�˵����� 0-Ŀ¼ 1-�˵� 2-��ť';
comment on column SYS_MENU.menu_status
  is '�˵�״̬ 0-���� 1-������';
comment on column SYS_MENU.perms
  is 'Ȩ�ޱ�ʶ��';
comment on column SYS_MENU.menu_icon
  is '�˵�ͼ��';
comment on column SYS_MENU.create_time
  is '����ʱ��';
comment on column SYS_MENU.update_time
  is '����ʱ��';
comment on column SYS_MENU.remark
  is '��ע';
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
  is '���ű�';
comment on column SYS_ORG.org_id
  is '����id';
comment on column SYS_ORG.parent_org_id
  is '������id';
comment on column SYS_ORG.org_name
  is '��������';
comment on column SYS_ORG.order_num
  is '��������';
comment on column SYS_ORG.create_time
  is '����ʱ��';
comment on column SYS_ORG.update_time
  is '����ʱ��';
comment on column SYS_ORG.remark
  is '��ע';
comment on column SYS_ORG.del_flag
  is 'ɾ����ʶ 0-���� 1-ɾ��';
comment on column SYS_ORG.org_status
  is '����״̬ 0-���� 1-ͣ��';
comment on column SYS_ORG.fzr
  is '���Ÿ�����';
comment on column SYS_ORG.lxdh
  is '��ϵ�绰';
comment on column SYS_ORG.email
  is '����';
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
  is '����-�û�������';
comment on column SYS_ORG_USER.org_id
  is '����id';
comment on column SYS_ORG_USER.user_id
  is '�û�id';

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
  is '��ɫ��';
comment on column SYS_ROLE.role_id
  is '��ɫid';
comment on column SYS_ROLE.role_name
  is '��ɫ����';
comment on column SYS_ROLE.del_flag
  is 'ɾ����ʶ 0-���� 1-ɾ��';
comment on column SYS_ROLE.create_time
  is '����ʱ��';
comment on column SYS_ROLE.update_time
  is '����ʱ��';
comment on column SYS_ROLE.remark
  is '��ע';
comment on column SYS_ROLE.role_description
  is '��ɫ����';
comment on column SYS_ROLE.role_status
  is '��ɫ״̬ 0-���� 1-δ����';
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
  is '��ɫ-�˵�������';
comment on column SYS_ROLE_MENU.role_id
  is '��ɫid';
comment on column SYS_ROLE_MENU.menu_id
  is '�˵�id';

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
  is '��ɫ-�û�������';
comment on column SYS_ROLE_USER.role_id
  is '��ɫid';
comment on column SYS_ROLE_USER.user_id
  is '�û�id';

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
  is '�û���';
comment on column SYS_USER.user_id
  is '�û�id';
comment on column SYS_USER.username
  is '�û���';
comment on column SYS_USER.password
  is '����';
comment on column SYS_USER.email
  is '����';
comment on column SYS_USER.phonenumber
  is '�ֻ�����';
comment on column SYS_USER.sex
  is '�Ա� 0-�� 1-Ů 2-δ֪';
comment on column SYS_USER.salt
  is '�μ���';
comment on column SYS_USER.user_status
  is '�˺�״̬ 0-���� 1-ͣ��';
comment on column SYS_USER.del_flag
  is 'ɾ����ʶ 0-���� 1-ɾ��';
comment on column SYS_USER.last_login_time
  is '���һ�ε�¼ʱ�� ';
comment on column SYS_USER.create_time
  is '����ʱ��';
comment on column SYS_USER.update_time
  is '����ʱ��';
comment on column SYS_USER.remark
  is '��ע';
comment on column SYS_USER.realname
  is '��ʵ����';
alter table SYS_USER
  add constraint PK_SYS_USER_USER_ID primary key (USER_ID);


spool off
