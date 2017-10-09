(function() {
    'use strict';


    function Boot() {}

    Boot.prototype = {
        preload: function() {
            this.load.image('preloader', 'assets/preloader.gif');
        },

        create: function() {
            // NOTE configure game
            this.game.input.maxPointers = 1;
            if (this.game.device.desktop) {
                this.game.scale.pageAlignHorizontally = true;

                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            } else {
                this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
                this.game.scale.minWidth = 480;
                this.game.scale.minHeight = 260;
                this.game.scale.maxWidth = 10000;
                this.game.scale.maxHeight = 5630;
                this.game.scale.forceOrientation(true);
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.updateLayout(true);
            }

            // NOTE preparing the scoring, use local storage, retrieve or create new
            this.game.currentgame = "other";
            this.game.highgame1 = JSON.parse(localStorage.getItem('highgame1'));
            this.game.highgame2 = JSON.parse(localStorage.getItem('highgame2'));
            this.game.highgame3 = JSON.parse(localStorage.getItem('highgame3'));
            this.game.highgame4 = JSON.parse(localStorage.getItem('highgame4'));

            // localstorage for teams, imma just make some really really ulgy code right here
            this.game.team1 = JSON.parse(localStorage.getItem('team1'));
            this.game.team2 = JSON.parse(localStorage.getItem('team2'));
            this.game.team3 = JSON.parse(localStorage.getItem('team3'));
            this.game.team4 = JSON.parse(localStorage.getItem('team4'));
            this.game.team5 = JSON.parse(localStorage.getItem('team5'));
            this.game.team6 = JSON.parse(localStorage.getItem('team6'));
            this.game.team7 = JSON.parse(localStorage.getItem('team7'));
            this.game.team8 = JSON.parse(localStorage.getItem('team8'));
            this.game.team9 = JSON.parse(localStorage.getItem('team9'));
            this.game.team10 = JSON.parse(localStorage.getItem('team10'));

            if (this.game.team1 === null) {
                var cred = 0;
                localStorage.setItem('team1', cred);
            }
            if (this.game.team2 === null) {
                var cred = 0;
                localStorage.setItem('team2', cred);
            }
            if (this.game.team3 === null) {
                var cred = 0;
                localStorage.setItem('team3', cred);
            }
            if (this.game.team4 === null) {
                var cred = 0;
                localStorage.setItem('team4', cred);
            }
            if (this.game.team5 === null) {
                var cred = 0;
                localStorage.setItem('team5', cred);
            }
            if (this.game.team6 === null) {
                var cred = 0;
                localStorage.setItem('team6', cred);
            }
            if (this.game.team7 === null) {
                var cred = 0;
                localStorage.setItem('team7', cred);
            }
            if (this.game.team8 === null) {
                var cred = 0;
                localStorage.setItem('team8', cred);
            }
            if (this.game.team9 === null) {
                var cred = 0;
                localStorage.setItem('team9', cred);
            }
            if (this.game.team10 === null) {
                var cred = 0;
                localStorage.setItem('team10', cred);
            }


            this.game.aantalphones = localStorage.getItem('aantalphones');
            console.log(this.game.aantalphones);

            this.game.credits = localStorage.getItem('credits');
            if (this.game.credits === null) {
                var cred = 0;
                localStorage.setItem('credits', cred);
            }

            if (this.game.aantalphones === null) {
                var nummm = 0;
                this.game.aantalphones = 0;
                localStorage.setItem('aantalphones', nummm);
            }

            this.game.aantalphones = parseInt(this.game.aantalphones);

            if (this.game.highgame1 === null) {
                var booya = [
                    [0, 0, 0, 0, 0],
                    [".....", ".....", ".....", ".....", "....."]
                ];
                localStorage.setItem('highgame1', JSON.stringify(booya));
                this.game.highgame1 = JSON.parse(localStorage.getItem('highgame1'));
            }

            if (this.game.highgame2 === null) {
                var booya = [
                    [0, 0, 0, 0, 0],
                    [".....", ".....", ".....", ".....", "....."]
                ];
                localStorage.setItem('highgame2', JSON.stringify(booya));
                this.game.highgame2 = JSON.parse(localStorage.getItem('highgame2'));
            }

            if (this.game.highgame3 === null) {
                var booya = [
                    [0, 0, 0, 0, 0],
                    [".....", ".....", ".....", ".....", "....."]
                ];
                localStorage.setItem('highgame3', JSON.stringify(booya));
                this.game.highgame3 = JSON.parse(localStorage.getItem('highgame3'));
            }

            if (this.game.highgame4 === null) {
                var booya = [
                    [0, 0, 0, 0, 0],
                    [".....", ".....", ".....", ".....", "....."]
                ];
                localStorage.setItem('highgame4', JSON.stringify(booya));
                this.game.highgame4 = JSON.parse(localStorage.getItem('highgame4'));
            }





            // loading the assets
            this.game.state.start('preloader');




        }
    };

    window['ewaste'] = window['ewaste'] || {};
    window['ewaste'].Boot = Boot;
}());