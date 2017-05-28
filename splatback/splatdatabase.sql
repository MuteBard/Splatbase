CREATE DATABASE splatbase;

CREATE TABLE member(
    id serial primary key,
    username varchar,
    nnid varchar UNIQUE,
    encryptedPassword varchar,
    avatar varchar,
    ranklevel varchar,
    freeAgent boolean,
    lft boolean,
    currTeam varchar,
    aboutme varchar,
    endorse integer
);

-- MERGER BETWEEN member AND teams


CREATE TABLE teams(
    id serial primary key,
    teamname varchar,
    avatar varchar,
    captain varchar,
    aboutme varchar,
    views integer,
    lfm boolean,
    endorse boolean
);

-- Static table
CREATE TABLE weapons(
    id serial primary key,
    name varchar,
    imagesmall varchar,
    imagelarge varchar
);

-- MERGER BETWEEN member AND weapons
CREATE TABLE memberhasweapon(
    id serial primary key,
    member integer REFERENCES member(id),
    weapon integer REFERENCES weapons(id)
);

-- MERGER BETWEEN member AND member
CREATE TABLE recommendations(
    id serial PRIMARY KEY,
    giver integer REFERENCES member(id),
    receiver integer REFERENCES member(id),
    rtext varchar
);

-- added weapons
INSERT INTO weapons values
    (DEFAULT, 'Splattershot Jr','30px-Weapont_Main_Splattershot_Jr.png','Splattershot_Jr._HQ.png'),
    (DEFAULT, 'Custom Splattershot Jr','30px-Weapont_Main_Custom_Splattershot_Jr.png','Custom_Splattershot_Jr._HQ.png'),
    (DEFAULT, 'Splattershot','30px-Weapont_Main_Splattershot.png','Splattershot_HQ.png'),
    (DEFAULT, 'Tentatek Splattershot','30px-Weapont_Main_Tentatek_Splattershot.png','Tentatek_Splattershot_HQ.png'),
    (DEFAULT, 'Wasabi Splattershot','30px-Weapont_Main_Wasabi_Splattershot.png','Wasabi_Splattershot_HQ.png'),
    (DEFAULT, 'Hero Shot Replica','30px-Weapont_Main_Hero_Shot_Replica.png','Hero_Shot_Replica_HQ.png'),
    (DEFAULT, 'Octoshot Replica','30px-Weapont_Main_Octoshot_Replica.png','Octoshot_Replica_HQ.png'),
    (DEFAULT, 'Splattershot Pro','30px-Weapont_Main_Splattershot_Pro.png','Splattershot_Pro_HQ.png'),
    (DEFAULT, 'Forge Splattershot Pro','30px-Weapont_Main_Forge_Splattershot_Pro.png','Forge_Splattershot_Pro_HQ.png'),
    (DEFAULT, 'Berry Splattershot Pro','30px-Weapont_Main_Berry_Splattershot_Pro.png','Berry_Splattershot_Pro_HQ.png'),
    (DEFAULT, 'Aerospray MG','30px-Weapont_Main_Aerospray_MG.png','Aerospray_MG_HQ.png'),
    (DEFAULT, 'Aerospray PG','30px-Weapont_Main_Aerospray_PG.png','Aerospray_RG_HQ.png'),
    (DEFAULT, 'Aerospray RG','30px-Weapont_Main_Aerospray_RG.png','Aerospray_PG_HQ.png'),
    (DEFAULT, 'Jet Squelcher','30px-Weapont_Main_Jet_Squelcher.png','Jet_Squelcher_HQ.png'),
    (DEFAULT, 'Custom Jet Squelcher','30px-Weapont_Main_Custom_Jet_Squelcher.png','Custom_Jet_Squelcher_HQ.png'),
    (DEFAULT, 'Dual Squelcher','30px-Weapont_Main_Dual_Squelcher.png','Dual_Squelcher_HQ.png'),
    (DEFAULT, 'Custom Dual Squelcher','30px-Weapont_Main_Custom_Dual_Squelcher.png','Custom_Dual_Squelcher_HQ.png'),
    (DEFAULT, 'L-3 Nozzlenose','30px-Weapont_Main_L-3_Nozzlenose.png','L-3_Nozzlenose_HQ.png'),
    (DEFAULT, 'L-3 Nozzlenose D','30px-Weapont_Main_L-3_Nozzlenose_D.png','L-3_Nozzlenose_D_HQ.png'),
    (DEFAULT, 'H-3 Nozzlenose','30px-Weapont_Main_H-3_Nozzlenose.png','H-3_Nozzlenose_HQ.png'),
    (DEFAULT, 'H-3 Nozzlenose D','30px-Weapont_Main_H-3_Nozzlenose_D.png','H-3_Nozzlenose_D_HQ.png'),
    (DEFAULT, 'Cherry H-3 Nozzlenose','30px-Weapont_Main_Cherry_H-3_Nozzlenose.png','Cherry_H-3_Nozzlenose_HQ.png'),
    (DEFAULT, 'N-ZAP 83','30px-Weapont_Main_N-ZAP_83.png','N-ZAP_83_HQ.png'),
    (DEFAULT, 'N-ZAP 85','30px-Weapont_Main_N-ZAP_85.png','N-ZAP_85_HQ.png'),
    (DEFAULT, 'N-ZAP 89','30px-Weapont_Main_N-ZAP_89.png','N-ZAP_89_HQ.png'),
    (DEFAULT, 'Splash-o-matic','30px-Weapont_Main_Splash-o-matic.png','Splash-o-matic_HQ.png'),
    (DEFAULT, 'Neo Splash-o-matic','30px-Weapont_Main_Neo_Splash-o-matic.png','Neo_Splash-o-matic.png'),
    (DEFAULT, 'Sploosh-o-matic','30px-Weapont_Main_Sploosh-o-matic.png','Sploosh-o-matic_HQ.png'),
    (DEFAULT, 'Neo Sploosh-o-matic','30px-Weapont_Main_Neo_Sploosh-o-matic.png','Neo_Sploosh-o-matic_HQ.png'),
    (DEFAULT, 'Sploosh-o-matic 7','30px-Weapont_Main_Sploosh-o-matic_7.png','Sploosh-o-matic_7_HQ.png'),
    (DEFAULT, '.52 Gal','30px-Weapont_Main_.52_Gal.png','52_Gal_HQ.png'),
    (DEFAULT, '.52 Gal Deco','30px-Weapont_Main_.52_Gal_Deco.png','52_Gal_Deco_HQ.png'),
    (DEFAULT, '.96 Gal','30px-Weapont_Main_.96_Gal.png','96_Gal_HQ.png'),
    (DEFAULT, '.96 Gal Deco','30px-Weapont_Main_.96_Gal_Deco.png','96_Gal_Deco_HQ.png'),
    (DEFAULT, 'Blaster','30px-Weapont_Main_Blaster.png','Blaster_HQ.png'),
    (DEFAULT, 'Custom Blaster','30px-Weapont_Main_Custom_Blaster.png','Custom_Blaster_HQ.png'),
    (DEFAULT, 'Range Blaster','30px-Weapont_Main_Range_Blaster.png','Range_Blaster_HQ.png'),
    (DEFAULT, 'Custom Range Blaster','30px-Weapont_Main_Custom_Range_Blaster.png','Custom_Range_Blaster_HQ.png'),
    (DEFAULT, 'Grim Range Blaster','30px-Weapont_Main_Grim_Range_Blaster.png','Grim_Range_Blaster_HQ.png'),
    (DEFAULT, 'Rapid Blaster','30px-Weapont_Main_Rapid_Blaster.png','Rapid_Blaster_HQ.png'),
    (DEFAULT, 'Rapid Blaster Deco','30px-Weapont_Main_Rapid_Blaster_Deco.png','Rapid_Blaster_Deco_HQ.png'),
    (DEFAULT, 'Rapid Blaster Pro','30px-Weapont_Main_Rapid_Blaster_Pro.png','Rapid_Blaster_Pro_HQ.png'),
    (DEFAULT, 'Rapid Blaster Pro Deco','30px-Weapont_Main_Rapid_Blaster_Pro_Deco.png','Rapid_Blaster_Pro_Deco_HQ.png'),
    (DEFAULT, 'Luna Blaster','30px-Weapont_Main_Luna_Blaster.png','Luna_Blaster_HQ.png'),
    (DEFAULT, 'Luna Blaster Neo','30px-Weapont_Main_Luna_Blaster_Neo.png','Luna_Blaster_Neo_HQ.png'),
    (DEFAULT, 'Splat Charger','30px-Weapont_Main_Splat_Charger.png','Splat_Charger_HQ.png'),
    (DEFAULT, 'Splatterscope','30px-Weapont_Main_Splatterscope.png','Splatterscope_HQ.png'),
    (DEFAULT, 'Kelp Splat Charger','30px-Weapont_Main_Kelp_Splat_Charger.png','Kelp_Splat_Charger_HQ.png'),
    (DEFAULT, 'Kelp Splatterscope','30px-Weapont_Main_Kelp_Splatterscope.png','Kelp_Splatterscope_HQ.png'),
    (DEFAULT, 'Bento Splat Charger','30px-Weapont_Main_Bento_Splat_Charger.png','Bento_Splat_Charger_HQ.png'),
    (DEFAULT, 'Bento Splatterscope','30px-Weapont_Main_Bento_Splatterscope.png','Bento_Splatterscope_HQ.png'),
    (DEFAULT, 'Hero Charger Replica','30px-Weapont_Main_Hero_Charger_Replica.png','Hero_Charger_Replica_HQ.png'),
    (DEFAULT, 'E-liter 3K','30px-Weapont_Main_E-liter_3K.png','E-liter_3K_HQ.png'),
    (DEFAULT, 'E-liter 3K Scope','30px-Weapont_Main_E-liter_3K_Scope.png','E-liter_3K_Scope_HQ.png'),
    (DEFAULT, 'Custom E-liter 3K','30px-Weapont_Main_Custom_E-liter_3K.png','Custom_E-liter_3K_HQ.png'),
    (DEFAULT, 'Custom E-liter 3K Scope','30px-Weapont_Main_Custom_E-liter_3K_Scope.png','Custom_E-liter_3K_Scope_HQ.png'),
    (DEFAULT, 'Classic Squiffer','30px-Weapont_Main_Classic_Squiffer.png','Classic_Squiffer_HQ.png'),
    (DEFAULT, 'New Squiffer','30px-Weapont_Main_New_Squiffer.png','New_Squiffer_HQ.png'),
    (DEFAULT, 'Fresh Squiffer','30px-Weapont_Main_Fresh_Squiffer.png','Fresh_Squiffer_HQ.png'),
    (DEFAULT, 'Bamboozler 14 Mk I','30px-Weapont_Main_Bamboozler_14_Mk_I.png','Bamboozler_14_Mk_I_HQ.png'),
    (DEFAULT, 'Bamboozler 14 Mk II','30px-Weapont_Main_Bamboozler_14_Mk_II.png','Bamboozler_14_Mk_II_HQ.png'),
    (DEFAULT, 'Bamboozler 14 Mk III','30px-Weapont_Main_Bamboozler_14_Mk_III.png','Bamboozler_14_Mk_III_HQ.png'),
    (DEFAULT, 'Carbon Roller','30px-Weapont_Main_Carbon_Roller.png','Carbon_Roller_HQ.png'),
    (DEFAULT, 'Carbon Roller Deco','30px-Weapont_Main_Carbon_Roller_Deco.png','Carbon_Roller_Deco_HQ.png'),
    (DEFAULT, 'Splat Roller','30px-Weapont_Main_Splat_Roller.png','Splat_Roller_HQ.png'),
    (DEFAULT, 'Krak-On Splat Roller','30px-Weapont_Main_Krak-On_Splat_Roller.png','Krak-On_Splat_Roller_HQ.png'),
    (DEFAULT, 'CoroCoro Splat Roller','30px-Weapont_Main_CoroCoro_Splat_Roller.png','CoroCoro_Splat_Roller_HQ.png'),
    (DEFAULT, 'Hero Roller Replica','30px-Weapont_Main_Hero_Roller_Replica.png','Hero_Roller_Replica_HQ.png'),
    (DEFAULT, 'Dynamo Roller','30px-Weapont_Main_Dynamo_Roller.png','Dynamo_Roller_HQ.png'),
    (DEFAULT, 'Gold Dynamo Roller','30px-Weapont_Main_Gold_Dynamo_Roller.png','Gold_Dynamo_Roller_HQ.png'),
    (DEFAULT, 'Tempered Dynamo Roller','30px-Weapont_Main_Tempered_Dynamo_Roller.png','Tempered_Dynamo_Roller_HQ.png'),
    (DEFAULT, 'Inkbrush','30px-Weapont_Main_Inkbrush.png','Inkbrush_HQ.png'),
    (DEFAULT, 'Inkbrush Nouveau','30px-Weapont_Main_Inkbrush_Nouveau.png','Inkbrush_Nouveau_HQ.png'),
    (DEFAULT, 'Permanent Inkbrush','30px-Weapont_Main_Permanent_Inkbrush.png','Permanent_Inkbrush_HQ.png'),
    (DEFAULT, 'Octobrush','30px-Weapont_Main_Octobrush.png','Octobrush_HQ.png'),
    (DEFAULT, 'Octobrush Nouveau','30px-Weapont_Main_Octobrush_Nouveau.png','Octobrush_Nouveau_HQ.png'),
    (DEFAULT, 'Slosher','30px-Weapont_Main_Slosher.png','Slosher_HQ.png'),
    (DEFAULT, 'Slosher Deco','30px-Weapont_Main_Slosher_Deco.png','Slosher_Deco_HQ.png'),
    (DEFAULT, 'Soda Slosher','30px-Weapont_Main_Soda_Slosher.png','Soda_Slosher_HQ.png'),
    (DEFAULT, 'Tri-Slosher','30px-Weapont_Main_Tri-Slosher.png','Tri-Slosher_Nouveau_HQ.png'),
    (DEFAULT, 'Tri-Slosher Nouveau','30px-Weapont_Main_Tri-Slosher_Nouveau.png','Tri-Slosher_HQ.png'),
    (DEFAULT, 'Sloshing Machine','30px-Weapont_Main_Sloshing_Machine.png','Sloshing_Machine_HQ.png'),
    (DEFAULT, 'Sloshing Machine Neo','30px-Weapont_Main_Sloshing_Machine_Neo.png','Sloshing_Machine_Neo_HQ.png'),
    (DEFAULT, 'Mini Splatling','30px-Weapont_Main_Mini_Splatling.png','Mini_Splatling_HQ.png'),
    (DEFAULT, 'Zink Mini Splatling','30px-Weapont_Main_Zink_Mini_Splatling.png','Zink_Mini_Splatling_HQ.png'),
    (DEFAULT, 'Refurbished Mini Splatling','30px-Weapont_Main_Refurbished_Mini_Splatling.png','Refurbished_Mini_Splatling_HQ.png'),
    (DEFAULT, 'Heavy Splatling','30px-Weapont_Main_Heavy_Splatling.png','Heavy_Splatling_HQ.png'),
    (DEFAULT, 'Heavy Splatling_Deco','30px-Weapont_Main_Heavy_Splatling_Deco.png','Heavy_Splatling_Deco_HQ.png'),
    (DEFAULT, 'Heavy Splatling_Remix','30px-Weapont_Main_Heavy_Splatling_Remix.png','Heavy_Splatling_Remix_HQ.png'),
    (DEFAULT, 'Hydra Splatling','30px-Weapont_Main_Hydra_Splatling.png','Hydra_Splatling_HQ.png'),
    (DEFAULT, 'Custom Hydra Splatling','30px-Weapont_Main_Custom_Hydra_Splatling.png','Custom_Hydra_Splatling_HQ.png');

INSERT INTO memberhasweapon values
    (DEFAULT,1,4),
    (DEFAULT,1,34),
    (DEFAULT,1,88),
    (DEFAULT,2,38),
    (DEFAULT,2,4),
    (DEFAULT,2,77),
    (DEFAULT,3,60),
    (DEFAULT,3,61),
    (DEFAULT,3,62),
    (DEFAULT,3,54),
    (DEFAULT,3,27),
    (DEFAULT,4,75),
    (DEFAULT,4,4),
    (DEFAULT,4,54),
    (DEFAULT,5,15),
    (DEFAULT,5,18),
    (DEFAULT,5,19),
    (DEFAULT,5,8),
    (DEFAULT,5,10),
    (DEFAULT,6,31),
    (DEFAULT,6,54),
    (DEFAULT,6,38),
    (DEFAULT,7,22),
    (DEFAULT,7,77),
    (DEFAULT,7,8),
    (DEFAULT,8,4),
    (DEFAULT,8,31),
    (DEFAULT,8,34),
    (DEFAULT,9,56),
    (DEFAULT,9,91),
    (DEFAULT,9,75),
    (DEFAULT,10,19),
    (DEFAULT,10,4),
    (DEFAULT,10,82),
    (DEFAULT,11,56),
    (DEFAULT,11,49),
    (DEFAULT,11,8),
    (DEFAULT,12,54),
    (DEFAULT,12,56),
    (DEFAULT,12,51),
    (DEFAULT,13,1),
    (DEFAULT,13,31),
    (DEFAULT,13,34),
    (DEFAULT,14,26),
    (DEFAULT,14,4),
    (DEFAULT,14,10),
    (DEFAULT,15,69),
    (DEFAULT,15,70),
    (DEFAULT,15,40),
    (DEFAULT,15,31),
    (DEFAULT,16,69),
    (DEFAULT,15,70),
    (DEFAULT,16,4),
    (DEFAULT,16,63),
    (DEFAULT,17,75),
    (DEFAULT,17,49),
    (DEFAULT,17,54),
    (DEFAULT,18,77),
    (DEFAULT,18,87),
    (DEFAULT,18,88),
    (DEFAULT,18,89),
    (DEFAULT,18,40),
    (DEFAULT,19,45),
    (DEFAULT,19,38),
    (DEFAULT,19,60),
    (DEFAULT,20,77),
    (DEFAULT,20,38),
    (DEFAULT,20,7),
    (DEFAULT,21,54),
    (DEFAULT,21,38),
    (DEFAULT,21,69),
    (DEFAULT,22,5),
    (DEFAULT,22,23),
    (DEFAULT,22,9),
    (DEFAULT,23,4),
    (DEFAULT,23,85),
    (DEFAULT,23,45),
    (DEFAULT,24,54),
    (DEFAULT,24,47),
    (DEFAULT,25,66),
    (DEFAULT,25,45),
    (DEFAULT,25,8),
    (DEFAULT,26,66),
    (DEFAULT,26,54),
    (DEFAULT,27,54),
    (DEFAULT,27,56),
    (DEFAULT,18,87),
    (DEFAULT,18,88),
    (DEFAULT,18,89),
    (DEFAULT,27,7),
    (DEFAULT,28,38),
    (DEFAULT,28,23),
    (DEFAULT,28,75),
    (DEFAULT,29,78),
    (DEFAULT,29,45),
    (DEFAULT,30,4),
    (DEFAULT,30,54),
    (DEFAULT,30,65),
    (DEFAULT,31,54),
    (DEFAULT,31,56),
    (DEFAULT,31,49),
    (DEFAULT,32,63),
    (DEFAULT,32,64),
    (DEFAULT,32,18),
    (DEFAULT,33,85),
    (DEFAULT,33,63),
    (DEFAULT,33,7),
    (DEFAULT,34,77),
    (DEFAULT,34,16),
    (DEFAULT,34,47),
    (DEFAULT,35,4),
    (DEFAULT,35,34),
    (DEFAULT,35,22),
    (DEFAULT,36,75),
    (DEFAULT,36,76),
    (DEFAULT,36,5),
    (DEFAULT,37,77),
    (DEFAULT,37,4),
    (DEFAULT,37,45),
    (DEFAULT,38,10),
    (DEFAULT,38,88),
    (DEFAULT,38,4),
    (DEFAULT,39,18),
    (DEFAULT,39,19),
    (DEFAULT,39,86),
    (DEFAULT,40,4),
    (DEFAULT,40,69),
    (DEFAULT,40,70),
    (DEFAULT,40,4),
    (DEFAULT,41,4),
    (DEFAULT,41,31),
    (DEFAULT,41,69),
    (DEFAULT,41,70),
    (DEFAULT,42,16),
    (DEFAULT,42,8),
    (DEFAULT,42,31),
    (DEFAULT,43,14),
    (DEFAULT,43,24),
    (DEFAULT,43,39),
    (DEFAULT,44,1),
    (DEFAULT,44,11),
    (DEFAULT,44,72),
    (DEFAULT,45,69),
    (DEFAULT,45,70),
    (DEFAULT,45,71),
    (DEFAULT,46,38),
    (DEFAULT,46,40),
    (DEFAULT,47,22),
    (DEFAULT,47,10),
    (DEFAULT,47,56),
    (DEFAULT,48,45),
    (DEFAULT,48,38),
    (DEFAULT,48,4),
    (DEFAULT,49,54),
    (DEFAULT,49,8),
    (DEFAULT,49,9),
    (DEFAULT,49,10),
    (DEFAULT,49,78),
    (DEFAULT,50,45),
    (DEFAULT,50,39),
    (DEFAULT,50,69),
    (DEFAULT,50,70),
    (DEFAULT,51,91),
    (DEFAULT,51,15),
    (DEFAULT,51,20),
    (DEFAULT,52,78),
    (DEFAULT,52,22),
    (DEFAULT,52,60),
    (DEFAULT,53,89),
    (DEFAULT,53,85),
    (DEFAULT,53,69),
    (DEFAULT,53,70),
    (DEFAULT,54,63),
    (DEFAULT,54,66),
    (DEFAULT,54,13),
    (DEFAULT,53,54),
    (DEFAULT,53,4),
    (DEFAULT,53,45),
    (DEFAULT,56,54),
    (DEFAULT,56,75),
    (DEFAULT,56,4),
    (DEFAULT,57,3),
    (DEFAULT,57,4),
    (DEFAULT,57,5),
    (DEFAULT,58,34),
    (DEFAULT,58,76),
    (DEFAULT,58,49),
    (DEFAULT,59,69),
    (DEFAULT,59,63),
    (DEFAULT,59,11),
    (DEFAULT,53,12),
    (DEFAULT,60,31),
    (DEFAULT,60,4),
    (DEFAULT,60,56),
    (DEFAULT,61,45),
    (DEFAULT,61,32),
    (DEFAULT,61,67),
    (DEFAULT,62,54),
    (DEFAULT,62,56),
    (DEFAULT,62,85),
    (DEFAULT,63,57),
    (DEFAULT,63,59),
    (DEFAULT,63,77),
    (DEFAULT,53,82),
    (DEFAULT,64,63),
    [ 'Splattershot pro, tent, heavy' ]
    (DEFAULT,65,8),
    (DEFAULT,65,4),
    (DEFAULT,65,87),
    (DEFAULT,53,88),
    (DEFAULT,53,89),
    [ 'Heavy Remix, Custom Hydra, Heavy Deco' ]
    (DEFAULT,66,87),
    (DEFAULT,66,89),
    (DEFAULT,66,91),
    [ 'CRB, Custom Blaster, Range Blaster' ]
    (DEFAULT,67,36),
    (DEFAULT,67,37),
    (DEFAULT,67,38),
    [ 'Tentatek, 52, carbon' ]
    (DEFAULT,68,4),
    (DEFAULT,68,31),
    (DEFAULT,68,63),
    [ 'Pro, Hydra, NZap' ]
    (DEFAULT,69,8),
    (DEFAULT,69,91),
    (DEFAULT,69,23),
    [ 'L3 Nozzlenose D, Cherry H3, Slosher Deco' ]
    (DEFAULT,70,19),
    (DEFAULT,70,22),
    (DEFAULT,70,78),
    [ 'Splatterscope, Nzap, Slosher' ]
    (DEFAULT,71,47),
    (DEFAULT,71,23),
    (DEFAULT,71,77),
    [ 'Splatterscopes, Splashes, and Tri-Slosher.' ]
    (DEFAULT,72,47),
    (DEFAULT,72,49),
    (DEFAULT,72,),
    [ 'Tentatek Splattershot; Wasabi Splattershot; Berry Splattershot Pro' ]
    (DEFAULT,73,),
    (DEFAULT,73,),
    (DEFAULT,73,),
    [ 'E-Liter, Octoshot and Zimi' ]
    (DEFAULT,74,),
    (DEFAULT,74,),
    (DEFAULT,74,),
    [ 'E-liter 3K Scope, E-Liter 3K, Kelp Splatterscope' ]
    (DEFAULT,75,),
    (DEFAULT,75,),
    (DEFAULT,75,),
    [ 'Octobrushes, Rollers, Snipers (Flex player)' ]
    (DEFAULT,76,),
    (DEFAULT,76,),
    (DEFAULT,76,),
    [ 'Octobrush, Dynamo Roller, Carbon Roller' ]
    (DEFAULT,77,),
    (DEFAULT,77,),
    (DEFAULT,77,),
    [ 'Tri-slosher, vanilla slosher, n-zap 89' ]
    (DEFAULT,78,),
    (DEFAULT,78,),
    (DEFAULT,78,),
    [ 'Dual Squelcher, Jet Squelcher, Berry Splattershot Pro' ]
    (DEFAULT,79,),
    (DEFAULT,79,),
    (DEFAULT,79,),
    [ 'Tentatek, gals, buckets' ]
    (DEFAULT,80,),
    (DEFAULT,80,),
    (DEFAULT,80,),
    [ '.52 Gal, Luna Neo, Zink Mini' ]
    (DEFAULT,81,),
    (DEFAULT,81,),
    (DEFAULT,81,),
    [ 'Tentatek Splatershot, .52 gal, Splaterscope' ]
    (DEFAULT,82,),
    (DEFAULT,82,),
    (DEFAULT,82,),
    [ 'Splatterscope,eliter,heavy Splatling ' ]
    (DEFAULT,83,),
    (DEFAULT,83,),
    (DEFAULT,83,),
    [ 'Kelp splatterscope, Tentatek, .52 gal' ]
    (DEFAULT,84,),
    (DEFAULT,84,),
    (DEFAULT,84,),
    [ 'E liter, CRB, Carbon' ]
    (DEFAULT,85,),
    (DEFAULT,85,),
    (DEFAULT,85,),
    [ 'Octoshot, 96., Splatterscope' ]
    (DEFAULT,86,),
    (DEFAULT,86,),
    (DEFAULT,86,),
