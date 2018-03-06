(function () {
    'use strict';

    function Menu() {}

    //declaring the vars
    var credit;
    var key1;
    var key2;
    var key3;
    var key4;
    var key5;
    var key6;
    var keyq;
    var keyz;
    var keyx;
    var keyi;
    var player;
    var cursors;
    var creditnum;
    var hit1;
    var hit2;
    var hit3;
    var hit4;
    var hit5;
    var hit6;
    var filmhit;
    var facing = 'right';
    var hitArray = [];
    var currentHit;
    var p1p2;
    var gameuitleg;

    var keyp;
    var timmy;

    var arcadeid;

    var phoneaddbg;
    var gear1;
    var gear2;
    var gearsactivated = false;

    var music;

    var playercurrenton = null;

    var screensaver = 0;

    var currentgametext = "";

    var valid;

    var alarm;
    var audioalarm;
    var alarmplay;

    var stopforproc;
    var geencredits;

    var tween;

    var mode1p;
    var mode2pteam;
    var mode2pversus;

    var thumbs1;
    var thumbs2;
    var thumbs3;
    var thumbs4;
    var thumbs5;
    var thumbs6;
    var thumbsfilms;

    var thumbsArray = [];

    var creditcost;

    var gramcal;

    var aantalphonestext;

    var gameselect = false;
    var teamselect = false;
    var modeisselected = false;

    var mode1pbig;
    var mode2pversusbig;
    var mode2pteambig;
    var selectie;

    var bg;
    var fill;

    var style;

    var uitleg1;
    var uitleg2;
    var uitleg3;
    var uitleg4;
    var uitleg5;
    var uitleg6;
    var uitlegAr;

    var aantalphones;

    var credittekst;

    var gamestarted = false;

    var countdown = 15;
    var countdowntext = "";

    var quickstart = false;

    var standing;

    var kiesspel;
    var kiesanim;

    // teams
    var teamimg1, teamimg2, teamimg3, teamimg4, teamimg5, teamimg6, teamimg7, teamimg8, teamimg9, teamimg10, teamimg10;
    var aantalteams;
    var teamnames;

    // handling the teamselection images
    var teambg;

    var teamback;
    var teamcurrent;
    var teamnext;
    var teamtext;

    var currentteamnumber;
    // boolean for keeping track when team is chosen.
    var timetochooseteams;
    var teamchoosen;

    // these will act as a counter
    var teamlinksvar;
    var teamrechtsvar;

    var insertsound;

    Menu.prototype = {


        create: function () {
            bg = this.game.add.image(0, 0, 'menubg');

            this.game.multiplay = false;
            teamchoosen = false;
            timetochooseteams = false;
            teamlinksvar = 0;
            teamrechtsvar = 0;
            currentteamnumber = 1;
            audioalarm = this.game.add.audio('alarm');
            insertsound = this.game.add.audio('insert');
            music = this.game.add.audio('menu');

            stopforproc = false;
            // allowing teams
            var phaserJSON = this.game.cache.getJSON('needy');
            aantalteams = phaserJSON.aantal;
            teamnames = phaserJSON.teamnames;
            arcadeid = phaserJSON.id;
            console.log(teamnames);

            kiesspel = this.game.add.sprite(60, 10, 'kiesspel');
            kiesanim = kiesspel.animations.add('anim', [0, 1, 2, 3], 3, true);
            kiesspel.animations.play('anim');

            music.play();
            music.loopFull(0.9);
            hit1 = this.game.add.image(93, 250, 'hit1');
            hit2 = this.game.add.image(255, 250, 'hit2');
            hit3 = this.game.add.image(300, 420, 'hit3');
            hit4 = this.game.add.image(446, 250, 'hit4');
            hit5 = this.game.add.image(-300, -300, 'hit5');
            hit6 = this.game.add.image(-300, -300, 'hit6');
            filmhit = this.game.add.image(900, 260, 'filmhit');



            
            hitArray = [hit1, hit2, hit3, hit4, hit5, hit6, filmhit];

            for (var b = 0; b < hitArray.length; b++) {
                hitArray[b].alpha = 0.2;
                hitArray[b].scale.setTo(0.2, 0.2);
            }

            credit = localStorage.getItem('credits');

            // dude
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            //  This sprite was created with the Phaser Gen Paint app
            //  also available in the Phaser Examples repo and on the Phaser site.
            //this.game.create.texture('phaserDude', dudeData, 4, 4, 0);

            player = this.game.add.sprite(480, 370, 'crp1');
            player.animations.add('left', [6, 7, 8], 10, true);
            player.animations.add('right', [9, 10, 11], 10, true);

            //player = this.game.add.sprite(300, 500, 'cr2');
            player.anchor.set(0.5);
            //player.scale.setTo(0.4, 0.4);

            //this.game.physics.arcade.enable(player);
            this.game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
            this.game.physics.arcade.enable(hitArray[1], Phaser.Physics.ARCADE);

            cursors = this.game.input.keyboard.createCursorKeys();

            //player.frame = 2;

            player.body.collideWorldBounds = true;
            //quickstart
            key1 = this.input.keyboard.addKey(Phaser.Keyboard.ONE);
            key1.onDown.add(this.breakoutstart, this);

            key2 = this.input.keyboard.addKey(Phaser.Keyboard.TWO);
            key2.onDown.add(this.catmousestart, this);

            key3 = this.input.keyboard.addKey(Phaser.Keyboard.THREE);
            key3.onDown.add(this.racestart, this);

            key4 = this.input.keyboard.addKey(Phaser.Keyboard.FOUR);
            key4.onDown.add(this.platformerstart, this);

            key5 = this.input.keyboard.addKey(Phaser.Keyboard.FIVE);
            key5.onDown.add(this.minerstart, this);

            key6 = this.input.keyboard.addKey(Phaser.Keyboard.SIX);
            key6.onDown.add(this.recstart, this);

            keyz = this.input.keyboard.addKey(Phaser.Keyboard.Z);
            keyz.onDown.add(this.startnow, this);

            keyx = this.input.keyboard.addKey(Phaser.Keyboard.X);
            keyx.onDown.add(this.cancelnow, this);

            keyq = this.input.keyboard.addKey(Phaser.Keyboard.O);
            keyq.onDown.add(this.creditadd, this);

            keyi = this.input.keyboard.addKey(Phaser.Keyboard.I);
            keyi.onDown.add(this.phonefound, this);

            keyp = this.input.keyboard.addKey(Phaser.Keyboard.P);
            keyp.onDown.add(this.phonedenied, this);



            creditnum = this.game.add.bitmapText(this.game.width * 0.63, this.game.height * 0.9, 'scorefont', credit, 45);
            creditnum.anchor.set(0.5);






            phoneaddbg = this.game.add.image(this.game.width / 2, this.game.height / 2, 'phoneaddbg');
            phoneaddbg.anchor.set(0.5);
            phoneaddbg.visible = false;




            gramcal = parseInt(this.game.aantalphones) * 250;
            console.log(gramcal);

            credittekst = this.game.add.bitmapText(this.game.width * 0.88, this.game.height * 0.9, 'scorefont', '' + gramcal, 30);
            credittekst.anchor.set(0.5);
            credittekst.align = "center";

            //example styling
            style = {
                font: "bold 20px Arial",
                fill: "#fff",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            };

            //  The Text is positioned at 0, 100
            //this.game.aantalphones
            aantalphonestext = this.game.add.bitmapText(this.game.width * 0.73, this.game.height * 0.9, 'scorefont', '' + this.game.aantalphones, 30);
            aantalphonestext.anchor.set(0.5);



            alarm = this.game.add.sprite(this.stage.width / 2, this.stage.height / 4, 'processing');
            alarmplay = alarm.animations.add('alarm', [0, 1, 2, 3, 4], 10, true);
            alarm.scale.setTo(2, 2);
            alarm.anchor.setTo(0.5, 0.5);
            alarm.visible = false;

            p1p2 = this.game.add.image(50, 20, 'gameselect');
            p1p2.visible = false;



            gear1 = this.game.add.image(this.game.width / 2 - 188, this.game.height / 2 + 92, 'gear1');
            gear2 = this.game.add.image(this.game.width / 2 + 188, this.game.height / 2 + 92, 'gear1');
            gear1.anchor.set(0.5);
            gear2.anchor.set(0.5);

            gear1.visible = false;
            gear2.visible = false;

            gameselect = false;

            creditcost = this.game.add.text(this.game.world.centerX - 80, 130, "Kost 1 credit", {
                font: "10px Arial",
                fill: "#000000",
                align: "center"
            });
            creditcost.anchor.setTo(0.5, 0.5);
            creditcost.visible = false;





            // NOTE Thumbnailing
            thumbs1 = this.game.add.image(this.game.width / 2, 27, 'thumbs1');
            thumbs2 = this.game.add.image(this.game.width / 2, 27, 'thumbs2');
            thumbs3 = this.game.add.image(this.game.width / 2, 27, 'thumbs3');
            thumbs4 = this.game.add.image(this.game.width / 2, 27, 'thumbs4');
            thumbs5 = this.game.add.image(this.game.width / 2, 27, 'thumbs6');
            thumbs6 = this.game.add.image(this.game.width / 2, 27, 'thumbs5');
            thumbsfilms = this.game.add.image(this.game.width / 2, 27, 'thumbsfilms');

            thumbsArray = [thumbs1, thumbs2, thumbs3, thumbs4, thumbs5, thumbs6, thumbsfilms];

            for (var t = 0; t < thumbsArray.length; t++) {
                thumbsArray[t].visible = false;
            }


            valid = this.game.add.image(this.game.width / 2 + 200, this.game.height / 2, 'valid')
            valid.anchor.set(0.5, 0.5);
            valid.visible = false;

            timmy = this.game.add.image(this.game.width / 2 + 200, this.game.height / 2, 'timmy')
            timmy.anchor.set(0.5, 0.5);
            timmy.visible = false;

            geencredits = this.game.add.image(this.game.width / 2, this.game.height / 2, 'geencredits')
            geencredits.anchor.set(0.5, 0.5);
            geencredits.visible = false;

            mode1p = this.game.add.image(this.game.width / 2, this.game.height / 2, 'mode1pmini')
            mode1p.anchor.set(0.5, 0.5);
            mode1p.visible = false;

            mode2pteam = this.game.add.image(this.game.width / 2, this.game.height / 2, 'mode2pteammini')
            mode2pteam.anchor.set(0.5, 0.5);
            mode2pteam.visible = false;

            mode2pversus = this.game.add.image(this.game.width / 2, this.game.height / 2, 'mode2pversusmini');
            mode2pversus.anchor.set(0.5, 0.5);
            mode2pversus.visible = false;

            fill = this.game.add.image(0, 0, 'fill');
            fill.visible = false;

            mode1pbig = this.game.add.image(0, 0, 'mode1p');
            mode2pversusbig = this.game.add.image(0, 0, 'mode2pversus');
            mode2pteambig = this.game.add.image(0, 0, 'mode2pteam');
            selectie = this.game.add.image(0, 0, 'selectie');

            mode1pbig.anchor.set(0.5, 0.5);
            mode1pbig.visible = false;
            mode2pversusbig.anchor.set(0.5, 0.5);
            mode2pversusbig.visible = false;
            mode2pteambig.anchor.set(0.5, 0.5);
            mode2pteambig.visible = false;
            selectie.anchor.set(0.5, 0.5);
            selectie.visible = false;

            currentgametext = this.game.add.bitmapText(this.game.width * 0.10, this.game.height * 0.07, 'scorefont', '', 30);











            uitleg1 = this.game.add.image(0, 0, 'uitleg1');
            uitleg2 = this.game.add.image(0, 0, 'uitleg2');
            uitleg3 = this.game.add.image(0, 0, 'uitleg3');
            uitleg4 = this.game.add.image(0, 0, 'uitleg4');
            uitleg5 = this.game.add.image(0, 0, 'uitleg5');
            uitleg6 = this.game.add.image(0, 0, 'uitleg6');

            uitlegAr = [uitleg1, uitleg2, uitleg3, uitleg4, uitleg5, uitleg6];

            for (var e = 0; e < uitlegAr.length; e++) {
                uitlegAr[e].visible = false;
            }

            countdowntext = this.game.add.bitmapText(this.game.width / 2, 500, 'scorefont', '', 30);
            countdowntext.anchor.setTo(0.5, 0.5);

            standing = this.game.add.image(720, 200, 'standing');
            standing.kill();

            teambg = this.game.add.image(this.game.width / 2, this.game.height / 2, 'teambg');
            teambg.anchor.set(0.5);
            teambg.visible = false;


            // displaying teams
            if (aantalteams >= 2) {
                teamback = this.game.add.image(this.game.width / 8 * 2, 300, 'team' + aantalteams);
                teamback.anchor.set(0.5, 0.5);
                teamback.visible = false;
                teamback.alpha = 0.1;
            }


            teamcurrent = this.game.add.image(this.game.width / 8 * 4, 300, 'team1');
            teamcurrent.anchor.set(0.5, 0.5);
            teamcurrent.visible = false;
            if (aantalteams >= 2) {
                teamnext = this.game.add.image(this.game.width / 8 * 6, 300, 'team2');
                teamnext.anchor.set(0.5, 0.5);
                teamnext.visible = false;
                teamnext.alpha = 0.1;
            }


            teamtext = this.game.add.bitmapText(this.game.width / 2, this.game.height / 7 * 6, 'scorefont', '1 van 6', 30);
            teamtext.anchor.setTo(0.5, 0.5);
            teamtext.visible = false;


            // check if a credit add from the screensaver screen is added
            if (this.game.screensavercreditadded === true) {
                this.game.screensavercreditadded = false;
                // activate o key press
                this.creditadd();
            }

        },

        update: function () {
            // needs back at 30
            if (screensaver === 2500) {
                music.stop();

                this.game.state.start('screensaver', true, false);
                // this.game.destroy();
                // location.reload();
            }
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;

            if (gameselect === false) {
                if (cursors.left.isDown) {
                    screensaver = 0;
                    player.body.velocity.x = -200;
                    player.animations.play('left');
                    facing = 'left';
                } else if (cursors.right.isDown && player.x <= 1000) {
                    //console.log(player.x);
                    screensaver = 0;
                    player.body.velocity.x = 200;
                    player.animations.play('right');
                    facing = 'right';
                } else if (cursors.up.isDown && player.y >= 270) {
                    screensaver = 0;
                    switch (facing) {
                        case 'left':
                            player.animations.play('left');
                            break;
                        case 'right':
                            player.animations.play('right');
                            break;
                    }
                    player.body.velocity.y = -200;

                } else if (cursors.down.isDown && player.y <= 370) {
                    screensaver = 0;
                    switch (facing) {
                        case 'left':
                            player.animations.play('left');
                            break;
                        case 'right':
                            player.animations.play('right');
                            break;
                    }
                    player.body.velocity.y = 200;
                } else {
                    player.animations.stop();
                    switch (facing) {
                        case 'left':
                            player.frame = 2;
                            break;
                        case 'right':
                            player.frame = 3;
                            break;
                    }
                }
            }

            // TODO: HEREEEEE TEAMLOGIC
            if (timetochooseteams === true) {
                if (cursors.left.isDown) {

                    teamlinksvar++;
                    if (teamlinksvar === 8) {
                        teamlinksvar = 0;
                        console.log("left is pressed");

                        if (currentteamnumber === 1) {
                            currentteamnumber = aantalteams;
                        } else {
                            currentteamnumber--;
                        }
                        // aantalteams currentteamnumber

                        this.teamHover();
                    }
                } else if (cursors.right.isDown) {

                    teamrechtsvar++;
                    if (teamrechtsvar === 8) {

                        teamrechtsvar = 0;


                        if (currentteamnumber === aantalteams) {
                            currentteamnumber = 1;
                        } else {
                            currentteamnumber++;
                        }
                        this.teamHover();

                    }
                }

                // displaying teams of text
                teamtext.text = currentteamnumber + " van de " + aantalteams;
            }


            if (gameselect === true && timetochooseteams === false) {
                mode1p.visible = false;
                mode2pteam.visible = false;;
                mode2pversus.visible = false;
                switch (playercurrenton) {
                    case 0:
                        if (cursors.left.isDown) {
                            modeisselected = true;
                            this.game.multiplay = false;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            mode1pbig.alpha = 1.0;
                            mode2pteambig.alpha = 0.5;
                            //select 1 p
                        } else if (cursors.right.isDown) {
                            modeisselected = true;
                            this.game.multiplay = true;
                            selectie.x = this.game.width / 2 + 200;
                            selectie.y = this.game.height / 2 - 10;
                            mode1pbig.alpha = 0.5;
                            mode2pteambig.alpha = 1;
                            // select 2 p
                        }
                        //this.game.state.start('breakout', true, false);
                        break;
                    case 1:
                        if (cursors.left.isDown) {
                            modeisselected = true;
                            this.game.multiplay = false;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            mode1pbig.alpha = 1.0;
                            mode2pversusbig.alpha = 0.5;
                            //select 1 p
                        } else if (cursors.right.isDown) {
                            modeisselected = true;
                            this.game.multiplay = true;
                            selectie.x = this.game.width / 2 + 200;
                            selectie.y = this.game.height / 2 - 10;
                            // select 2 p
                            mode1pbig.alpha = 0.5;
                            mode2pversusbig.alpha = 1;
                        }
                        //this.game.state.start('catmouse', true, false);
                        break;
                    case 2:
                        //this.game.state.start('racer', true, false);
                        break;
                    case 3:
                        if (cursors.left.isDown) {
                            modeisselected = true;
                            this.game.multiplay = false;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            mode1pbig.alpha = 1;
                            mode2pversusbig.alpha = 0.5;
                            //select 1 p
                        } else if (cursors.right.isDown) {
                            modeisselected = true;
                            this.game.multiplay = true;
                            selectie.x = this.game.width / 2 + 200;
                            selectie.y = this.game.height / 2 - 10;
                            // select 2 p
                            mode1pbig.alpha = 0.5;
                            mode2pversusbig.alpha = 1;
                        }
                        //this.game.state.start('platformer', true, false);
                        break;
                    case 4:
                        //window.location.href = "./miner/index.html";
                        break;
                    case 5:
                        //window.location.href = "./rec/index.html";
                        break;
                    case 6:
                        //this.game.state.start('theater', true, false);
                        break;
                }


            }

            screensaver++;
            //console.log(screensaver);
            //console.log("playerx = " + player.x + " playery = " + player.y)
            // Hittest for selecting level
            for (var o = 0; o < hitArray.length; o++) {
                if (this.checkOverlap(player, hitArray[o])) {

                    this.setOverlap(hitArray[o]);
                    currentHit = hitArray[o];

                } else {

                    this.removeOverlap(hitArray[o]);

                }
            }

            if (gearsactivated) {
                gear1.angle += -1;
                gear2.angle += -1;
                alarm.animations.play('alarm');
            }

            //this.game.debug.body(player);
            if (playercurrenton !== null && stopforproc !== true) {
                //console.log(playercurrenton)
                if (playercurrenton === 6) {
                    creditcost.visible = false;
                } else {

                }

                //console.log(playercurrenton);
            } else {
                creditcost.visible = false;
            }

        },
        teamHover: function () {
            console.log("Team  " + currentteamnumber + " is gekozen");

            var backstring;
            var currentstring;
            var nextstring;


            // TODO: 
            if (currentteamnumber === 1) {
                backstring = 'team' + aantalteams;
                currentstring = 'team' + currentteamnumber;
                nextstring = 'team2';
            } else if (currentteamnumber === aantalteams) {
                backstring = 'team' + (aantalteams - 1);
                currentstring = 'team' + currentteamnumber;
                nextstring = 'team1';
            } else {
                backstring = 'team' + (currentteamnumber - 1);
                currentstring = 'team' + currentteamnumber;
                nextstring = 'team' + (currentteamnumber + 1);
            }

            teamback.loadTexture(backstring, 0);
            teamcurrent.loadTexture(currentstring, 0);
            teamnext.loadTexture(nextstring, 0);
        },
        startnow: function () {
            // First check if is film

            if (quickstart === true) {
                //console.log("mutli = " + this.game.multiplay);
                creditcost.visible = false;
                fill.visible = false;
                gameselect = false;
                player.visible = true;
                mode1pbig.visible = false;
                mode2pteambig.visible = false;
                mode2pversusbig.visible = false;
                selectie.visible = false;
                quickstart = false;
                gamestarted = false;
                switch (playercurrenton) {
                    case 0:
                        gameselect = false;
                        this.game.state.start('breakout', true, false);
                        break;
                    case 1:
                        gameselect = false;
                        this.game.state.start('catmouse', true, false);
                        break;
                    case 2:
                        gameselect = false;
                        this.game.state.start('racer', true, false);
                        break;
                    case 3:
                        gameselect = false;
                        this.game.state.start('platformer', true, false);
                        break;
                    case 4:
                        gameselect = false;
                        this.game.destroy();
                        window.location.href = "./miner/index.html";
                        break;
                    case 5:
                        gameselect = false;
                        this.game.destroy();
                        window.location.href = "./rec/index.html";
                        break;
                }
                return;
            }


            if (timetochooseteams === true) {
                teamtext.visible = true;
                teamcurrent.visible = false;

                if (aantalteams >= 2) {
                    teamback.visible = false;
                    teamnext.visible = false;
                }

                teamtext.visible = false;

                timetochooseteams = false;
                teambg.visible = false;

                player.visible = true;

                teamchoosen = true;
                stopforproc = false;


                switch (currentteamnumber) {
                    case 1:
                        this.game.team1 = this.game.team1 + 1;
                        var up = this.game.team1;
                        localStorage.setItem('team1', up);
                        break;
                    case 2:
                        this.game.team2 = this.game.team2 + 1;
                        var up = this.game.team2;
                        localStorage.setItem('team2', up);
                        break;
                    case 3:
                        this.game.team3 = this.game.team3 + 1;
                        var up = this.game.team3;
                        localStorage.setItem('team3', up);
                        break;
                    case 4:
                        this.game.team4 = this.game.team4 + 1;
                        var up = this.game.team4;
                        localStorage.setItem('team4', up);
                        break;
                    case 5:
                        this.game.team5 = this.game.team5 + 1;
                        var up = this.game.team5;
                        localStorage.setItem('team5', up);
                        break;
                    case 6:
                        this.game.team6 = this.game.team6 + 1;
                        var up = this.game.team6;
                        localStorage.setItem('team6', up);
                        break;
                    case 7:
                        this.game.team7 = this.game.team7 + 1;
                        var up = this.game.team7;
                        localStorage.setItem('team7', up);
                        break;
                    case 8:
                        this.game.team8 = this.game.team8 + 1;
                        var up = this.game.team8;
                        localStorage.setItem('team8', up);
                        break;
                    case 9:
                        this.game.team9 = this.game.team9 + 1;
                        var up = this.game.team9;
                        localStorage.setItem('team9', up);
                        break;
                    case 10:
                        this.game.team10 = this.game.team10 + 1;
                        var up = this.game.team10;
                        localStorage.setItem('team10', up);
                        break;
                    case 11:
                        this.game.team11 = this.game.team11 + 1;
                        var up = this.game.team11;
                        localStorage.setItem('team11', up);
                        break;
                    case 12:
                        this.game.team12 = this.game.team12 + 1;
                        var up = this.game.team12;
                        localStorage.setItem('team12', up);
                        break;
                    case 13:
                        this.game.team13 = this.game.team13 + 1;
                        var up = this.game.team13;
                        localStorage.setItem('team13', up);
                        break;
                    case 14:
                        this.game.team14 = this.game.team14 + 1;
                        var up = this.game.team14;
                        localStorage.setItem('team14', up);
                        break;
                    case 15:
                        this.game.team15 = this.game.team15 + 1;
                        var up = this.game.team15;
                        localStorage.setItem('team15', up);
                        break;
                }



                // https://cubestick.nl/ewasteapp/api/api/getall
                // url for iot http://localhost:8888/ewacon/src/api/arcade/addphone/1/11
                // make IOT call
                //
                this.makeIOTcall("https://ewastearcades.nl/online/api/arcade/addphone/" + arcadeid + "/" + this.game.aantalphones + "/" + currentteamnumber + "/" + up);
                // console.log("http://localhost:8888/ewacon/src/api/arcade/addphone/" + arcadeid + "/" + currentteamnumber);
                //; 

            }


            if (gameselect === false) {
                if (playercurrenton === 6) {
                    music.stop();
                    this.game.state.start('theater', true, false);
                    return;
                }



                // Alright, now check if credits and start game
                if (playercurrenton != null && credit > 0 && stopforproc !== true) {
                    creditcost.visible = false;
                    fill.visible = true;

                    gameselect = true;
                    player.visible = false;

                    mode1pbig.visible = true;
                    mode1pbig.alpha = 1.0;
                    switch (playercurrenton) {
                        case 0:
                            modeisselected = true;
                            //this.game.multiplay = true;
                            mode1pbig.visible = true;
                            mode1pbig.x = this.game.width / 2 - 200;
                            mode1pbig.y = this.game.height / 2 - 10;
                            mode2pteambig.visible = true;
                            mode2pteambig.alpha = 0.5;
                            mode2pteambig.x = this.game.width / 2 + 200;
                            mode2pteambig.y = this.game.height / 2 - 10;
                            selectie.visible = true;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            //this.game.state.start('breakout', true, false);
                            break;
                        case 1:
                            modeisselected = true;
                            //this.game.multiplay = true;
                            mode1pbig.visible = true;

                            mode1pbig.x = this.game.width / 2 - 200;
                            mode1pbig.y = this.game.height / 2 - 10;
                            mode2pversusbig.visible = true;
                            mode2pversusbig.alpha = 0.5;
                            mode2pversusbig.x = this.game.width / 2 + 200;
                            mode2pversusbig.y = this.game.height / 2 - 10;
                            selectie.visible = true;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            //this.game.state.start('catmouse', true, false);
                            break;
                        case 2:
                            modeisselected = true;
                            mode1pbig.visible = true;
                            mode1pbig.x = this.game.width / 2;
                            mode1pbig.y = this.game.height / 2 - 10;
                            selectie.visible = true;
                            selectie.x = this.game.width / 2;
                            selectie.y = this.game.height / 2 - 10;
                            //this.game.state.start('racer', true, false);
                            break;
                        case 3:
                            modeisselected = true;
                            //this.game.multiplay = true;
                            mode1pbig.visible = true;
                            mode1pbig.x = this.game.width / 2 - 200;
                            mode1pbig.y = this.game.height / 2 - 10;
                            mode2pversusbig.visible = true;
                            mode2pversusbig.alpha = 0.5;
                            mode2pversusbig.x = this.game.width / 2 + 200;
                            mode2pversusbig.y = this.game.height / 2 - 10;

                            selectie.visible = true;
                            selectie.x = this.game.width / 2 - 200;
                            selectie.y = this.game.height / 2 - 10;
                            //this.game.state.start('platformer', true, false);
                            break;
                        case 4:
                            modeisselected = true;
                            mode1pbig.visible = true;
                            mode1pbig.x = this.game.width / 2;
                            mode1pbig.y = this.game.height / 2 - 10;
                            selectie.visible = true;
                            selectie.x = this.game.width / 2;
                            selectie.y = this.game.height / 2 - 10;
                            //window.location.href = "./miner/index.html";
                            break;
                        case 5:
                            mode1pbig.visible = true;
                            modeisselected = true;
                            mode1pbig.x = this.game.width / 2;
                            mode1pbig.y = this.game.height / 2 - 10;
                            selectie.visible = true;
                            selectie.x = this.game.width / 2;
                            selectie.y = this.game.height / 2 - 10;
                            //window.location.href = "./rec/index.html";
                            break;
                    }


                } else {
                    if (playercurrenton != null) {
                        geencredits.visible = true;
                        geencredits.alpha = 0;
                        tween = this.game.add.tween(geencredits).to({
                            alpha: 1
                        }, 1000, Phaser.Easing.Linear.None, true, 500);
                        tween.onComplete.add(this.tweenback, this);
                    }
                }
            } else if (gamestarted === false && gameselect === true && modeisselected === true) {

                console.log("komt hier nie")

                teamcurrent.visible = false;

                if (aantalteams >= 2) {
                    teamback.visible = false;
                    teamnext.visible = false;
                }
                // give point to chosen team
                var teamarray = [this.game.team1, this.game.team2, this.game.team3, this.game.team4, this.game.team5, this.game.team6, this.game.team7, this.game.team8, this.game.team9, this.game.team10];
                console.log(teamarray);

                var whichstringteam = 'team' + currentteamnumber;
                var addwhat = teamarray[currentteamnumber - 1] + 1;
                localStorage.setItem(whichstringteam, addwhat);


                music.stop();
                credit--;
                localStorage.setItem('credits', credit);
                gamestarted = true;
                // TODO so over here implement the game explanation
                switch (playercurrenton) {
                    case 0:
                        uitleg1.visible = true;
                        //
                        break;
                    case 1:
                        uitleg2.visible = true;
                        //
                        break;
                    case 2:
                        uitleg3.visible = true;
                        this.game.multiplay = false;
                        //
                        break;
                    case 3:
                        uitleg4.visible = true;
                        //
                        break;
                    case 4:
                        //uitleg6.visible = true;
                        this.game.multiplay = false;
                        window.location.href = "./miner/index.html";
                        return;
                        //
                        break;
                    case 5:
                        //uitleg5.visible = true;
                        this.game.multiplay = false;
                        window.location.href = "./rec/index.html";
                        return;

                        //
                        break;
                    case 6:
                        this.game.state.start('theater', true, false);
                        break;
                }
                //this.input.onDown.add(this.gamelaunch, this);
                countdown = 15;



                this.game.time.events.loop(Phaser.Timer.SECOND, this.countdowntimer, this);
                quickstart = true;
            }
        },
        countdowntimer: function () {
            countdown = countdown - 1;
            countdowntext.text = countdown;
            if (countdown === 0) {
                creditcost.visible = false;
                fill.visible = false;
                gameselect = false;
                player.visible = true;
                mode1pbig.visible = false;
                mode2pteambig.visible = false;
                mode2pversusbig.visible = false;
                selectie.visible = false;
                quickstart = false;
                gamestarted = false;

                switch (playercurrenton) {
                    case 0:
                        this.game.state.start('breakout', true, false);
                        break;
                    case 1:
                        this.game.state.start('catmouse', true, false);
                        break;
                    case 2:
                        this.game.state.start('racer', true, false);
                        break;
                    case 3:
                        this.game.state.start('platformer', true, false);
                        break;
                    case 4:
                        window.location.href = "./miner/index.html";
                        break;
                    case 5:
                        window.location.href = "./rec/index.html";
                        break;
                }
            }

        },

        makeIOTcall: function (theUrl) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    console.log(xmlHttp.responseText);
            }
            xmlHttp.open("GET", theUrl, true); // true for asynchronous 
            xmlHttp.send(null);
        },
        gamelaunch: function () {


        },
        tweenback: function () {
            tween = this.game.add.tween(geencredits).to({
                alpha: 0
            }, 3000, Phaser.Easing.Linear.None, true, 2000);
            tween.onComplete.add(this.deletetween, this);
        },
        deletetween: function () {
            geencredits.visible = false;

        },
        cancelnow: function () {
            if (gameselect === true) {
                creditcost.visible = true;
                fill.visible = false;
                gameselect = false;
                player.visible = true;
                mode1pbig.visible = false;
                mode2pteambig.visible = false;
                mode2pversusbig.visible = false;
                selectie.visible = false;
                teamcurrent.visible = false;


                if (aantalteams >= 2) {
                    teamback.visible = false;
                    teamnext.visible = false;
                }
            }
        },

        breakoutstart: function () {
            music.stop();
            //this.game.state.start('breakout');
            this.game.state.start('score', false, false);
        },
        catmousestart: function () {
            music.stop();
            //this.game.state.start('breakout');
            this.game.state.start('catmouse');
        },
        racestart: function () {
            music.stop();
            //this.game.state.start('breakout');
            //this.game.state.start('racer');
            this.game.state.start('racer');
        },
        platformerstart: function () {
            music.stop();
            //this.game.state.start('breakout');
            this.game.state.start('platformer');
        },
        minerstart: function () {
            music.stop();
            //this.game.state.start('breakout');
            //this.game.state.start('platformer');
            window.location.href = "./miner/index.html";
        },
        recstart: function () {
            music.stop();
            //this.game.state.start('breakout');
            //this.game.state.start('platformer');
            window.location.href = "./rec/index.html";
        },
        creditadd: function () {
            standing.visible = false;
            valid.visible = true;
            gearsactivated = false;
            credit = parseInt(credit) + 3;

            localStorage.setItem('credits', credit);


            this.game.aantalphones = this.game.aantalphones + 1;
            localStorage.setItem('aantalphones', this.game.aantalphones);
            aantalphonestext.text = this.game.aantalphones;
            creditnum.text = credit;
            gramcal = this.game.aantalphones * 250;
            credittekst.text = '' + gramcal;

            //this.game.state.start('breakout');
            //this.game.state.start('catmouse');
            this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.toTeamSelection, this);

        },
        phonedenied: function () {
            http: //localhost:8888/ewacon/src/api/arcade/addfailed/1
                // Make the call through the arcade
                this.makeIOTcall("https://ewastearcades.nl/online/api/arcade/addfailed/" + arcadeid);


            standing.visible = false;
            timmy.visible = true;
            gearsactivated = false;
            //console.log(credit);
            creditnum.text = credit;
            //this.game.state.start('breakout');
            //this.game.state.start('catmouse');
            this.game.time.events.add(Phaser.Timer.SECOND * 2, this.backtoback, this);
        },
        backtoback: function () {
            alarm.visible = false;
            valid.visible = false;
            phoneaddbg.visible = false;
            gear1.visible = false;
            gear2.visible = false;
            timmy.visible = false;
            player.visible = true;
            stopforproc = false;

        },
        toTeamSelection: function () {
            teamtext.visible = true;
            insertsound.play();
            // enabling team selection
            // TODO: Implement skip this if team size = 1
            // gameselect = true;

            // skip this whole section 
            console.log(aantalteams);
            if (aantalteams === 1) {
                teamchoosen = true;
                alarm.visible = false;
                valid.visible = false;
                phoneaddbg.visible = false;
                gear1.visible = false;
                gear2.visible = false;
                timmy.visible = false;
                player.visible = true;
                stopforproc = false;
                teamtext.visible = false;
                // TODO make an IOT call, one team to the database - ewacon (standard);
                this.makeIOTcall("https://ewastearcades.nl/online/api/arcade/addphone/" + arcadeid + "/1");
            } else {
                timetochooseteams = true;
                alarm.visible = false;
                valid.visible = false;
                phoneaddbg.visible = false;
                gear1.visible = false;
                gear2.visible = false;
                timmy.visible = false;
                player.visible = false;
                stopforproc = false;
                teambg.visible = true;
                selectie.visible = false;
                mode1pbig.visible = false;
                mode2pversusbig.visible = false;
                mode2pteambig.visible = false;
                selectie.visible = false;
                teamcurrent.visible = true;
                teamback.visible = true;
                teamnext.visible = true;
                teamchoosen = false;
            }


        },
        phonefound: function () {
            screensaver = 0;
            audioalarm.play();
            stopforproc = true;
            playercurrenton = null;
            currentgametext.text = "";
            alarm.visible = false;
            phoneaddbg.visible = true;
            gearsactivated = true;
            phoneaddbg.visible = true;
            alarm.visible = true;
            player.visible = false;
            gear1.visible = true;
            gear2.visible = true;
            p1p2.visible = false;
            for (var t = 0; t < thumbsArray.length; t++) {
                thumbsArray[t].visible = false;
            }
            creditcost.visible = false;
            standing.revive();
            standing.y = 288;
            standing.x = 650;

            this.game.add.tween(standing).to({
                x: this.game.world.centerX - 250
            }, 7000, Phaser.Easing.Linear.None, true);
        },
        checkOverlap: function (spriteA, spriteB) {
            //game.stage.backgroundColor = '#992d2d';
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
            return Phaser.Rectangle.intersects(boundsA, boundsB);

        },

        setOverlap: function (spriteA) {
            spriteA.alpha = 1;
            if (stopforproc !== true) {
                p1p2.visible = true;

            }
            var a = hitArray.indexOf(spriteA);
            playercurrenton = a;
            creditcost.visible = true;
            if (stopforproc !== true) {
                switch (playercurrenton) {
                    case 0:
                        currentgametext.text = "Raak 'm vaak";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = true;
                        mode2pteam.x = 200;
                        mode2pteam.y = 125;
                        mode2pversus.visible = false;
                        break;
                    case 1:
                        currentgametext.text = "Gooi je zooi";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = false;
                        mode2pversus.visible = true;
                        mode2pversus.x = 200
                        mode2pversus.y = 125
                        break;
                    case 2:
                        currentgametext.text = "Race 'm rond";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = false;
                        mode2pversus.visible = false;
                        break;
                    case 3:
                        currentgametext.text = "Prullenbak Bullebak";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = false;
                        mode2pversus.visible = true;
                        mode2pversus.x = 200
                        mode2pversus.y = 125
                        break;
                    case 4:
                        currentgametext.text = "Grondstof mijnen";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = false;
                        mode2pversus.visible = false;
                        break;
                    case 5:
                        currentgametext.text = "Recycle Cycle";
                        mode1p.visible = true;
                        mode1p.x = 100;
                        mode1p.y = 125;
                        mode2pteam.visible = false;
                        mode2pversus.visible = false;
                        break;
                    case 6:
                        currentgametext.text = "Films";
                        mode1p.visible = false;
                        mode2pteam.visible = false;
                        mode2pversus.visible = false;
                        break;
                }
                for (var t = 0; t < thumbsArray.length; t++) {
                    if (playercurrenton !== t) {
                        thumbsArray[t].visible = false;
                    } else {
                        thumbsArray[t].visible = true;
                    }

                }
            } else {
                currentgametext.text = "";

            }
            //game.stage.backgroundColor = '#992d2d';
            //var boundsA = spriteA.getBounds();
            //var boundsB = spriteB.getBounds();
            //return Phaser.Rectangle.intersects(boundsA, boundsB);
        },
        removeOverlap: function (spriteA) {

            if (currentHit === spriteA) {

                p1p2.visible = false;
                playercurrenton = null;
                currentgametext.text = "";
                mode1p.visible = false;
                mode2pteam.visible = false;
                mode2pversus.visible = false;
                creditcost.visible = false;
                for (var t = 0; t < thumbsArray.length; t++) {
                    thumbsArray[t].visible = false;
                }
            }
            spriteA.alpha = 0;
            //p1p2.visible = false;
            //game.stage.backgroundColor = '#992d2d';
            //var boundsA = spriteA.getBounds();
            //var boundsB = spriteB.getBounds();
            //return Phaser.Rectangle.intersects(boundsA, boundsB);

        },



    };

    window['ewaste'] = window['ewaste'] || {};
    window['ewaste'].Menu = Menu;
}());