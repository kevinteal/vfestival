// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Ronnie James Dio Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		
		//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Imelda May", "Main Stage", 20150822, 1215, 1245, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Gregory Porter", "Main Stage", 20150822, 1315, 1350, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Ella Henderson", "Main Stage", 20150822, 1420, 1500, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "The Kooks", "Main Stage", 20150822, 1530, 1615, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "George Ezra", "Main Stage", 20150822, 1645, 1740, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Ellie Goulding", "Main Stage", 20150822, 1810, 1910, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "The Script", "Main Stage", 20150822, 1940, 2040, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Calvin Harris", "Main Stage", 20150822, 2120, 2250, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "The Proclaimers", "Main Stage", 20150823, 1215, 1245, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Marina & The Diamonds", "Main Stage", 20150823, 1315, 1350, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "James Bay", "Main Stage", 20150823, 1420, 1500, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Annie Mac", "Main Stage", 20150823, 1530, 1615, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "The Courteneers", "Main Stage", 20150823, 1645, 1740, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Hozier", "Main Stage", 20150823, 1810, 1910, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Sam Smith", "Main Stage", 20150823, 1940, 2040, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Kasabian", "Main Stage", 20150823, 2120, 2250, 0, 0, "Sunday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Hilltop Hoods", "MTV Stage", 20150822, 1200, 1225, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Scouting For Girls", "MTV Stage", 20150822, 1240, 1310, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Echo & The Bunnymen", "MTV Stage", 20150822, 1330, 1400, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Ella Eyre", "MTV Stage", 20150822, 1420, 1500, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Maverick Sabre", "MTV Stage", 20150822, 1525, 1605, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Sigma", "MTV Stage", 20150822, 1630, 1710, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "The Charlatans", "MTV Stage", 20150822, 1735, 1815, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Kodaline", "MTV Stage", 20150822, 1845, 1930, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Clean Bandit", "MTV Stage", 20150822, 2000, 2050, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Stereophonics", "MTV Stage", 20150822, 2120, 2250, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "The Coronas", "MTV Stage", 20150823, 1200, 1225, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Bleachers", "MTV Stage", 20150823, 1240, 1310, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Reverend & The Makers", "MTV Stage", 20150823, 1330, 1400, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Fuse Odg", "MTV Stage", 20150823, 1420, 1500, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Jess Glynne", "MTV Stage", 20150823, 1525, 1605, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Mark Ronson Dj Set", "MTV Stage", 20150823, 1630, 1710, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Labrinth", "MTV Stage", 20150823, 1735, 1815, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Chvrches", "MTV Stage", 20150823, 1845, 1930, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Tom Jones", "MTV Stage", 20150823, 2000, 2050, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Olly Murs", "MTV Stage", 20150823, 2120, 2250, 0, 1, "Sunday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Indiana", "The Arena", 20150822, 1200, 1225, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Lawson", "The Arena", 20150822, 1245, 1310, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Conor Maynard", "The Arena", 20150822, 1330, 1400, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Wretch 32", "The Arena", 20150822, 1420, 1450, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Jack Savoretti", "The Arena", 20150822, 1515, 1550, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Lunchmoney Lewis", "The Arena", 20150822, 1615, 1655, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "De La Soul", "The Arena", 20150822, 1725, 1810, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Duke Dumont", "The Arena", 20150822, 1840, 1930, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Jessie Ware", "The Arena", 20150822, 2000, 2050, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Paloma Faith", "The Arena", 20150822, 2120, 2250, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Sinead Harnett", "The Arena", 20150823, 1330, 1400, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Aston Merrygold", "The Arena", 20150823, 1420, 1450, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Mnek", "The Arena", 20150823, 1515, 1550, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Tove Lo", "The Arena", 20150823, 1615, 1655, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Pendulum Dj Set", "The Arena", 20150823, 1725, 1810, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Example & Dj Wire", "The Arena", 20150823, 1840, 1930, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Andy C", "The Arena", 20150823, 2000, 2050, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Nero", "The Arena", 20150823, 2120, 2250, 0, 2, "Sunday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "James Glover", "Dance Tent", 20150822, 1200, 1315, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Moxie", "Dance Tent", 20150822, 1330, 1445, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Marvin Humes Presents Luvbug", "Dance Tent", 20150822, 1500, 1620, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Goldie", "Dance Tent", 20150822, 1635, 1755, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Toddla T", "Dance Tent", 20150822, 1810, 1930, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "Philip George", "Dance Tent", 20150822, 1945, 2105, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Oliver Heldens", "Dance Tent", 20150822, 2120, 2250, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Sam Feldt", "Dance Tent", 20150823, 1200, 1315, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Alex Adair", "Dance Tent", 20150823, 1330, 1445, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Shift K3y", "Dance Tent", 20150823, 1500, 1620, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "My Nu Leng", "Dance Tent", 20150823, 1635, 1755, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Mistajam", "Dance Tent", 20150823, 1810, 1930, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Dj Ez", "Dance Tent", 20150823, 1945, 2105, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Hannah Wants", "Dance Tent", 20150823, 2120, 2250, 0, 3, "Sunday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Andrew Stanley", "Comedy Tent", 20150822, 1210, 1240, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Danny Mcloughlin", "Comedy Tent", 20150822, 1240, 1310, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Shappi Khorsandi", "Comedy Tent", 20150822, 1310, 1350, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Suzi Ruffell", "Comedy Tent", 20150822, 1400, 1430, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Andy Robinson", "Comedy Tent", 20150822, 1430, 1500, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Russell Kane", "Comedy Tent", 20150822, 1500, 1540, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Paul Mccaffrey", "Comedy Tent", 20150822, 1550, 1620, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Hypnodog Ft Krystyna", "Comedy Tent", 20150822, 1620, 1720, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Gary Delaney", "Comedy Tent", 20150822, 1730, 1800, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Andrew Oneill", "Comedy Tent", 20150822, 1800, 1830, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Joe Bor", "Comedy Tent", 20150822, 1830, 1900, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Tom Deacon", "Comedy Tent", 20150823, 1200, 1230, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Jarlath Regan", "Comedy Tent", 20150823, 1230, 1300, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Seann Walsh", "Comedy Tent", 20150823, 1300, 1340, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Jen Brister", "Comedy Tent", 20150823, 1350, 1420, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Craig Murray", "Comedy Tent", 20150823, 1420, 1450, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Frankie Boyle", "Comedy Tent", 20150823, 1450, 1530, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Marlon Davis", "Comedy Tent", 20150823, 1540, 1610, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Simon King", "Comedy Tent", 20150823, 1610, 1640, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Nick Helm", "Comedy Tent", 20150823, 1640, 1720, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Luisa Omielan", "Comedy Tent", 20150823, 1730, 1800, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Prince Abdi", "Comedy Tent", 20150823, 1800, 1830, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Gareth Richards", "Comedy Tent", 20150823, 1830, 1900, 0, 4, "Sunday")');
		
		});
	db.transaction(function (tx) {	
	
	
	
tx.executeSql(' UPDATE bands SET start_time=1220, finish_time=1250 WHERE band_name="Imelda May" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1400 WHERE band_name="Marina & The Diamonds" ');
tx.executeSql(' UPDATE bands SET start_time=1435, finish_time=1515 WHERE band_name="James Bay" ');
tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1635 WHERE band_name="Annie Mac" ');
tx.executeSql(' UPDATE bands SET start_time=1710, finish_time=1805, band_name="The Courteeners" where id = 13 ');
tx.executeSql(' UPDATE bands SET start_time=1825, finish_time=1925 WHERE band_name="Hozier" ');
tx.executeSql(' UPDATE bands SET start_time=1940, finish_time=2040 WHERE band_name="Sam Smith" ');
tx.executeSql(' UPDATE bands SET start_time=2115, finish_time=2245 WHERE band_name="Kasabian" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1230 WHERE band_name="The Coronas" ');
tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1310 WHERE band_name="Bleachers" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1400 WHERE band_name="Reverend & The Makers" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1500 WHERE band_name="Fuse Odg" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1600 WHERE band_name="Mark Ronson Dj Set" ');
tx.executeSql(' UPDATE bands SET start_time=1635, finish_time=1710 WHERE band_name="Jess Glynne" ');
tx.executeSql(' UPDATE bands SET start_time=1740, finish_time=1820 WHERE band_name="Labrinth" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=1935 WHERE band_name="Chvrches" ');
tx.executeSql(' UPDATE bands SET start_time=2005, finish_time=2055 WHERE band_name="Tom Jones" ');
tx.executeSql(' UPDATE bands SET start_time=2135, finish_time=2250 WHERE band_name="Olly Murs" ');
tx.executeSql(' UPDATE bands SET start_time=1205, finish_time=1235 WHERE band_name="Seafret" ');
tx.executeSql(' UPDATE bands SET start_time=1250, finish_time=1320 WHERE band_name="Sinead Harnett" ');
tx.executeSql(' UPDATE bands SET start_time=1340, finish_time=1410 WHERE band_name="Aston Merrygold" ');
tx.executeSql(' UPDATE bands SET start_time=1440, finish_time=1520 WHERE band_name="Mnek" ');
tx.executeSql(' UPDATE bands SET start_time=1540, finish_time=1620 WHERE band_name="Tove Lo" ');
tx.executeSql(' UPDATE bands SET start_time=1655, finish_time=1740 WHERE band_name="Pendulum Dj Set" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1920 WHERE band_name="Example & Dj Wire" ');
tx.executeSql(' UPDATE bands SET start_time=2005, finish_time=2055 WHERE band_name="Andy C" ');
tx.executeSql(' UPDATE bands SET start_time=2135, finish_time=2255 WHERE band_name="Nero" ');
tx.executeSql(' UPDATE bands SET start_time=1300, finish_time=1330 WHERE band_name="Zac Samuel" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Sam Feldt" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1525 WHERE band_name="Alex Adair" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1630 WHERE band_name="Shift K3y" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1745 WHERE band_name="My Nu Leng" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1905 WHERE band_name="Mistajam" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2045 WHERE band_name="Dj Ez" ');
tx.executeSql(' UPDATE bands SET start_time=2115, finish_time=2220 WHERE band_name="Hannah Wants" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="Tom Deacon" ');
tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1310 WHERE band_name="Jarlath Regan" ');
tx.executeSql(' UPDATE bands SET start_time=1310, finish_time=1355 WHERE band_name="Seann Walsh" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Jen Brister" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1455 WHERE band_name="Craig Murray" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1545 WHERE band_name="Frankie Boyle" ');
tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1615 WHERE band_name="Marlon Davis" ');
tx.executeSql(' UPDATE bands SET start_time=1620, finish_time=1645 WHERE band_name="Simon King" ');
tx.executeSql(' UPDATE bands SET start_time=1650, finish_time=1730 WHERE band_name="Nick Helm" ');
tx.executeSql(' UPDATE bands SET start_time=1740, finish_time=1800, band_name="Louisa Omielan" where id= 89 ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1830 WHERE band_name="Prince Abdi" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1900 WHERE band_name="Gareth Richards" ');
tx.executeSql(' UPDATE bands SET start_time=1220, finish_time=1250 WHERE band_name="The Proclaimers" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1400 WHERE band_name="Gregory Porter" ');
tx.executeSql(' UPDATE bands SET start_time=1435, finish_time=1515 WHERE band_name="Ella Henderson" ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1640 WHERE band_name="The Kooks" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1800 WHERE band_name="George Ezra" ');
tx.executeSql(' UPDATE bands SET start_time=1815, finish_time=1910 WHERE band_name="Ellie Goulding" ');
tx.executeSql(' UPDATE bands SET start_time=1940, finish_time=2040 WHERE band_name="The Script" ');
tx.executeSql(' UPDATE bands SET start_time=2115, finish_time=2245 WHERE band_name="Calvin Harris" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1220 WHERE band_name="Hilltop Hoods" ');
tx.executeSql(' UPDATE bands SET start_time=1245, finish_time=1310 WHERE band_name="Scouting For Girls" ');
tx.executeSql(' UPDATE bands SET start_time=1335, finish_time=1410 WHERE band_name="Echo & The Bunnymen" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1505 WHERE band_name="Ella Eyre" ');
tx.executeSql(' UPDATE bands SET start_time=1525, finish_time=1555 WHERE band_name="Maverick Sabre" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1715 WHERE band_name="Sigma" ');
tx.executeSql(' UPDATE bands SET start_time=1735, finish_time=1820 WHERE band_name="The Charlatans" ');
tx.executeSql(' UPDATE bands SET start_time=1845, finish_time=1930 WHERE band_name="Kodaline" ');
tx.executeSql(' UPDATE bands SET start_time=1955, finish_time=2055 WHERE band_name="Clean Bandit" ');
tx.executeSql(' UPDATE bands SET start_time=2110, finish_time=2230 WHERE band_name="Stereophonics" ');
tx.executeSql(' UPDATE bands SET start_time=1205, finish_time=1235 WHERE band_name="Indiana" ');
tx.executeSql(' UPDATE bands SET start_time=1250, finish_time=1320 WHERE band_name="Lawson" ');
tx.executeSql(' UPDATE bands SET start_time=1340, finish_time=1410 WHERE band_name="Conor Maynard" ');
tx.executeSql(' UPDATE bands SET start_time=1435, finish_time=1505 WHERE band_name="Wretch 32" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1605 WHERE band_name="Jack Savoretti" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1710 WHERE band_name="Lunchmoney Lewis" ');
tx.executeSql(' UPDATE bands SET start_time=1735, finish_time=1810 WHERE band_name="De La Soul" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=1930 WHERE band_name="Duke Dumont" ');
tx.executeSql(' UPDATE bands SET start_time=2010, finish_time=2100 WHERE band_name="Jessie Ware" ');
tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2245 WHERE band_name="Paloma Faith" ');
tx.executeSql(' UPDATE bands SET start_time=1300, finish_time=1330 WHERE band_name="Zac Samuel" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1500 WHERE band_name="Moxie" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1630 WHERE band_name="Marvin Humes Presents Luvbug" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1745 WHERE band_name="Goldie" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1910 WHERE band_name="Toddla T" ');
tx.executeSql(' UPDATE bands SET start_time=1945, finish_time=2020 WHERE band_name="Philip George" ');
tx.executeSql(' UPDATE bands SET start_time=2115, finish_time=2230 WHERE band_name="Oliver Heldens" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1235, band_name="Matt Richardson"  where id = 69');
tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1305 WHERE band_name="Danny Mcloughlin" ');
tx.executeSql(' UPDATE bands SET start_time=1310, finish_time=1355 WHERE band_name="Shappi Khorsandi" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1425 WHERE band_name="Suzi Ruffell" ');
tx.executeSql(' UPDATE bands SET start_time=1430, finish_time=1500 WHERE band_name="Andy Robinson" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1545 WHERE band_name="Russell Kane" ');
tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1620 WHERE band_name="Paul Mccaffrey" ');
tx.executeSql(' UPDATE bands SET start_time=1620, finish_time=1650 WHERE band_name="Hypnodog Ft Krystyna" ');
tx.executeSql(' UPDATE bands SET start_time=1730, finish_time=1750 WHERE band_name="Gary Delaney" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1825 WHERE band_name="Andrew Oneill" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1900 WHERE band_name="Joe Bor" ');

tx.executeSql(' UPDATE bands SET start_time=1300, finish_time=1330, band_name="Zac Samuel/James Glover" WHERE id = 55 ');
		
		
		set_up_main_page();
	});
}













