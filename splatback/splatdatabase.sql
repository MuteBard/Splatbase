CREATE DATABASE splatbase;

CREATE TABLE member(
  id serial primary key,
  username varchar,
  encryptedPassword varchar,
  nnid varchar UNIQUE,
  avatar varchar,
  ranklevel varchar,
  freeAgent boolean,
  currTeam varchar,
  captain boolean,
  aboutme varchar,
  views integer,
  tagcolor varchar,
  lft boolean,
  endorse boolean
);

-- MERGER BETWEEN member AND teams
CREATE TABLE membership(
  id serial primary key,
  member integer REFERENCES member(id),
  team integer REFERENCES teams(id)
);

CREATE TABLE teams(
  id serial primary key,
  teamname varchar,
  avatar varchar,
  captain varchar,
  division varchar,
  birthday varchar,
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
  (default, 'Splattershot Jr','30px-Weapont_Main_Splattershot_Jr.png','Splattershot_Jr._HQ.png'),
  (default, 'Custom Splattershot Jr','30px-Weapont_Main_Custom_Splattershot_Jr.png','Custom_Splattershot_Jr._HQ.png'),
  (default, 'Splattershot','30px-Weapont_Main_Splattershot.png','Splattershot_HQ.png'),
  (default, 'Tentatek Splattershot','30px-Weapont_Main_Tentatek_Splattershot.png','Tentatek_Splattershot_HQ.png'),
  (default, 'Wasabi Splattershot','30px-Weapont_Main_Wasabi_Splattershot.png','Wasabi_Splattershot_HQ.png'),
  (default, 'Hero Shot Replica','30px-Weapont_Main_Hero_Shot_Replica.png','Hero_Shot_Replica_HQ.png'),
  (default, 'Octoshot Replica','30px-Weapont_Main_Octoshot_Replica.png','Octoshot_Replica_HQ.png'),
  (default, 'Splattershot Pro','30px-Weapont_Main_Splattershot_Pro.png','Splattershot_Pro_HQ.png'),
  (default, 'Forge Splattershot Pro','30px-Weapont_Main_Forge_Splattershot_Pro.png','Forge_Splattershot_Pro_HQ.png'),
  (default, 'Berry Splattershot Pro','30px-Weapont_Main_Berry_Splattershot_Pro.png','Berry_Splattershot_Pro_HQ.png'),
  (default, 'Aerospray MG','30px-Weapont_Main_Aerospray_MG.png','Aerospray_MG_HQ.png'),
  (default, 'Aerospray PG','30px-Weapont_Main_Aerospray_PG.png','Aerospray_RG_HQ.png'),
  (default, 'Aerospray RG','30px-Weapont_Main_Aerospray_RG.png','Aerospray_PG_HQ.png'),
  (default, 'Jet Squelcher','30px-Weapont_Main_Jet_Squelcher.png','Jet_Squelcher_HQ.png'),
  (default, 'Custom Jet Squelcher','30px-Weapont_Main_Custom_Jet_Squelcher.png','Custom_Jet_Squelcher_HQ.png'),
  (default, 'Dual Squelcher','30px-Weapont_Main_Dual_Squelcher.png','Dual_Squelcher_HQ.png'),
  (default, 'Custom Dual Squelcher','30px-Weapont_Main_Custom_Dual_Squelcher.png','Custom_Dual_Squelcher_HQ.png'),
  (default, 'L-3 Nozzlenose','30px-Weapont_Main_L-3_Nozzlenose.png','L-3_Nozzlenose_HQ.png'),
  (default, 'L-3 Nozzlenose D','30px-Weapont_Main_L-3_Nozzlenose_D.png','L-3_Nozzlenose_D_HQ.png'),
  (default, 'H-3 Nozzlenose','30px-Weapont_Main_H-3_Nozzlenose.png','H-3_Nozzlenose_HQ.png'),
  (default, 'H-3 Nozzlenose D','30px-Weapont_Main_H-3_Nozzlenose_D.png','H-3_Nozzlenose_D_HQ.png'),
  (default, 'Cherry H-3 Nozzlenose','30px-Weapont_Main_Cherry_H-3_Nozzlenose.png','Cherry_H-3_Nozzlenose_HQ.png'),
  (default, 'N-ZAP 83','30px-Weapont_Main_N-ZAP_83.png','N-ZAP_83_HQ.png'),
  (default, 'N-ZAP 85','30px-Weapont_Main_N-ZAP_85.png','N-ZAP_85_HQ.png'),
  (default, 'N-ZAP 89','30px-Weapont_Main_N-ZAP_89.png','N-ZAP_89_HQ.png'),
  (default, 'Splash-o-matic','30px-Weapont_Main_Splash-o-matic.png','Splash-o-matic_HQ.png'),
  (default, 'Neo Splash-o-matic','30px-Weapont_Main_Neo_Splash-o-matic.png','Neo_Splash-o-matic.png'),
  (default, 'Sploosh-o-matic','30px-Weapont_Main_Sploosh-o-matic.png','Sploosh-o-matic_HQ.png'),
  (default, 'Neo Sploosh-o-matic','30px-Weapont_Main_Neo_Sploosh-o-matic.png','Neo_Sploosh-o-matic_HQ.png'),
  (default, 'Sploosh-o-matic 7','30px-Weapont_Main_Sploosh-o-matic_7.png','Sploosh-o-matic_7_HQ.png'),
  (default, '.52 Gal','30px-Weapont_Main_.52_Gal.png','52_Gal_HQ.png'),
  (default, '.52 Gal Deco','30px-Weapont_Main_.52_Gal_Deco.png','52_Gal_Deco_HQ.png'),
  (default, '.96 Gal','30px-Weapont_Main_.96_Gal.png','96_Gal_HQ.png'),
  (default, '.96 Gal Deco','30px-Weapont_Main_.96_Gal_Deco.png','96_Gal_Deco_HQ.png'),
  (default, 'Blaster','30px-Weapont_Main_Blaster.png','Blaster_HQ.png'),
  (default, 'Custion Blaster','30px-Weapont_Main_Custom_Blaster.png','Custom_Blaster_HQ.png'),
  (default, 'Range Blaster','30px-Weapont_Main_Range_Blaster.png','Range_Blaster_HQ.png'),
  (default, 'Custom Range Blaster','30px-Weapont_Main_Custom_Range_Blaster.png','Custom_Range_Blaster_HQ.png'),
  (default, 'Grim Range Blaster','30px-Weapont_Main_Grim_Range_Blaster.png','Grim_Range_Blaster_HQ.png'),
  (default, 'Rapid Blaster','30px-Weapont_Main_Rapid_Blaster.png','Rapid_Blaster_HQ.png'),
  (default, 'Rapid Blaster Deco','30px-Weapont_Main_Rapid_Blaster_Deco.png','Rapid_Blaster_Deco_HQ.png'),
  (default, 'Rapid Blaster Pro','30px-Weapont_Main_Rapid_Blaster_Pro.png','Rapid_Blaster_Pro_HQ.png'),
  (default, 'Rapid Blaster Pro Deco','30px-Weapont_Main_Rapid_Blaster_Pro_Deco.png','Rapid_Blaster_Pro_Deco_HQ.png'),
  (default, 'Luna Blaster','30px-Weapont_Main_Luna_Blaster.png','Luna_Blaster_HQ.png'),
  (default, 'Luna Blaster Neo','30px-Weapont_Main_Luna_Blaster_Neo.png','Luna_Blaster_Neo_HQ.png'),
  (default, 'Splat Charger','30px-Weapont_Main_Splat_Charger.png','Splat_Charger_HQ.png'),
  (default, 'Splatterscope','30px-Weapont_Main_Splatterscope.png','Splatterscope_HQ.png'),
  (default, 'Kelp Splat Charger','30px-Weapont_Main_Kelp_Splat_Charger.png','Kelp_Splat_Charger_HQ.png'),
  (default, 'Kelp Splatterscope','30px-Weapont_Main_Kelp_Splatterscope.png','Kelp_Splatterscope_HQ.png'),
  (default, 'Bento Splat Charger','30px-Weapont_Main_Bento_Splat_Charger.png','Bento_Splat_Charger_HQ.png'),
  (default, 'Bento Splatterscope','30px-Weapont_Main_Bento_Splatterscope.png','Bento_Splatterscope_HQ.png'),
  (default, 'Hero Charger Replica','30px-Weapont_Main_Hero_Charger_Replica.png','Hero_Charger_Replica_HQ.png'),
  (default, 'E-liter 3K','30px-Weapont_Main_E-liter_3K.png','E-liter_3K_HQ.png'),
  (default, 'E-liter 3K Scope','30px-Weapont_Main_E-liter_3K_Scope.png','E-liter_3K_Scope_HQ.png'),
  (default, 'Custom E-liter 3K','30px-Weapont_Main_Custom_E-liter_3K.png','Custom_E-liter_3K_HQ.png'),
  (default, 'Custom E-liter 3K Scope','30px-Weapont_Main_Custom_E-liter_3K_Scope.png','Custom_E-liter_3K_Scope_HQ.png'),
  (default, 'Classic Squiffer','30px-Weapont_Main_Classic_Squiffer.png','Classic_Squiffer_HQ.png'),
  (default, 'New Squiffer','30px-Weapont_Main_New_Squiffer.png','New_Squiffer_HQ.png'),
  (default, 'Fresh Squiffer','30px-Weapont_Main_Fresh_Squiffer.png','Fresh_Squiffer_HQ.png'),
  (default, 'Bamboozler 14 Mk I','30px-Weapont_Main_Bamboozler_14_Mk_I.png','Bamboozler_14_Mk_I_HQ.png'),
  (default, 'Bamboozler 14 Mk II','30px-Weapont_Main_Bamboozler_14_Mk_II.png','Bamboozler_14_Mk_II_HQ.png'),
  (default, 'Bamboozler 14 Mk III','30px-Weapont_Main_Bamboozler_14_Mk_III.png','Bamboozler_14_Mk_III_HQ.png'),
  (default, 'Carbon Roller','30px-Weapont_Main_Carbon_Roller.png','Carbon_Roller_HQ.png'),
  (default, 'Carbon Roller Deco','30px-Weapont_Main_Carbon_Roller_Deco.png','Carbon_Roller_Deco_HQ.png'),
  (default, 'Splat Roller','30px-Weapont_Main_Splat_Roller.png','Splat_Roller_HQ.png'),
  (default, 'Krak-On Splat Roller','30px-Weapont_Main_Krak-On_Splat_Roller.png','Krak-On_Splat_Roller_HQ.png'),
  (default, 'CoroCoro Splat Roller','30px-Weapont_Main_CoroCoro_Splat_Roller.png','CoroCoro_Splat_Roller_HQ.png'),
  (default, 'Hero Roller Replica','30px-Weapont_Main_Hero_Roller_Replica.png','Hero_Roller_Replica_HQ.png'),
  (default, 'Dynamo Roller','30px-Weapont_Main_Dynamo_Roller.png','Dynamo_Roller_HQ.png'),
  (default, 'Gold Dynamo Roller','30px-Weapont_Main_Gold_Dynamo_Roller.png','Gold_Dynamo_Roller_HQ.png'),
  (default, 'Tempered Dynamo Roller','30px-Weapont_Main_Tempered_Dynamo_Roller.png','Tempered_Dynamo_Roller_HQ.png'),
  (default, 'Inkbrush','30px-Weapont_Main_Inkbrush.png','Inkbrush_HQ.png'),
  (default, 'Inkbrush Nouveau','30px-Weapont_Main_Inkbrush_Nouveau.png','Inkbrush_Nouveau_HQ.png'),
  (default, 'Permanent Inkbrush','30px-Weapont_Main_Permanent_Inkbrush.png','Permanent_Inkbrush_HQ.png'),
  (default, 'Octobrush','30px-Weapont_Main_Octobrush.png','Octobrush_HQ.png'),
  (default, 'Octobrush Nouveau','30px-Weapont_Main_Octobrush_Nouveau.png','Octobrush_Nouveau_HQ.png'),
  (default, 'Slosher','30px-Weapont_Main_Slosher.png','Slosher_HQ.png'),
  (default, 'Slosher Deco','30px-Weapont_Main_Slosher_Deco.png','Slosher_Deco_HQ.png'),
  (default, 'Soda Slosher','30px-Weapont_Main_Soda_Slosher.png','Soda_Slosher_HQ.png'),
  (default, 'Tri-Slosher','30px-Weapont_Main_Tri-Slosher.png','Tri-Slosher_Nouveau_HQ.png'),
  (default, 'Tri-Slosher Nouveau','30px-Weapont_Main_Tri-Slosher_Nouveau.png','Tri-Slosher_HQ.png'),
  (default, 'Sloshing Machine','30px-Weapont_Main_Sloshing_Machine.png','Sloshing_Machine_HQ.png'),
  (default, 'Sloshing Machine Neo','30px-Weapont_Main_Sloshing_Machine_Neo.png','Sloshing_Machine_Neo_HQ.png'),
  (default, 'Mini Splatling','30px-Weapont_Main_Mini_Splatling.png','Mini_Splatling_HQ.png'),
  (default, 'Zink Mini Splatling','30px-Weapont_Main_Zink_Mini_Splatling.png','Zink_Mini_Splatling_HQ.png'),
  (default, 'Refurbished Mini Splatling','30px-Weapont_Main_Refurbished_Mini_Splatling.png','Refurbished_Mini_Splatling_HQ.png'),
  (default, 'Heavy Splatling','30px-Weapont_Main_Heavy_Splatling.png','Heavy_Splatling_HQ.png'),
  (default, 'Heavy Splatling_Deco','30px-Weapont_Main_Heavy_Splatling_Deco.png','Heavy_Splatling_Deco_HQ.png'),
  (default, 'Heavy Splatling_Remix','30px-Weapont_Main_Heavy_Splatling_Remix.png','Heavy_Splatling_Remix_HQ.png'),
  (default, 'Hydra Splatling','30px-Weapont_Main_Hydra_Splatling.png','Hydra_Splatling_HQ.png'),
  (default, 'Custom Hydra Splatling','30px-Weapont_Main_Custom_Hydra_Splatling.png','Custom_Hydra_Splatling_HQ.png')
