SET NAMES 'utf8';
DROP DATABASE IF EXISTS mt;
CREATE DATABASE mt CHARSET=UTF8;
USE mt;
set names gbk;
create table mt_phone(
    phone_id int primary key auto_increment,
    phone_name varchar(32),
    phone_title varchar(32),
    phone_price int,
    phone_image varchar(128),
    phone_s_image varchar(128),
    phone_type  varchar(128),
    phone_color varchar(128),
    phone_content varchar(32)
);
insert into mt_phone values
(null,"美图M6标准版","自拍大明星",2399,"mtM6_01.jpg","mtM6_s_01.jpg","M6标准版","月光白","64G"),
(null,"美图M6 Hello Kitty特别版","自拍大明星",2599,"mtM6_02.jpg","mtM6_s_02.jpg","HelloKitty特别版","粉嫩红","32G"),
(null,"美图V4S标准版","自拍旗舰",3499,"mtV4S_01.jpg","mtV4S_s_01.jpg","V4S标准版","商务黑","128G"),
(null,"美图V4S雅致版","自拍旗舰",4399,"mtV4S_02.jpg","mtV4S_s_02.jpg","雅致版","雅致黑","32G"),
(null,"美图V4拍照手机","前置2100万像素的拍照手机",3499,"mtV4_01.jpg","mtV4S_s_01.jpg","拍照版","深色蓝","64G"),
(null,"美图M4S拍照手机","全新升级的夜间自拍神器",2399,"mtM4S_01.jpg","mtV4S_s_02.jpg","M4S版","深度灰","64G"),
(null,"美图M4拍照手机","夜间自拍神器",2499,"mtM4_01.jpg","mtV4S_s_01.jpg","M4版","天空蓝","64G"),
(null,"美图M4 Hello Kitty 特别版","夜间自拍神器",2499,"mtM4_02.jpg","mtV4S_s_02.jpg","M4特别版","优雅红","32G");

create table parts(
    np_id int primary key auto_increment,
    np_name varchar(128),
    np_title varchar(128),
    np_price int,
    np_s_image varchar(128),
    np_type varchar(32),
    np_cate varchar(32)
);

insert into parts values
(null,"MeituFamily潮趣手机壳","潮趣手机壳",99,"np_phone_shell_01.jpg","手机壳","常规配件"),
(null,"美图M6手机数据线","原装正品，品质保证",39,"np_data_line_01.jpg","充电器","常规配件"),
(null,"美图V4S高透手机壳","减震防摔，保护手机",49,"np_phone_shell_fur_01.jpg","手机壳","常规配件"),
(null,"美图M6 3D屏幕保护膜","3D全屏覆盖，无缝隙完美贴合",199,"np_phone_mem_01.jpg","贴膜","常规配件"),
(null,"美图手机专属耳机","美图专属耳机",79,"np_headset_01.jpg","耳机","常规配件"),
(null,"美图V4/V4S钢化玻璃贴膜","原装正品，品质保证",49,"np_phone_mo_01.jpg","贴膜","常规配件"),
(null,"美图V4/V4S/M6电源适配器","原装正品，品质保证",29,"np_adapter_01.jpg","充电器","常规配件"),
(null,"美图V4透明手机膜","皮套材质，抽取式设计",49,"np_phone_shell_tran_01.jpg","贴膜","常规配件"),
(null,"美图 X MLGB潮牌手机壳","跟随潮流，新颖",129,"np_phone_shell_mlgb_01.jpg","手机壳","常规配件"),
(null,"美图M4/M4S皮革手机壳","跟随潮流，新颖",79,"np_phone_shell_skin_01.jpg","手机壳","常规配件"),
(null,"美图M4/M4STPU手机壳","跟随潮流，新颖",49,"np_phone_shell_tpu_01.jpg","手机壳","常规配件"),
(null,"美图M4编织手机壳","独特新颖",99,"np_phone_shell_white_01.jpg","手机壳","常规配件"),
(null,"美图遥控器第二代","再也不怕夜拍",89,"shoot_01.jpg","遥控器","拍摄配件"),
(null,"美图自拍补光灯","美得不行",99,"shoot_02.jpg","补光灯","拍摄配件"),
(null,"美图v4/V4S 360度旋转支架","旋转自如",79,"shoot_03.jpg","自拍架","拍摄配件"),
(null,"MeituFamily X MLGB 夏日潮TEE(闪兔成人款S)","夏日潮Tee",198,"lifestyle_black_t_01.jpg","T恤","生活方式"),
(null,"MeituFamily X MLGB 夏日潮TEE(机车熊儿童款120CM)","夏日潮Tee儿童款",139,"lifestyle_black_tee_01.jpg","T恤","生活方式"),
(null,"MeituFamily雨伞","雨天也拉风",189,"lifestyle_san_01.jpg","生活周边","生活方式"),
(null,"MeituFamily笔记本","潮酷文具",20,"lifestyle_note_01.jpg","生活周边","生活方式"),
(null,"MeituFamily小笼包鸡购物袋","购物必备",99,"lifestyle_bag_01.jpg","生活周边","生活方式"),
(null,"MeituFamily萌趣贴纸","酷萌贴纸",29,"lifestyle_paper_01.jpg","生活周边","生活方式"),
(null,"限量版美图公仔","超可爱",59,"lifestyle_toy_01.jpg","公仔","生活方式"),
(null,"气球恐龙绿帽子","大磊绿",59,"lifestyle_cap_01.jpg","生活周边","生活方式"),
(null,"美MLGB x meitu 2016 睡眠装备","舒适方便",129,"lifestyle_sleep_01.jpg","生活周边","生活方式");

create table shopcart_detail(
    cart_id int primary key auto_increment,
    cart_image varchar(128),
    cart_norms varchar(32),
    cart_name varchar(128),
    cart_price int,
    cart_count int
);

create table parts_type(
    pt_id int primary key auto_increment,
    pt_name varchar(32),
    pt_image varchar(128),
    np_id int
);
insert into parts_type values
(null,"闪兔款","phone_shell_small_01.jpg",1),
(null,"小笼鸡包款","phone_shell_small_02.jpg",1),
(null,"高大上款","phone_shell_small_03.jpg",1),
(null,"太空柠檬款","phone_shell_small_04.jpg",1),
(null,"白色","phone_dataline_small_01.jpg",2),
(null,"黑色","phone_shell_black_small_01.jpg",3),
(null,"防蓝光","phone_mo_small_01.jpg",4),
(null,"隔音","mt_headset_small_01.jpg",5),
(null,"高清","phone_shell_fur_small_01.jpg",6),
(null,"超大容量","phone_power_small_01.jpg",7),
(null,"透明","phone_shell_tran_small_01.jpg",8),
(null,"酷爆","phone_shell_cool_small_01.jpg",9),
(null,"粉色","phone_shell_skin_small_02.jpg",10),
(null,"白色","phone_shell_skin_small_03.jpg",10),
(null,"tpu","phone_shell_tpu_small_01.jpg",11),
(null,"纯手工","phone_shell_bian_small_01.jpg",12),
(null,"可携带","phone_control_small_01.jpg",13),
(null,"护眼","phone_lamp_small_01.jpg",14),
(null,"360旋转","phone_holder_small_01.jpg",15),
(null,"黑色休闲","lifestyle_black_t_01.jpg",16),
(null,"黑色大气","lifestyle_black_tee_01.jpg",17),
(null,"白花","lifestyle_san_small_03.jpg",18),
(null,"五颜六色","lifestyle_san_small_04.jpg",18),
(null,"XXL","lifestyle_note_small_01.jpg",19),
(null,"XL","lifestyle_note_small_02.jpg",19),
(null,"L","lifestyle_note_small_03.jpg",19),
(null,"M","lifestyle_note_small_04.jpg",19),
(null,"S","lifestyle_note_small_05.jpg",19),
(null,"女性专用","lifestyle_bag_small_01.jpg",20),
(null,"加厚","lifestyle_paper_small_01.jpg",21),
(null,"火娃","lifestyle_toy_small_02.jpg",22),
(null,"水娃","lifestyle_toy_small_03.jpg",22),
(null,"千里眼","lifestyle_toy_small_04.jpg",22),
(null,"顺风耳","lifestyle_toy_small_05.jpg",22),
(null,"宝强绿","lifestyle_cap_small_01.jpg",23),
(null,"舒适款","lifestyle_sleep_small_01.jpg",24);
create table np_img(
    img_id int primary key auto_increment,
    img_small varchar(128),
    img_big varchar(128),
    np_id int
);
insert into np_img values
(null,"phone_shell_small_01.jpg","phone_shell_big_01.jpg",1),
(null,"phone_shell_small_02.jpg","phone_shell_big_02.jpg",1),
(null,"phone_shell_small_03.jpg","phone_shell_big_03.jpg",1),
(null,"phone_shell_small_04.jpg","phone_shell_big_04.jpg",1),
(null,"phone_dataline_small_01.jpg","phone_dataline_big_01.jpg",2),
(null,"phone_dataline_small_02.jpg","phone_dataline_big_02.jpg",2),
(null,"phone_dataline_small_03.jpg","phone_dataline_big_03.jpg",2),
(null,"phone_dataline_small_04.jpg","phone_dataline_big_04.jpg",2),
(null,"phone_dataline_small_05.jpg","phone_dataline_big_05.jpg",2),
(null,"phone_shell_black_small_01.jpg","phone_shell_black_big_01.jpg",3),
(null,"phone_shell_black_small_02.jpg","phone_shell_black_big_01.jpg",3),
(null,"phone_shell_black_small_03.jpg","phone_shell_black_big_01.jpg",3),
(null,"phone_shell_black_small_04.jpg","phone_shell_black_big_01.jpg",3),
(null,"phone_shell_black_small_05.jpg","phone_shell_black_big_01.jpg",3),
(null,"phone_mo_small_01.jpg","phone_mo_big_01.jpg",4),
(null,"phone_mo_small_02.jpg","phone_mo_big_02.jpg",4),
(null,"phone_mo_small_03.jpg","phone_mo_big_03.jpg",4),
(null,"phone_mo_small_04.jpg","phone_mo_big_04.jpg",4),
(null,"phone_mo_small_05.jpg","phone_mo_big_05.jpg",4),
(null,"mt_headset_small_01.jpg","mt_headset_big_01.jpg",5),
(null,"mt_headset_small_02.jpg","mt_headset_big_02.jpg",5),
(null,"mt_headset_small_03.jpg","mt_headset_big_03.jpg",5),
(null,"mt_headset_small_04.jpg","mt_headset_big_04.jpg",5),
(null,"mt_headset_small_05.jpg","mt_headset_big_05.jpg",5),
(null,"phone_shell_fur_small_01.jpg","phone_shell_fur_big_01.jpg",6),
(null,"phone_shell_fur_small_02.jpg","phone_shell_fur_big_02.jpg",6),
(null,"phone_shell_fur_small_03.jpg","phone_shell_fur_big_03.jpg",6),
(null,"phone_shell_fur_small_04.jpg","phone_shell_fur_big_04.jpg",6),
(null,"phone_shell_fur_small_05.jpg","phone_shell_fur_big_05.jpg",6),
(null,"phone_power_small_01.jpg","phone_power_big_01.jpg",7),
(null,"phone_power_small_02.jpg","phone_power_big_02.jpg",7),
(null,"phone_power_small_03.jpg","phone_power_big_03.jpg",7),
(null,"phone_power_small_04.jpg","phone_power_big_04.jpg",7),
(null,"phone_power_small_05.jpg","phone_power_big_05.jpg",7),
(null,"phone_shell_tran_small_01.jpg","phone_shell_tran_big_01.jpg",8),
(null,"phone_shell_tran_small_02.jpg","phone_shell_tran_big_02.jpg",8),
(null,"phone_shell_tran_small_03.jpg","phone_shell_tran_big_03.jpg",8),
(null,"phone_shell_tran_small_04.jpg","phone_shell_tran_big_04.jpg",8),
(null,"phone_shell_tran_small_05.jpg","phone_shell_tran_big_05.jpg",8),
(null,"phone_shell_cool_small_01.jpg","phone_shell_cool_big_01.jpg",9),
(null,"phone_shell_cool_small_02.jpg","phone_shell_cool_big_02.jpg",9),
(null,"phone_shell_cool_small_03.jpg","phone_shell_cool_big_03.jpg",9),
(null,"phone_shell_cool_small_04.jpg","phone_shell_cool_big_04.jpg",9),
(null,"phone_shell_cool_small_05.jpg","phone_shell_cool_big_05.jpg",9),
(null,"phone_shell_skin_small_01.jpg","phone_shell_skin_big_01.jpg",10),
(null,"phone_shell_skin_small_02.jpg","phone_shell_skin_big_02.jpg",10),
(null,"phone_shell_skin_small_03.jpg","phone_shell_skin_big_03.jpg",10),
(null,"phone_shell_skin_small_04.jpg","phone_shell_skin_big_04.jpg",10),
(null,"phone_shell_skin_small_05.jpg","phone_shell_skin_big_05.jpg",10),
(null,"phone_shell_tpu_small_01.jpg","phone_shell_tpu_big_01.jpg",11),
(null,"phone_shell_tpu_small_02.jpg","phone_shell_tpu_big_02.jpg",11),
(null,"phone_shell_tpu_small_03.jpg","phone_shell_tpu_big_03.jpg",11),
(null,"phone_shell_tpu_small_04.jpg","phone_shell_tpu_big_04.jpg",11),
(null,"phone_shell_tpu_small_05.jpg","phone_shell_tpu_big_05.jpg",11),
(null,"phone_shell_bian_small_01.jpg","phone_shell_bian_big_01.jpg",12),
(null,"phone_shell_bian_small_02.jpg","phone_shell_bian_big_02.jpg",12),
(null,"phone_shell_bian_small_03.jpg","phone_shell_bian_big_03.jpg",12),
(null,"phone_shell_bian_small_04.jpg","phone_shell_bian_big_04.jpg",12),
(null,"phone_control_small_01.jpg","phone_control_big_01.jpg",13),
(null,"phone_control_small_02.jpg","phone_control_big_02.jpg",13),
(null,"phone_control_small_03.jpg","phone_control_big_03.jpg",13),
(null,"phone_control_small_04.jpg","phone_control_big_04.jpg",13),
(null,"phone_control_small_05.jpg","phone_control_big_05.jpg",13),
(null,"phone_lamp_small_01.jpg","phone_lamp_big_01.jpg",14),
(null,"phone_lamp_small_02.jpg","phone_lamp_big_02.jpg",14),
(null,"phone_lamp_small_03.jpg","phone_lamp_big_03.jpg",14),
(null,"phone_lamp_small_04.jpg","phone_lamp_big_04.jpg",14),
(null,"phone_lamp_small_05.jpg","phone_lamp_big_05.jpg",14),
(null,"phone_holder_small_01.jpg","phone_holder_big_01.jpg",15),
(null,"phone_holder_small_02.jpg","phone_holder_big_02.jpg",15),
(null,"phone_holder_small_03.jpg","phone_holder_big_03.jpg",15),
(null,"phone_holder_small_04.jpg","phone_holder_big_04.jpg",15),
(null,"phone_holder_small_05.jpg","phone_holder_big_05.jpg",15),
(null,"lifestyle_black_t_01.jpg","lifestyle_black_t_01.jpg",16),
(null,"lifestyle_black_tee_01.jpg","lifestyle_black_tee_01.jpg",17),
(null,"lifestyle_san_small_01.jpg","lifestyle_san_big_01.jpg",18),
(null,"lifestyle_san_small_02.jpg","lifestyle_san_big_02.jpg",18),
(null,"lifestyle_san_small_03.jpg","lifestyle_san_big_03.jpg",18),
(null,"lifestyle_san_small_04.jpg","lifestyle_san_big_04.jpg",18),
(null,"lifestyle_san_small_05.jpg","lifestyle_san_big_05.jpg",18),
(null,"lifestyle_note_small_01.jpg","lifestyle_note_big_01.jpg",19),
(null,"lifestyle_note_small_02.jpg","lifestyle_note_big_02.jpg",19),
(null,"lifestyle_note_small_03.jpg","lifestyle_note_big_03.jpg",19),
(null,"lifestyle_note_small_04.jpg","lifestyle_note_big_04.jpg",19),
(null,"lifestyle_note_small_05.jpg","lifestyle_note_big_05.jpg",19),
(null,"lifestyle_bag_small_01.jpg","lifestyle_bag_big_01.jpg",20),
(null,"lifestyle_bag_small_02.jpg","lifestyle_bag_big_02.jpg",20),
(null,"lifestyle_bag_small_03.jpg","lifestyle_bag_big_03.jpg",20),
(null,"lifestyle_paper_small_01.jpg","lifestyle_paper_big_01.jpg",21),
(null,"lifestyle_paper_small_02.jpg","lifestyle_paper_big_02.jpg",21),
(null,"lifestyle_paper_small_03.jpg","lifestyle_paper_big_03.jpg",21),
(null,"lifestyle_paper_small_04.jpg","lifestyle_paper_big_04.jpg",21),
(null,"lifestyle_toy_small_01.jpg","lifestyle_toy_big_01.jpg",22),
(null,"lifestyle_toy_small_02.jpg","lifestyle_toy_big_02.jpg",22),
(null,"lifestyle_toy_small_03.jpg","lifestyle_toy_big_03.jpg",22),
(null,"lifestyle_toy_small_04.jpg","lifestyle_toy_big_04.jpg",22),
(null,"lifestyle_toy_small_05.jpg","lifestyle_toy_big_05.jpg",22),
(null,"lifestyle_cap_small_01.jpg","lifestyle_cap_big_01.jpg",23),
(null,"lifestyle_cap_small_02.jpg","lifestyle_cap_big_02.jpg",23),
(null,"lifestyle_cap_small_03.jpg","lifestyle_cap_big_03.jpg",23),
(null,"lifestyle_cap_small_04.jpg","lifestyle_cap_big_04.jpg",23),
(null,"lifestyle_cap_small_05.jpg","lifestyle_cap_big_05.jpg",23),
(null,"lifestyle_sleep_small_01.jpg","lifestyle_sleep_big_01.jpg",24),
(null,"lifestyle_sleep_small_02.jpg","lifestyle_sleep_big_02.jpg",24);

create table user(
    uid int primary key auto_increment,
    username varchar(32),
    userpwd varchar(128)
);

insert into user values(null,'17751193317','111111'),
(null,'18862601625','222222'),
(null,'18862601660','333333');

