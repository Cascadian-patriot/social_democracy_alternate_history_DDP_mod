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
  var d0 = window["ideologyTooltipRegistry"] = window["ideologyTooltipRegistry"] || {};
  d0["Reformist Socialism"] = {
    "image": "img/Rose.png",
    "imageWidth": 75,
    "imageHeight": 64,
    "imageAlt": "A red rose, symbol of social democracy",
    "description": "Reformist socialism advocates for a transition to a socialist society gradually through democratic means and existing state institutions, rather than through revolutionary upheaval. It favors operating within the confines of the establishment to tame capitalism, expand welfare, and reduce class inequality."
  };
  d0["Agrarianism"] = {
    "image": "img/agrarianism-wheat.webp",
    "imageAlt": "Emblem of agrarianism",
    "description": "Agrarianism advocates for protecting farmers and landowners through protective tariffs, debt relief, and state support against falling prices and foreign competition. It often carries nationalist, anti-modern, and anti-democratic overtones, romanticizing rural tradition over urban liberalism and socialism, making it a natural ally of right-wing politics."
  };
  d0["Strasserism"] = {
    "image": "img/strasserism.png",
    "imageAlt": "Emblem of strasserism",
    "description": "Strasserism, named after NSDAP leaders Gregor and Otto Strasser, seeks to combine far-right Völkisch nationalism with fervent anti-capitalism. It advocates for a “German Socialism” that would create a one-party dictatorial state, which would go on to restructure German society to its agrarian, pre-industrial roots. Besides these differences, it has many similarities to National Socialism."
  };
  d0["Revolutionary Socialism"] = {
    "image": "img/Untitled-9.png",
    "imageAlt": "Emblem of revolutionary socialism",
    "description": "Revolutionary Socialism advocates for a transition to a socialist society through immediate, violent, and putschist means, rather than reformism and participation in the democratic system. Although some revolutionary socialists advocate for measured electoral participation, the ultimate goal remains violent revolution."
  };
  d0["Catholic Corporatism"] = {
    "image": "img/catholicorp.webp",
    "imageAlt": "Emblem of catholic corporatism",
    "imageWidth": 95,
    "imageHeight": 80,
    "description": "Drawing on various papal social encyclicals, Catholic Corporatism’s vision for society is organized into vocational estates, rather than conflicting classes, rejecting liberal capitalism and socialism both as materialist. Under Stegerwald and the Christian trade unions it has a pro-labor view where employer and employee are to be bound together within a single Christian body, with the state arbitrating between them."
  };
  d0["Federated Monarchism"] = {
    "image": "img/fedmonarchism.png",
    "imageAlt": "Emblem of federated monarchism",
    "imageWidth": 90,
    "imageHeight": 77,
    "description": "Federated Monarchism advocates for a monarchical system, constitutional or otherwise, that would be within the confines of a federal state. Regions within the state would have semi-autonomy, with their own monarchs being heads of state. The former Wilhelmine Empire carried a similar system."
  };
  d0["Bavarian Regionalism"] = {
    "image": "img/bavregion.png",
    "imageAlt": "Emblem of bavarian regionalism",
    "imageWidth": 95,
    "imageHeight": 80,
    "description": "Bavarian Regionalism maintains that the Catholic faith and monarchical traditions of Bavaria constitute an independent identity, distinguishable from German identity. It is federalist and antagonistic towards Prussian centralism, and its adherents seek the strongest possible autonomy for the Free State within the Reich, fighting against unitary efforts and centralization."
  };
  d0["Liberal Agrarianism"] = {
    "image": "img/liberalarg.png",
    "imageAlt": "Emblem of liberal agrarianism",
    "imageWidth": 116,
    "imageHeight": 45,
    "description": "Enclosed by the radical agrarian demands of the left and the stagnation of the junkers, many peasants see their future in the visionary idea of Liberal Agrarianism. The concept created and continuously developed by Karl Hepp is based on cooperation among small-scale farmers, through their organization into agrarian associations, and on pro-agrarian government measures that support agriculture during both economic crisis and stabilisation."
  };
  d0["Liberal Corporatism"] = {
    "image": "img/liberalcorpo.webp",
    "imageAlt": "Emblem of liberal corporatism",
    "description": "Liberal Corporatism promotes the idea that Corporatism and Liberalism are not incompatible. Focusing on the right to property and civic participation, they are in favor of unifying all sectors of Germany in the pursuit of a <i>Volksgemeinschaft</i>."
  };
  d0["Christian Democracy"] = {
    "image": "img/christian-democracy-cross.webp",
    "imageAlt": "Emblem of christian democracy",
    "description": "Christian Democracy advocates for a social and economic synthesis between the teachings of Jesus Christ and modern societal necessities. Socially conservative and economically liberal, Christian Democracy nevertheless encourages national popular engagement in the social system."
  };
  d0["Liberal Conservatism"] = {
    "image": "img/lib1.webp",
    "imageAlt": "Emblem of liberal conservatism",
    "imageWidth": 77,
    "imageHeight": 66,
    "description": "Liberal Conservatism, originating in the Imperial-era Free Conservative Party, incorporates classical liberal economics into Conservatism, pairing Industrialist-oriented fiscal policies, low taxation, and minimal state intervention in the economy with “law and order” paternalism, support for the military, and strengthening patriotic institutions."
  };
  d0["Libertarian Socialism"] = {
    "image": "img/liberalsocialism.webp",
    "imageAlt": "Emblem of libertarian socialism",
    "imageWidth": 82,
    "imageHeight": 69,
    "description": "Libertarian Socialism advocates for an economic synthesis between socialism and capitalism, hoping to reform the capitalist system to foster greater equity between workers and employers through total democratisation and the creation of a ‘democratic people’s state’ where employees also have some control over the means of production."
  };
  d0["Radical Liberalism"] = {
    "image": "img/ddp_2.png",
    "imageAlt": "Emblem of progressive liberalism",
    "description": "Radical Liberalism is a strain of liberalism promoted primarily by trade unionist Anton Erkelenz and the GdAAB, demanding political, economic, and social equality for the working class and society as a whole from a basic democratic conviction close to the ideas of the democrats of 1848. Its adherents remain opposed to Marxism and the rhetoric of class warfare, as they see emancipation as a matter for the individual, who organizes with others, and not the task of a class."
  };
  d0["Classical Liberalism"] = {
    "image": "img/classiclib2.png",
    "imageAlt": "Emblem of classical liberalism",
    "description": "Rooted in the Enlightenment values espoused by Locke and Smith, Classical Liberalism advocates laissez-faire free market economics along with the promotion of individual autonomy and liberty. It is the bedrock of liberalism in general."
  };
  d0["Catholic Republicanism"] = {
    "image": "img/catholicrep.png",
    "imageAlt": "Emblem of catholic republicanism",
    "description": "Catholic Republicanism, while rooted in Catholic social values, advocates for a republican and democratic system of government that combines freedom with the promotion of the Catholic view of human life. Catholic republicans, while conservative in nature, are great defenders of democracy and are opposed to any corruptive threat that may undermine such an order."
  };
  d0["Castle Catholicism"] = {
    "image": "img/castlecatholic.png",
    "imageAlt": "Emblem of castle catholicism",
    "description": "Castle Catholicism advocates for a politically and socially conservative interpretation of Catholicism centered on the defense of Catholic tradition, religious authority and established social institutions. It highlights the importance of the Catholic church, family tradition and a patriarchal hierarchy. It supports private property, and conservative social responsibility and wants to preserve Catholic values against secularism, radicalism and revolutionary movements."
  };
  d0["Conservative Agrarianism"] = {
    "image": "img/consarg.png",
    "imageAlt": "Emblem of conservative agrarianism",
    "imageWidth": 82,
    "imageHeight": 69,
    "description": "Conservative Agrarianism advocates for the preservation of traditional rural traditions, independent farming, and conservative social traditions. It emphasizes private land ownership, family farms, local communities, social stability and traditional values. Skeptical of rapid industrialization and urbanization, it favors policies that protect farmers and maintain the economic and cultural importance of rural communities."
  };
  d0["Civic Liberalism"] = {
    "image": "img/civiclib.png",
    "imageAlt": "Emblem of civic liberalism",
    "description": "Civic Liberalism treats liberty seriously, upholding a constitutional order and civic duty, but having a preference for competent administration over matters of party or class. Even though civic liberals defend the Republic nominally as a legal and constitutional order, its adherents are the most prepared of all the liberals to serve in governments of the right."
  };
  d0["Social Liberalism"] = {
    "image": "img/soclib.png",
    "imageAlt": "Emblem of social liberalism",
    "description": "Social Liberalism accepts an active state in welfare, labour protection and the regulation of monopoly, and strongly maintains the importance of individual freedom fortified by active government. Even though social liberals remain committed to private property and parliamentary government, its adherents are the most prepared of all the liberals to govern alongside Social Democracy."
  };
  d0["Right Communism"] = {
    "image": "img/rightcommie.png",
    "imageAlt": "Emblem of right communism",
    "description": "Right Communism is tied heavily to the Conciliator tendency within the KPD. While remaining Bolsheviks at heart, Right Communists are willing to work with more moderate left-wing tendencies within the political system, typically as a response to the rising strength of shared conservative opponents."
  };
  d0["Right Catholicism"] = {
    "image": "img/rightcatholic.png",
    "imageAlt": "Emblem of right catholicism",
    "description": "Right Catholicism is a product of the nationalistic spirit in Germany, and tends to be more patriotic than most minorities. While still in close alignment with Rome, these Catholics see leftist materialism as the biggest national threat, and are more open to cooperation with the conservative establishment."
  };
  d0["National Liberalism"] = {
    "image": "img/nationalliberal.png",
    "imageAlt": "Emblem of national liberalism",
    "imageWidth": 90,
    "imageHeight": 77,
    "description": "A creation of Bismarck-era politics, National Liberalism combines support for liberal economics and individualist social policy with nationalism and imperialism. Compared to other liberal ideologies, it is more sympathetic to authoritarian rule."
  };
  d0["National Bolshevism"] = {
    "image": "img/natbol.png",
    "imageAlt": "Emblem of national bolshevism",
    "description": "Fully developed during the Great Depression, the ideology of National Bolshevism is a fusion of radical nationalism and communism. It calls for the rejection of liberal democracy and advocates Prussian authoritarianism and a total workers’ mobilization against the decadent West, thereby promoting a geopolitical alliance with the Soviet Union."
  };
  d0["Left Socialism"] = {
    "image": "img/leftsoc.png",
    "imageAlt": "Emblem of left socialism",
    "description": "Caught in the limbo between revolutionary Bolshevism and the more reformist wings of socialism, Left Socialism is upheld by those too radical to be Social Democrats, and too moderate to be Communists. They seek to bridge the gap between the moderate and extreme Left to build worker solidarity and consciousness."
  };
  d0["Authoritarian Nationalism"] = {
    "image": "img/authnat.png",
    "imageAlt": "Emblem of authoritarian nationalism",
    "description": "Unlike the mass-mobilizing Fascist movement, Authoritarian Nationalism promotes a Corporatist economy, conservative social order, and nationalist sentiment in an authoritarian, although depoliticized, government controlled by a small consortium elite, typically the Military, Church, landed elite, and Industrial magnates."
  };
  d0["National Socialism"] = {
    "image": "img/natsocicon.png",
    "imageAlt": "Emblem of National Socialism",
    "description": "Rooted in <i>Völkisch</i> thought, National Socialism opposes liberal democracy and Marxism, viewing them as Jewish elements of society. It is fervently anti-semitic, racist, and views the Germanic peoples as racially superior. National Socialism seeks to establish a totalitarian dictatorship by working through parliamentary means as a Trojan horse of sorts."
  };
  d0["Communism"] = {
    "image": "img/communism-star.webp",
    "imageWidth": 71,
    "imageHeight": 61,
    "imageAlt": "Emblem of communism",
    "description": "Marxism-Leninism is the most prevalent branch of Communism since the October Revolution. It holds that a two-stage communist revolution is needed to replace capitalism. Economically, it believes that the state should own and control the means of production and suppress all forms of opposition to pave the road to a utopian Communist society."
  };
  d0["Judeo-Bolshevism"] = Object["assign"]({}, d0["Communism"], {
    "title": "Communism"
  });
  d0["Conservative Liberalism"] = {
    image: "img/newconslibicon.png",
    imageAlt: "Emblem of conservative liberalism",
    description: "Originating from 18th-century Romanticism and Idealism, and emerging through the Imperial-era National Liberal Party, Conservative Liberalism embraces minimal state intervention in the economy and free trade while balancing individualism with Protestant Christian family values. It is expressively liberal, not democratic, claiming to protect the individual from state intervention."
  };
  d0["Left Liberalism"] = {
    image: "img/ddpideo.png",
    imageAlt: "A dove before the black-red-gold flag",
    description: "Left Liberalism draws on the Enlightenment-era traditions of individual liberty and equality before the law, in combination with the experience of the Revolutions of 1848. Unlike its conservative counterpart, it is democratic as well as liberal, committed to the Republic and the secular state."
  };
  d0["Prussian Socialism"] = {
    image: "img/prussia-2.png",
    imageAlt: "Emblem of Prussian socialism",
    description: "The syncretic concept of Prussian Socialism stems from the avant-garde ideas of Ernst Niekisch, according to which state structures should be fused with the proletariat, which needs a national awakening. Moreover, it idealizes the authoritarian and disciplined traditions of Prussia, regarding this model as an excellent tool for collective and organized social action."
  };
  d0["National Capitalism"] = {
    image: "img/nationalcap.png",
    imageAlt: "Emblem of national capitalism",
    imageWidth: 90,
    imageHeight: 77,
    description: "National Capitalism emphasizes state intervention in a capitalist economy to ensure national sovereignty and supremacy above all else. They reject liberal positions such as free trade whilst advocating for nationalism and a greater role of the state in capitalist society."
  };
  d0["Revolutionary National Socialism"] = {
    image: "img/revnatsoc.png",
    imageAlt: "Emblem of revolutionary national socialism",
    description: "Revolutionary National Socialism seeks to establish a totalitarian state through extraparliamentary means. It is highly racist, anti-semitic, and emphasizes völkism over all. It is staunchly against capitalism and Marxism, seeking a middle-way through Corporatism."
  };
  d0["Progressive Liberalism"] = {
    image: "img/ddp_2.png",
    imageAlt: "Emblem of progressive liberalism",
    description: "Progressive Liberalism is a reformist ideology dedicated to the civil rights and expansion of personal freedoms for the broader German populace. Though they vary on their approaches to class and economics, Progressive Liberals generally seek to balance middle class interests of trade and economic freedom with the concerns of workers, and to unite their struggles through social progressivism."
  };
  d0["Multi-Tendency Marxism"] = {
    image: "img/multitendency2.png",
    description: "Multi-Tendency Marxism is a strongly leftist ideology dedicated to the revolutionary upheaval of German society. Formed through a merger of Communists, radicalised Socialists, and other minor groups, its proponents have abandoned the prospect of any peaceful reform. Instead, they seek inspiration from the Red militancy of Luxemburg and Liebknecht, and are united despite their differences through pure hatred towards the establishment."
  };
  d0["Left Catholicism"] = {
    image: "img/Generic_Christian_Socialism.png",
    imageAlt: "Emblem of left catholicism",
    description: "Left Catholicism draws from Catholic social teaching regarding the poor and oppressed to promote the idea of a more equitable society. Despite not typically being regarded as socialist in their own right, Left Catholics are much more keen on working with the moderate left-wing than most conservatives, and also more amiable towards class politics."
  };
  d0["Political Catholicism"] = {
    image: "img/polcath.webp",
    imageAlt: "Emblem of political catholicism",
    imageWidth: 70,
    imageHeight: 93,
    description: "Political Catholicism is a conservative and deeply devout philosophy espoused by the Clerical faction of Zentrum, as well as other highly religious Catholics. It seeks to expand the rights and freedoms of the semi-discriminated Papist minority, while using positions in government to advance moral and social policy guided by Church teaching. It also tends to be more skeptical of nationalism and class-based politics."
  };
  d0["Corporatism"] = {
    image: "img/corporatism.webp",
    imageAlt: "Emblem of corporatism",
    description: "Corporatism is a unique current of economic thought focusing on high class unity. They argue in favor of an organised system of profession groups who work together to coordinate the economy, primarily for wider nationalist interests. They are also heavily associated with the idea of a <i>Volksgemeinschaft</i>."
  };
  d0["Revisionist Socialism"] = {
    image: "img/revisionistsoc.webp",
    imageAlt: "Emblem of revisionist socialism",
    description: "Rooted in the split within the SPD, Revisionist Socialism is a combination of social democratic ideals and left-wing nationalism. Although it supports most of the socialist principles, it focuses more on nationalist rhetoric as a means of attracting working-class voters disillusioned with mainstream compromises and communist radicalism."
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
            var relationText = getRelationshipText(Q.kpd_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
       if (searchString === 'SPD' && Q.spd_relation !== undefined) {
            var relationText = getRelationshipText(Q.spd_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
    
       if (searchString === 'USPD' && Q.uspd_relation !== undefined) {
            var relationText = getRelationshipText(Q.uspd_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
      
       if (searchString === 'DAP' && Q.dap_relation !== undefined) {
            var relationText = getRelationshipText(Q.dap_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
     
       if (searchString === 'DHP' && Q.dhp_relation !== undefined) {
            var relationText = getRelationshipText(Q.dhp_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
            
       if (searchString === 'WP' && Q.wp_relation !== undefined) {
            var relationText = getRelationshipText(Q.wp_relation); 
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
            return baseTooltip.explanationText;
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
            var relationText = getRelationshipText(Q.dvp_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
          
       if (searchString === 'Z' && Q.z_relation !== undefined) {
            var relationText = getRelationshipText(Q.z_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
            
       if (searchString === 'BVP' && Q.z_relation !== undefined) {
            var relationText = getRelationshipText(Q.z_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
              
       if (searchString === 'DNVP' && Q.dnvp_relation !== undefined) {
            var relationText = getRelationshipText(Q.dnvp_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
                
       if (searchString === 'NSDAP' && Q.nsdap_relation !== undefined) {
            var relationText = getRelationshipText(Q.nsdap_relation); 
            return baseTooltip.explanationText + '<br>Relation: ' + relationText;
        }
                  
       if (searchString === 'Others'){
            return baseTooltip.explanationText; 
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
      if (!scene) {
          return;
      }
      if (scene.onArrival) {
          dendryUI.dendryEngine._runActions(scene.onArrival);
      }
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
      for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      window.statusTab = newTab;
      window.updateSidebar();
      window.updateNewsSidebar();
  };

  function ensureExecutiveCard() {
      var handUl = document.querySelector('ul.hand');
      if (!handUl) return;

      if (handUl.querySelector('li.executive-fixed')) {
          handUl.classList.add('has-executive');
          return;
      }

      var li = document.createElement('li');
      li.className = 'card-in-hand executive-fixed';

      var a = document.createElement('a');
      a.className = 'card';
      a.setAttribute('href', '#');
      a.setAttribute('card-id', 'executive');
      a.setAttribute('title', 'Executive');

      var img = document.createElement('img');
      img.className = 'card-img';
      img.src = 'img/1920s_Reichstag.webp';
      img.style.filter = 'grayscale(100%)';
      a.appendChild(img);

      var caption = document.createElement('span');
      caption.className = 'card-caption';
      caption.textContent = 'Executive';

      li.appendChild(a);
      li.appendChild(caption);
      handUl.appendChild(li);
      handUl.classList.add('has-executive');

      a.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (window.dendryUI && window.dendryUI.dendryEngine) {
              window.dendryUI.dendryEngine.goToScene('execute');
          }
      });
  }

  function watchHandForExecutiveCard() {
      var handUl = document.querySelector('ul.hand');
      if (!handUl || handUl.dataset.executiveObserverAttached === 'true') return;

      handUl.dataset.executiveObserverAttached = 'true';

      var observer = new MutationObserver(function() {
          if (!document.querySelector('ul.hand li.executive-fixed')) {
              setTimeout(ensureExecutiveCard, 0);
          }
      });

      observer.observe(handUl, {
          childList: true,
          subtree: true
      });
  }

  window.ensureExecutiveCard = ensureExecutiveCard;
  window.watchHandForExecutiveCard = watchHandForExecutiveCard;

  // Consolidated onDisplayContent function
  window.onDisplayContent = function() {
      window.updateSidebar();
      window.updateNewsSidebar();
      // Re-inject the executive card and bind advisor switcher
      setTimeout(function() {
          ensureExecutiveCard();
          watchHandForExecutiveCard();
          window.bindAdvisorSwitcherCard();
      }, 50);
  };

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
    
    setTimeout(function() {
        ensureExecutiveCard();  // Create once
        watchHandForExecutiveCard();  // Set up observer to keep it if it gets removed
        window.bindAdvisorSwitcherCard();
    }, 500);
};

  function bindAdvisorSwitcherCard() {
      var switcherCard = document.querySelector('a.card[card-id="advisor_switcher"]');
      if (!switcherCard || switcherCard.dataset.clickAttached === 'true') {
          return;
      }
      switcherCard.dataset.clickAttached = 'true';
      switcherCard.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (window.dendryUI && window.dendryUI.dendryEngine) {
              window.dendryUI.dendryEngine.goToScene('advisor_switcher');
          }
      });
  }

  window.bindAdvisorSwitcherCard = bindAdvisorSwitcherCard;

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
  };

  window.decreaseFontSize = function() {
        window.dendryUI.font_size -= 0.1;
        var fs = window.dendryUI.font_size;
        var sidebar_fs = fs - 0.1;
        document.getElementById("content").setAttribute("style", "font-size: " + fs + "em;");
        document.getElementById("stats_sidebar").setAttribute("style", "font-size: " + sidebar_fs + "em;");
        document.getElementById('font_size_value').textContent = window.dendryUI.font_size.toFixed(1) + "em";
        window.dendryUI.saveSettings();
  };

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

  document.addEventListener('mousemove', function(e) {
      document.querySelectorAll('.mytooltiptext').forEach(function(el) {
          el.style.setProperty('--mouse-x', e.clientX + 'px');
          el.style.setProperty('--mouse-y', e.clientY + 'px');
      });
  });
}());
