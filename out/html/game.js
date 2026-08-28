(function() {
  var game;
  var ui;

  var DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric',
                 month: 'short',
                 day: 'numeric' };

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var TITLE = "Social Liberalism: An Alternate History" + '_' + "Cascadian Patriot";

  // the url is a link to game.json
  // test url: https://aucchen.github.io/social_democracy_mods/v0.1.json
  // TODO; 
  window.loadMod = function(url) {
      ui.loadGame(url);
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('library')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('library');
    }
  };

  window.showMods = function() {
    window.hideOptions();
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('mod_loader')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('mod_loader');
    }
  };

  // TODO: update audio displays
  window.updateAudio = function(song) {
      var now_playing = document.getElementById('currently_playing');
      if (song) {
          var a = song.split('/');
          now_playing.textContent = a[a.length-1];
      } else {
          var s = window.dendryUI.currentAudioURL;
          var a = s.split('/');
          now_playing.textContent = a[a.length-1];
      }
  };

  // sets the volume
  window.setVolume = function(volume) {
      if (window.dendryUI.currentAudio) {
          window.dendryUI.volume = volume/100;
          window.dendryUI.currentAudio.volume = volume/100;
      }
  };

  // go to the next song - this just sets the time to 9999 lol.
  window.shuffle = function() {
      if (window.dendryUI.currentAudio) {
          window.dendryUI.currentAudio.currentTime = 9999;
      }
  };

  // toggles pause or play of music
  window.togglePausePlay = function() {
      if (window.dendryUI.currentAudio) {
          if (window.dendryUI.currentAudio.paused) {
            window.dendryUI.currentAudio.play();
            document.getElementById('pause-button-image').style.display = "inline";
            document.getElementById('play-button-image').style.display = "none";
            document.getElementById('pause-button');
            document.getElementById('pause-button-text').textContent = "Pause";
          } else {
            window.dendryUI.currentAudio.pause();
            document.getElementById('play-button-image').style.display = "inline";
            document.getElementById('pause-button-image').style.display = "none";
            document.getElementById('pause-button-text').textContent = "Play";
          }
      }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };

  window.disableAudio = function() {
      window.dendryUI.toggle_audio(false);
      window.dendryUI.saveSettings();
  };

  window.enableAudio = function() {
      window.dendryUI.toggle_audio(true);
      window.dendryUI.saveSettings();
  };

  window.enableImages = function() {
      window.dendryUI.show_portraits = true;
      window.dendryUI.saveSettings();
  };

  window.disableImages = function() {
      window.dendryUI.show_portraits = false;
      window.dendryUI.saveSettings();
  };

  window.enableLightMode = function() {
      window.dendryUI.dark_mode = false;
      document.body.classList.remove('dark-mode');
      window.dendryUI.saveSettings();
  };
  window.enableDarkMode = function() {
      window.dendryUI.dark_mode = true;
      document.body.classList.add('dark-mode');
      window.dendryUI.saveSettings();
 }
   // * TOOLTIP IS MADE BY COMMUNIST 45 AND DYNAMIC DEV; DONT TAKE THIS, THIS IS NOT MINE. * //
   window.displayText = function (text) {
        return applyWholesome(text);
    };

    //To get a value 
    function getRelationshipText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 5) return '<span style="color: #FF0000;">Hostile</span>';
        if (value <= 14.9) return '<span style="color: #FF4500;">Frigid</span>';
        if (value <= 29.9) return '<span style="color: #FF8C00;">Cold</span>';
        if (value <= 39.9) return '<span style="color: #FFA500;">Cool</span>';
        if (value <= 54.9) return '<span style="color: #FFD700;">Neutral</span>';
        if (value <= 64.9) return '<span style="color: #9ACD32;">Warm</span>';
        if (value <= 74.9) return '<span style="color: #32CD32;">Friendly</span>';
        return '<span style="color: #008000;">Very friendly</span>';
    }

    function getSizeText(value) {
        if (value === undefined || value === null) return '';
        if (value <= 20) return '<span style="color: #6B7280;">Minimal</span>';
        if (value <= 40) return '<span style="color: #8B6F47;">Weak</span>';
        if (value <= 60) return '<span style="color: #556B2F;">Moderate</span>';
        if (value <= 80) return '<span style="color: #7A0000;">Strong</span>';
        return '<span style="color: #2B0000;">Very Strong</span>';
    }

    function getMilitancyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.05) return '<span style="color: #008000;">Nonexistent</span>';
        if (value <= 0.14) return '<span style="color: #32CD32;">Very low</span>';
        if (value <= 0.24) return '<span style="color: #9ACD32;">Low</span>';
        if (value <= 0.44) return '<span style="color: #FFD700;">Medium-low</span>';
        if (value <= 0.69) return '<span style="color: #FFA500;">Medium</span>';
        if (value <= 1) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }

    function getLoyaltyText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value <= 0.06) return '<span style="color: #FF0000;">Completely disloyal</span>';
        if (value <= 0.19) return '<span style="color: #FF4500;">Very disloyal</span>';
        if (value <= 0.31) return '<span style="color: #FF8C00;">Generally disloyal</span>';
        if (value <= 0.41) return '<span style="color: #FFA500;">Mostly disloyal</span>';
        if (value <= 0.54) return '<span style="color: #FFD700;">Divided</span>';
        if (value <= 0.71) return '<span style="color: #9ACD32;">Mostly loyal</span>';
        if (value <= 0.95) return '<span style="color: #32CD32;">Generally loyal</span>';
        return '<span style="color: #008000;">Completely loyal</span>';
    }

    function getStrenghtText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 10) return '<span style="color: #ADD8E6;">Weak</span>';
        if (value < 25) return '<span style="color: #6495ED;">Moderate</span>';
        if (value < 40) return '<span style="color: #4169E1;">Strong</span>';
        if (value < 60) return '<span style="color: #0000CD;">Very strong</span>';
        return '<span style="color: #00008B;">Dominant</span>';
    }

    function getDissentText(value) {
        if (value === undefined || value === null) return 'Unknown';
        if (value < 4.999) return '<span style="color: #008000;">Very low</span>';
        if (value < 14.999) return '<span style="color: #9ACD32;">Low</span>';
        if (value < 30.999) return '<span style="color: #FFD700;">Medium</span>';
        if (value < 49.999) return '<span style="color: #FF4500;">High</span>';
        return '<span style="color: #FF0000;">Very high</span>';
    }

    //To check if extra dynamic or not
    function getDynamicTooltipContent(searchString, baseTooltip) {
        var Q = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state ? 
                window.dendryUI.dendryEngine.state.qualities : null;

        if (!Q) return baseTooltip.explanationText;

       if (searchString === 'KPD' && Q.kpd_relation !== undefined) {
            var relationText = getRelationshipText(Q.kpd_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
       if (searchString === 'SPD' && Q.spd_relation !== undefined) {
            var relationText = getRelationshipText(Q.spd_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
    
       if (searchString === 'USPD' && Q.uspd_relation !== undefined) {
            var relationText = getRelationshipText(Q.uspd_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
       if (searchString === 'DAP' && Q.dap_relation !== undefined) {
            var relationText = getRelationshipText(Q.dap_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
        if (searchString === 'Reichsbanner' && Q.rb_strength !== undefined) {
            var strength = getSizeText(Q.rb_strength);
            var militancy = getMilitancyText(Q.rb_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }  
      
        if (searchString === 'Stahlhelm' && Q.sh_strength !== undefined) {
            var strength = getSizeText(Q.sh_strength);
            var militancy = getMilitancyText(Q.sh_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }  
      
        if (searchString === 'RFB' && Q.rfb_strength !== undefined) {
            var strength = getSizeText(Q.rfb_strength);
            var militancy = getMilitancyText(Q.rfb_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
                
        if (searchString === 'SA' && Q.sa_strength !== undefined) {
            var strength = getSizeText(Q.sa_strength);
            var militancy = getMilitancyText(Q.sa_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
                           
        if (searchString === 'Freikorps' && Q.freikorps_strength !== undefined) {
            var strength = getSizeText(Q.freikorps_strength);
            var militancy = getMilitancyText(Q.freikorps_militancy);
            return baseTooltip.explanationText + '<br>Strength: ' + strength + '<br>Militarization: ' + militancy;
        }
                    
       if (searchString === 'DDP'){
            return baseTooltip.explanationText 
        }
          
       if (searchString === 'Sammlung'){
            var strenghtText = getStrenghtText(Q.sammlung_strength);
            var dissentText = getDissentText(Q.sammlung_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }

        if (searchString === 'Linksliberale'){
            var strenghtText = getStrenghtText(Q.linksliberale_strength);
            var dissentText = getDissentText(Q.linksliberale_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }
      
        if (searchString === 'Pazifisten'){
            var strenghtText = getStrenghtText(Q.pazifisten_strength);
            var dissentText = getDissentText(Q.pazifisten_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }
      
        if (searchString === 'Nationalliberale'){
            var strenghtText = getStrenghtText(Q.nationalliberale_strength);
            var dissentText = getDissentText(Q.nationalliberale_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }
            
        if (searchString === 'Republikschützer'){
            var strenghtText = getStrenghtText(Q.republikschutzer_strength);
            var dissentText = getDissentText(Q.republikschutzer_dissent);
            return baseTooltip.explanationText + '<br>Strength: ' + strenghtText + '<br>Dissent: ' + dissentText;
        }
      
       if (searchString === 'DVP' && Q.dvp_relation !== undefined) {
            var relationText = getRelationshipText(Q.dvp_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
          
       if (searchString === 'Z' && Q.z_relation !== undefined) {
            var relationText = getRelationshipText(Q.z_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
            
       if (searchString === 'BVP' && Q.z_relation !== undefined) {
            var relationText = getRelationshipText(Q.z_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
              
       if (searchString === 'DNVP' && Q.dnvp_relation !== undefined) {
            var relationText = getRelationshipText(Q.dnvp_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
                
       if (searchString === 'NSDAP' && Q.nsdap_relation !== undefined) {
            var relationText = getRelationshipText(Q.nsdap_relation) 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
                  
       if (searchString === 'Others'){
            return baseTooltip.explanationText 
        }
      
    return baseTooltip.explanationText;

    }

    window.getDynamicTooltipContent = getDynamicTooltipContent;

    function applyWholesome(str) {
        const allWords = new Set([
            ...tooltipList.map(t => t.searchString),
            ...colourList.map(c => c.word)
        ]);

        // Escape special regex characters in the words
        const escapedWords = [...allWords].map(word => 
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );

        //fix for longer words not showing up if they contained smaller entry words inside of them
        escapedWords.sort((a, b) => b.length - a.length);

        const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');

        return str.replace(/(<(?:span|strong)[^>]*>.*?<\/(?:span|strong)>|<[^>]+>|[^<]+)/g, (segment) => {
            if (segment.startsWith('<')) return segment;

            return segment.replace(regex, (match) => {
                const tooltip = tooltipList.find(t => t.searchString === match);
                const colour = colourList.find(c => c.word === match);

                let style = colour ? colour.style : '';
                let innerText = match;

                if (colour && colour.img) {
                    innerText = `<img src="${colour.img}" class="p_icon" alt="">${innerText}`;
                }

                if (tooltip) {
                    var tooltipContent = getDynamicTooltipContent(match, tooltip);
                    return `<span class='mytooltip' style='${style}'>${innerText}<span class='mytooltiptext'>${tooltipContent}</span></span>`;
                } else if (colour) {
                    return `<span style='${style}'>${innerText}</span>`;
                }

                return match;
            });
        });
    }

  // populates the checkboxes in the options view
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var disable_audio = window.dendryUI.disable_audio;
    var show_portraits = window.dendryUI.show_portraits;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (disable_audio) {
        $('#audio_no')[0].checked = true;
    } else {
        $('#audio_yes')[0].checked = true;
    }
    if (show_portraits) {
        $('#images_yes')[0].checked = true;
    } else {
        $('#images_no')[0].checked = true;
    }
    if (window.dendryUI.dark_mode) {
        $('#dark_mode')[0].checked = true;
    } else {
        $('#light_mode')[0].checked = true;
    }
  };

  // This function allows you to do something in response to signals.
  window.handleSignal = function(signal, event, scene_id) {
  };
  
  // This function runs on a new page. Right now, this auto-saves.
  window.onNewPage = function() {
    var scene = window.dendryUI.dendryEngine.state.sceneId;
    if (scene != 'root' && !window.justLoaded) {
        window.dendryUI.autosave();
    }
    if (window.justLoaded) {
        window.justLoaded = false;
    }
  };

 // TODO: have some code for tabbed sidebar browsing.
  window.updateSidebar = function() {
      $('#qualities').empty();
      var scene = dendryUI.game.scenes[window.statusTab];
      dendryUI.dendryEngine._runActions(scene.onArrival);
      var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
      $('#qualities').append(dendryUI.contentToHTML.convert(displayContent));
  };

  // Populates the right-hand "news"/leadership sidebar.
  // Expects a scene with id "news" in your .dry source whose content
  // holds whatever flavor text/leader info you want shown there.
  // Update that scene's content via @set actions as the game state changes.
  window.updateNewsSidebar = function() {
      $('#news').empty();
      var scene = dendryUI.game.scenes[window.newsTab || 'news'];
      if (!scene) {
          // No "news" scene defined yet in the source - nothing to show.
          return;
      }
      if (scene.onArrival) {
          dendryUI.dendryEngine._runActions(scene.onArrival);
      }
      var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
      $('#news').append(dendryUI.contentToHTML.convert(displayContent));
  };

  window.changeTab = function(newTab, tabId) {
      if (tabId == 'poll_tab' && dendryUI.dendryEngine.state.qualities.historical_mode) {
          window.alert('Polls are not available in historical mode.');
          return;
      }
      var tabButton = document.getElementById(tabId);
      var tabButtons = document.getElementsByClassName('tab_button');
      for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      window.statusTab = newTab;
      window.updateSidebar();
      window.updateNewsSidebar();
  };

  window.onDisplayContent = function() {
      window.updateSidebar();
      window.updateNewsSidebar();
  };

  /*
   * This function copied from the code for Infinite Space Battle Simulator
   *
   * quality - a number between max and min
   * qualityName - the name of the quality
   * max and min - numbers
   * colors - if true/1, will use some color scheme - green to yellow to red for high to low
   * */
  window.generateBar = function(quality, qualityName, max, min, colors) {
      var bar = document.createElement('div');
      bar.className = 'bar';
      var value = document.createElement('div');
      value.className = 'barValue';
      var width = (quality - min)/(max - min);
      if (width > 1) {
          width = 1;
      } else if (width < 0) {
          width = 0;
      }
      value.style.width = Math.round(width*100) + '%';
      if (colors) {
          value.style.backgroundColor = window.probToColor(width*100);
      }
      bar.textContent = qualityName + ': ' + quality;
      if (colors) {
          bar.textContent += '/' + max;
      }
      bar.appendChild(value);
      return bar;
  };


  window.justLoaded = true;
  window.statusTab = "status";
  window.newsTab = "news";
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.increaseFontSize = function() {
        window.dendryUI.font_size += 0.1;
        var fs = window.dendryUI.font_size;
        var sidebar_fs = fs - 0.1;
        document.getElementById("content").setAttribute("style", "font-size: " + fs + "em;");
        document.getElementById("stats_sidebar").setAttribute("style", "font-size: " + sidebar_fs + "em;");
        document.getElementById('font_size_value').textContent = window.dendryUI.font_size.toFixed(1) + "em";
        window.dendryUI.saveSettings();
  }

  window.decreaseFontSize = function() {
        window.dendryUI.font_size -= 0.1;
        var fs = window.dendryUI.font_size;
        var sidebar_fs = fs - 0.1;
        document.getElementById("content").setAttribute("style", "font-size: " + fs + "em;");
        document.getElementById("stats_sidebar").setAttribute("style", "font-size: " + sidebar_fs + "em;");
        document.getElementById('font_size_value').textContent = window.dendryUI.font_size.toFixed(1) + "em";
        window.dendryUI.saveSettings();
  }
    var q = window.dendryUI && window.dendryUI.dendryEngine
        ? window.dendryUI.dendryEngine.state.qualities
        : null;
    if (!q) return;

    var factionClass = {
        1: 'empowered-authcon',
        2: 'empowered-christsoc',
        3: 'empowered-volkskons',
        4: 'empowered-volkisch'
    }[q.empowered_faction] || 'empowered-authcon';
    if (!document.body.classList.contains(factionClass)) {
        document.body.className = document.body.className
            .replace(/\bempowered-\w+\b/g, '')
            .trim();
        document.body.classList.add(factionClass);
    }

    var advisorMap = {
    'westarp':           ['authcon',    'leader'],
    'hugenberg':         ['authcon',    'leader'],
    'thyssen':           ['authcon',    'deputy', 'right'],
    'schmidt_hannover':  ['authcon',    'deputy', 'left'],
    'hugenberg_volkisch': ['volkisch',   'deputy'],
    'quaatz':            ['authcon',    'deputy', 'right'],
    'lambach':           ['christsoc',  'leader'],
    'treviranus':        ['volkskons',  'leader'],
    'lejeune_jung':      ['volkskons',  'leader'],
    'lejeune_jung_deputy': ['volkskons', 'deputy', 'right'],
    'gayl':              ['volkskons',  'leader'],
    'hartwig':           ['christsoc',  'deputy', 'right'],
    'hartwig_leader':    ['christsoc',  'leader'],
    'annegrete':         ['volkisch',   'leader'],
    'hugenberg_authcon': ['authcon', 'deputy', 'right'],
    'hergt':             ['authcon',    'leader'],
    'seldte':            ['authcon',    'leader'],
    'behm':              ['christsoc',  'leader'],
    'ullmann':           ['volkskons',  'leader'],
    'class':             ['volkisch',   'leader'],
    'bang':              ['volkisch',   'leader'],

    };

    document.querySelectorAll('a.card[card-id]').forEach(function(card) {
    var id = card.getAttribute('card-id');
    var entry = advisorMap[id];
    if (entry) {
        if (card.getAttribute('data-faction') !== entry[0]) {
            card.setAttribute('data-faction', entry[0]);
        }
        if (card.getAttribute('data-role') !== entry[1]) {
            card.setAttribute('data-role', entry[1]);
        }
        if (entry[2] && card.getAttribute('data-deputy-side') !== entry[2]) {
            card.setAttribute('data-deputy-side', entry[2]);
        }
        if (card.parentElement && card.parentElement.tagName === 'LI') {
            if (card.parentElement.getAttribute('data-faction') !== entry[0]) {
                card.parentElement.setAttribute('data-faction', entry[0]);
            }
            if (card.parentElement.getAttribute('data-role') !== entry[1]) {
                card.parentElement.setAttribute('data-role', entry[1]);
            }
            if (entry[2] && card.parentElement.getAttribute('data-deputy-side') !== entry[2]) {
                card.parentElement.setAttribute('data-deputy-side', entry[2]);
            }
        }
    }

    var switcher = document.querySelector('ul.pinned-cards li.pinned-card:has(a.card[card-id="advisor_switcher"])');
var decksUl = document.querySelector('ul.decks');
if (switcher && decksUl && switcher.parentElement !== decksUl) {
    switcher.className = 'deck';
    decksUl.appendChild(switcher);
}
  
  window.onload = function() {
    window.dendryUI.loadSettings({show_portraits: false});
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    if (window.dendryUI.font_size != 1.1) {
        var fs = window.dendryUI.font_size;
        var sidebar_fs = fs - 0.1;
        document.getElementById("content").setAttribute("style", "font-size: " + fs + "em;");
        document.getElementById("stats_sidebar").setAttribute("style", "font-size: " + sidebar_fs + "em;");
    }
    document.getElementById('font_size_value').textContent = window.dendryUI.font_size.toFixed(1) + "em";
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
    }
  window.justLoaded = true;
  window.statusTab = "status";
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");
window._decorateChoices = function() {
    (function() {
        var state = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state;
        var sid = state && state.sceneId;
        if (sid && sid !== window._lastSeenSceneId) {
            window._lastSeenSceneId = sid;
            document.body.classList.remove('news-open');
            document.body.classList.remove('advisors-open');
        }
          document.querySelectorAll('ul.pinned-cards a.card[data-role="deputy"]').forEach(function(a) {
        if (!a.hasAttribute('data-click-disabled')) {
            a.setAttribute('data-click-disabled', '1');
            a.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
    });
    ;

    document.querySelectorAll('ul.pinned-cards').forEach(function(ul) {
        var empFactionMatch = document.body.className.match(/empowered-(\w+)/);
        if (!empFactionMatch) return;
        var empFaction = empFactionMatch[1];

        var deputyLi = ul.querySelector('li.pinned-card[data-faction="' + empFaction + '"][data-role="deputy"]');
        var leaderLi = ul.querySelector('li.pinned-card[data-faction="' + empFaction + '"][data-role="leader"]');
        var anchorLi = deputyLi || leaderLi;
        if (!anchorLi) return;

        var nextEl = anchorLi.nextElementSibling;
        if (nextEl && nextEl.classList && nextEl.classList.contains('advisor-row-break')) {
            ul.querySelectorAll('li.advisor-row-break').forEach(function(br) {
                if (br !== nextEl) br.remove();
            });
            return;
        }

        ul.querySelectorAll('li.advisor-row-break').forEach(function(br) {
            br.remove();
        });

        var br = document.createElement('li');
        br.className = 'advisor-row-break';
        anchorLi.parentNode.insertBefore(br, anchorLi.nextSibling);
    });
    var deputyTooltips = {
        'thyssen': {
            body: 'A baron of the steel and iron industry in Germany and a board member of the Reichsbank, Thyssen provides financial support to the <b style="color:var(--dnvp-color);">DNVP</b> and discreetly contributes to the Reichswehr\'s rearmament.<br><br><i>+1 party resource annually</i><br><i>War industry passively increases</i>'
        },
        'lejeune_jung_deputy': {
            body: `Paul Lejeune-Jung is a <span style="color:#000000;">Catholic</span> member of the <b style="color:var(--dnvp-color);">DNVP</b> and economics expert from Silesia, who shares the <span style="color:#90D5FF;">People's Conservatives'</span> support of constructive participation in the Republic.<br><br><i>Actions targeting Catholic <b style="color:var(--dnvp-color);">DNVP</b> support are strengthened.</i><br><i>The Lautenbach Plan is easier to adopt.</i><br><i>Passive boost to <b style="color:var(--z-color);">Zentrum</b> relations.</i>`
        },
            'schmidt_hannover': {
    body: `Otto Schmidt-Hannover is Hugenberg's closest ally and most trusted advisor. As a member of the <b><span style="color:#3E88B3;">Stahlhelm</span></b>, he has deep ties to the <i>Reichswehr</i> and anti-<span style="color:var(--kpd-color);">Communist</span> groups, and ultimately seeks to advance the goal of an authoritarian German government.<br><br><i>Permanent increase in <b><span style="color:#3E88B3;">Stahlhelm</span></b> strength.</i><br><i>Actions targeting <span style="color:var(--kpd-color);">Communist</span> support and militias will be more effective.</i><br><i>The Corporatist Plan will be more effective.</i>`
},
'hartwig': {
    body: `Emil Hartwig is a longtime member of the <b><span style="color:var(--dnvp-color);">DNVP</span></b> and a trade unionist who has been involved in various <span style="color:#DAB1DA;">Christian unions</span> and blue-collar associations throughout his career.<br><br><i>Actions undertaken by the Labor Ministry will be more effective.</i><br><i>Grassroots donations have been permanently increased!</i><br><i>Campaigning among workers is now free.</i><br><i>The labor bloc loses support at a third of the normal rate.</i>`
},
    'quaatz': {
    body: `Reinhold Quaatz was a director of military transport during the Great War and now represents one of Hugenberg's closest associates. As an industrialist and financier, he also brings financial backing to the movement, and supports cooperation with the <b><span style="color:#954B00;">NSDAP</span></b>.<br><br><i>Permanent increase in <b><span style="color:#954B00;">NSDAP</span></b> relations.</i><br><i>+1 party resource per year.</i><br><i><b><span style="color:#06402B;">VÃ¶lkisch</span></b> dissent ticks down to a low floor.</i>`
},
'hugenberg_volkisch': {
    body: `Alfred Hugenberg, well, is Alfred Hugenberg. Although he is not technically the party chairman, he wields significant power over the <b><span style="color:var(--dnvp-color);">DNVP</span></b></b>'s affairs, and he is able to mobilize his vast media empire in order to serve the party.<br><br><i>+3 resources per year.</i><br><i>Relations with the <b style="color:var(--dvp-color);">DVP</b> and <b style="color:var(--z-color);">Zentrum</b> steadily deteriorate.</i>`
},
'hugenberg_authcon': {
    body: `Alfred Hugenberg, well, is Alfred Hugenberg. Although he is not technically the party chairman, he wields significant power over the <b><span style="color:var(--dnvp-color);">DNVP</span></b></b>'s affairs, and he is able to mobilize his vast media empire in order to serve the party.<br><br><i>+3 resources per year.</i><br><i>Relations with the <b style="color:var(--dvp-color);">DVP</b> and <b style="color:var(--z-color);">Zentrum</b> steadily deteriorate.</i>`
},
'advisor_switcher': {
        body: `We can manually change our advisors once every twenty months, or by <b>event</b>.`
    }
    };

    document.querySelectorAll('ul.pinned-cards a.card[card-id]').forEach(function(card) {
        var id = card.getAttribute('card-id');
        var tooltipData = deputyTooltips[id];
        if (!tooltipData) return;

        if (card.querySelector('.card-passive-tip')) return;
        card.removeAttribute('title');

        var tip = document.createElement('span');
        tip.className = 'card-passive-tip';
        tip.innerHTML = tooltipData.body;
        card.appendChild(tip);
    });
    (function() {
        var swCard = document.querySelector('a.card[card-id="advisor_switcher"]');
        if (!swCard) return;
        if (swCard.querySelector('.card-passive-tip')) return;
        if (!deputyTooltips['advisor_switcher']) return;
        swCard.removeAttribute('title');
        var tip = document.createElement('span');
        tip.className = 'card-passive-tip';
        tip.innerHTML = deputyTooltips['advisor_switcher'].body;
        swCard.appendChild(tip);
    })();
    (function() {
        var pinnedHeaders = document.querySelectorAll('p, div, h1, h2');
        var target = null;
        pinnedHeaders.forEach(function(el) {
            if (!target && el.textContent && el.textContent.trim().startsWith('Advisors')) {
                var next = el.nextElementSibling;
                if (next && next.classList && next.classList.contains('pinned-cards')) {
                    target = el;
                }
            }
        });
        if (!target) return;

        var COOLDOWN_MONTHS = 12;
        var factions = [
            { key: 'volkskons', color: '#90D5FF', invert: true,  bg: '#6a6a6a', timer: q.volkskons_action_timer || 0 },
            { key: 'christsoc', color: '#DAB1DA', invert: true,  bg: '#919191', timer: q.christsoc_action_timer || 0 },
            { key: 'authcon',   color: '#000435', invert: false, bg: '#b9b9b9', timer: q.authcon_action_timer   || 0 },
            { key: 'volkisch',  color: '#06402B', invert: false, bg: '#e0e0e0', timer: q.volkisch_action_timer  || 0 }
        ];
        if (q.left_split === 1) {
            factions = factions.filter(function(f) { return f.key !== 'volkskons'; });
        }
        if (q.csvd_formed === 1) {
            factions = factions.filter(function(f) { return f.key !== 'christsoc'; });
        }
        var segmentsHtml = '';
        var labelsHtml = '';
        factions.forEach(function(f, idx) {
            var filledPct = Math.round(((COOLDOWN_MONTHS - f.timer) / COOLDOWN_MONTHS) * 100);
            var filled = f.timer === 0;
            var useWhite = f.invert ? !filled : filled;
            var divColor = useWhite ? '#fff' : '#000';
            var nextF = factions[idx + 1];
            if (nextF && f.invert && !nextF.invert) divColor = '#000';
            var segStyle = '--divider-color: ' + divColor + '; --divider-width: 2px; background: ' + f.bg + ';';
            segmentsHtml += '<div class="advisor-timer-segment' + (f.invert ? ' invert' : '') + '" style="' + segStyle + '">'
                          +   '<div class="advisor-timer-fill" style="width:' + filledPct + '%; --w:' + Math.max(filledPct, 1) + '; background:' + f.color + ';"></div>'
                          + '</div>';
            labelsHtml += '<div class="advisor-timer-label">'
                        +   (f.timer === 0 ? '<span class="advisor-ready">Available</span>' : '')
                        + '</div>';
        });

        var html = '<div class="advisor-header">Advisors</div>'
                 + '<div class="advisor-timer-conjoined">' + segmentsHtml + '</div>'
                 + '<div class="advisor-timer-labels">' + labelsHtml + '</div>';

        if (target.innerHTML !== html) {
            target.innerHTML = html;
        }
        target.classList.add('advisor-panel-head');

        var pinnedUl = target.nextElementSibling;
        if (pinnedUl && pinnedUl.classList && pinnedUl.classList.contains('pinned-cards')
            && (!target.parentElement || !target.parentElement.classList.contains('advisor-panel-wrap'))) {
            var wrap = document.createElement('div');
            wrap.className = 'advisor-panel-wrap';
            target.parentNode.insertBefore(wrap, target);
            wrap.appendChild(target);
            wrap.appendChild(pinnedUl);
        }

    })();

    (function() {
        var dotAdv = document.getElementById('advisors-fab-dot');
        if (!dotAdv) return;
        var timerList = [
            { key: 'volkskons', t: q.volkskons_action_timer || 0 },
            { key: 'christsoc', t: q.christsoc_action_timer || 0 },
            { key: 'authcon',   t: q.authcon_action_timer   || 0 },
            { key: 'volkisch',  t: q.volkisch_action_timer  || 0 }
        ];
        if (q.left_split === 1) timerList = timerList.filter(function(x) { return x.key !== 'volkskons'; });
        if (q.csvd_formed === 1) timerList = timerList.filter(function(x) { return x.key !== 'christsoc'; });
        var anyReady = timerList.some(function(x) { return x.t === 0; });
        dotAdv.style.display = anyReady ? 'block' : 'none';
    })();

    var switcher = document.querySelector('ul.pinned-cards li.pinned-card:has(a.card[card-id="advisor_switcher"])');
    var decksUl = document.querySelector('ul.decks');
    if (switcher && decksUl && switcher.parentElement !== decksUl) {
        switcher.className = 'deck';
        decksUl.appendChild(switcher);
    }
    if (window._injectExecutiveCard) window._injectExecutiveCard();
    var cabDeck = document.querySelector('ul.decks a.card[card-id="main.cabinet"]')
               || document.querySelector('ul.decks a.card[card-id="cabinet"]');
    if (cabDeck && !cabDeck._cabDirectBound) {
        cabDeck._cabDirectBound = true;
        cabDeck.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (window.dendryUI && window.dendryUI.dendryEngine) {
                window.dendryUI.dendryEngine.goToScene('cabinet_decisions');
            }
        }, true);
    }
    document.querySelectorAll('ul.pinned-cards, ul.choices, ul.decks').forEach(function(ul) {
        ul.classList.add('decorated');
    });
};

function initDecorator() {
    var contentEl = document.getElementById('content');
    console.log('[decorator init] contentEl:', contentEl);
    if (!contentEl) {
        setTimeout(initDecorator, 100);
        return;
    }
    var decoObserver = new MutationObserver(function() {
        decoObserver.disconnect();
        try {
            window._decorateChoices();
        } catch (e) {
            console.error('[decorator error]', e);
        }
        if (window._applyDvpColor) window._applyDvpColor();
        if (window._applyZColor) window._applyZColor();        if (window._applyDnvpColor) window._applyDnvpColor();        if (window._applyDdpColor) window._applyDdpColor();
        decoObserver.observe(contentEl, { childList: true, subtree: true });
    });
    decoObserver.observe(contentEl, { childList: true, subtree: true });
    console.log('[decorator init] observer attached');
    window._decorateChoices();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDecorator);
} else {
    initDecorator();
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
    if (!window.dendryUI || !window.dendryUI.dendryEngine) return;
    var kb = window._kbSettings || (window._kbLoad && window._kbLoad());
    if (!kb || !kb.enabled) return;
    var engine = window.dendryUI.dendryEngine;
    var sceneId = engine.state && engine.state.sceneId;

    var skipKey = (kb.skip || 'S');
    var pressedSkip = (e.key && e.key.toUpperCase()) === skipKey;
    if (pressedSkip) {
        var choices = document.querySelectorAll('ul.choices > li');
        var clickable = [];
        var discardLink = null;
        choices.forEach(function(li) {
            if (li.classList.contains('unavailable-card')) return;
            var a = li.querySelector('a');
            if (!a) return;
            clickable.push(a);
            var t = (a.textContent || '').trim().toLowerCase();
            if (t.indexOf('return card to hand') !== -1) discardLink = a;
        });
        if (clickable.length === 1) {
            e.preventDefault();
            clickable[0].click();
            return;
        }
        var onEventsList = sceneId && (sceneId === 'events_choice' || sceneId.indexOf('events_choice') !== -1);
        if (onEventsList && clickable.length > 0) {
            e.preventDefault();
            clickable[0].click();
            return;
        }
        if (discardLink) {
            e.preventDefault();
            discardLink.click();
            return;
        }
    }

    var isHand = (sceneId === 'main' || sceneId === 'main.main_easy' || sceneId === 'main.main_hugenberg'
               || sceneId === 'main_easy' || sceneId === 'main_hugenberg');
    var isExecute = (sceneId === 'execute');
    var isLaender = (sceneId === 'laender_menu');
    if (!isHand && !isExecute && !isLaender) return;
    var k = e.key && e.key.toUpperCase();
    var execKey = (kb.executive || 'E');
    var laenKey = (kb.laender || 'L');
    if (k === execKey) {
        if (isHand) {
            e.preventDefault();
            engine.goToScene('execute');
        } else if (isExecute) {
            e.preventDefault();
            engine.goToScene('root');
        }
    } else if (k === laenKey) {
        if (isHand) {
            var q = engine.state && engine.state.qualities;
            var year = (q && q.year) || 0;
            var month = (q && q.month) || 0;
            if (year > 1928 || (year === 1928 && month >= 3)) {
                e.preventDefault();
                engine.goToScene('laender_menu');
            }
        } else if (isLaender) {
            e.preventDefault();
            engine.goToScene('root');
        }
    }
});
  window.onload = function() {
    window.dendryUI.loadSettings({show_portraits: false});
    try { if (localStorage.getItem('dnvp_dark_mode') === '1') window.dendryUI.dark_mode = true; } catch (e) {}
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    window.pinnedCardsDescription = "Advisor cards - actions are only usable once per 6 months.";
  };

  document.addEventListener('click', function(e) {
      if (e.target && e.target.closest && e.target.closest('.advisor-panel-wrap a')) {
          document.body.classList.remove('advisors-open');
      }
  });

    })();
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.setProperty('--mouse-x', e.clientX + 'px');
        el.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});  
}());
