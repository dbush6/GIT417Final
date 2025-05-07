"use strict";

/* DARK MODE */

  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

/* ABOUT */

/* PRODUCTS */

const teamData = {
  "Arizona Diamondbacks": {
    image: "images/MLBlogos/ArizonaDiamondbacks.png",
    description: "Show your Arizona pride with this Diamondbacks sticker!"
  },
  "Atlanta Braves": {
    image: "images/MLBlogos/AtlantaBraves.png",
    description: "Show your Atlanta pride with this Braves sticker!"
  },
  "Baltimore Orioles": {
    image: "images/MLBlogos/BaltimoreOrioles.png",
    description: "Show your Baltimore pride with this Orioles sticker!"
  },
  "Boston Red Sox": {
    image: "images/MLBlogos/BostonRedSox.png",
    description: "Show your Boston pride with this Red Sox sticker!"
  },
  "Chicago Cubs": {
    image: "images/MLBlogos/ChicagoCubs.png",
    description: "Show your Chicago pride with this Cubs sticker!"
  },
  "Chicago White Sox": {
    image: "images/MLBlogos/ChicagoWhiteSox.png",
    description: "Show your Chicago pride with this White Sox sticker!"
  },
  "Cincinnati Reds": {
    image: "images/MLBlogos/CincinnatiReds.png",
    description: "Show your Cincinnati pride with this Reds sticker!"
  },
  "Cleveland Guardians": {
    image: "images/MLBlogos/ClevelandGuardians.png",
    description: "Show your Cleveland pride with this Guardians sticker!"
  },
  "Colorado Rockies": {
    image: "images/MLBlogos/ColoradoRockies.png",
    description: "Show your Colorado pride with this Rockies sticker!"
  },
  "Detroit Tigers": {
    image: "images/MLBlogos/DetroitTigers.png",
    description: "Show your Detroit pride with this Tigers sticker!"
  },
  "Houston Astros": {
    image: "images/MLBlogos/HoustonAstros.png",
    description: "Show your Houston pride with this Astros sticker!"
  },
  "Kansas City Royals": {
    image: "images/MLBlogos/KansasCityRoyals.png",
    description: "Show your Kansas City pride with this Royals sticker!"
  },
  "Las Vegas Athletics": {
    image: "images/MLBlogos/LasVegasAthletics.png",
    description: "Show your Las Vegas pride with this Athletics sticker!"
  },
  "Los Angeles Angels": {
    image: "images/MLBlogos/LosAngelesAngels.png",
    description: "Show your Los Angeles pride with this Angels sticker!"
  },
  "Los Angeles Dodgers": {
    image: "images/MLBlogos/LosAngelesDodgers.png",
    description: "Show your Los Angeles pride with this sleek Diamondbacks sticker!"
  },
  "Miami Marlins": {
    image: "images/MLBlogos/MiamiMarlins.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "Milwaukee Brewers": {
    image: "images/MLBlogos/MilwaukeeBrewers.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "Minnesota Twins": {
    image: "images/MLBlogos/MinnesotaTwins.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "New York Mets": {
    image: "images/MLBlogos/NewYorkMets.png",
    description: "Show your New York pride with this Mets sticker!"
  },
  "New York Yankees": {
    image: "images/MLBlogos/NewYorkYankees.png",
    description: "Show your New York pride with this Yankees sticker!"
  },
  "Philadelphia Phillies": {
    image: "images/MLBlogos/PhiladelphiaPhillies.png",
    description: "Show your Philadelphis pride with this Phillies sticker!"
  },
  "Pittsburgh Pirates": {
    image: "images/MLBlogos/PittsburghPirates.png",
    description: "Show your Pittsburgh pride with this Pirates sticker!"
  },
  "San Diego Padres": {
    image: "images/MLBlogos/SanDiegoPadres.png",
    description: "Show your San Diego pride with this Padres sticker!"
  },
  "San Francisco Giants": {
    image: "images/MLBlogos/SanFranciscoGiants.png",
    description: "Show your San Francisco pride with this Giants sticker!"
  },
  "Seattle Mariners": {
    image: "images/MLBlogos/SeattleMariners.png",
    description: "Show your Seattle pride with this Mariners sticker!"
  },
  "St. Louis Cardinals": {
    image: "images/MLBlogos/St.LouisCardinals.png",
    description: "Show your St. Louis pride with this Cardinals sticker!"
  },
  "Tampa Bay Rays": {
    image: "images/MLBlogos/TampaBayRays.png",
    description: "Show your Tampa Bay pride with this Rays sticker!"
  },
  "Texas Rangers": {
    image: "images/MLBlogos/TexasRangers.png",
    description: "Show your Texas pride with this Rangers sticker!"
  },
  "Toronto Blue Jays": {
    image: "images/MLBlogos/TorontoBlueJays.png",
    description: "Show your Toronto pride with this Blue Jays sticker!"
  },
  "Washington Nationals": {
    image: "images/MLBlogos/WashingtonNationals.png",
    description: "Show your Washington pride with this Nationals sticker!"
  },
  "Atlanta Hawks": {
    image: "images/NBAlogos/AtlantaHawks.png",
    description: "Show your Atlanta pride with this Hawks sticker!"
  },
  "Boston Celtics": {
    image: "images/NBAlogos/BostonCeltics.png",
    description: "Show your Boston pride with this Celtics sticker!"
  },
  "Brooklyn Nets": {
    image: "images/NBAlogos/BrooklynNets.png",
    description: "Show your Brooklyn pride with this Nets sticker!"
  },
  "Charlotte Hornets": {
    image: "images/NBAlogos/CharlotteHornets.png",
    description: "Show your Charlotte pride with this Hornets sticker!"
  },
  "Chicago Bulls": {
    image: "images/NBAlogos/ChicagoBulls.png",
    description: "Show your CHicago pride with this Bulls sticker!"
  },
  "Cleveland Cavaliers": {
    image: "images/NBAlogos/ClevelandCavaliers.png",
    description: "Show your Cleveland pride with this Cavaliers sticker!"
  },
  "Dallas Mavericks": {
    image: "images/NBAlogos/DallasMavericks.png",
    description: "Show your Dallas pride with this sleek Mavericks sticker!"
  },
  "Denver Nuggets": {
    image: "images/NBAlogos/DenverNuggets.png",
    description: "Show your Denver pride with this Nuggets sticker!"
  },
  "Detroit Pistons": {
    image: "images/NBAlogos/DetroitPistons.png",
    description: "Show your Detroit pride with this Pistons sticker!"
  },
  "Golden State Warriors": {
    image: "images/NBAlogos/GoldenStateWarriors.png",
    description: "Show your Golden State pride with this Warriors sticker!"
  },
  "Houston Rockets": {
    image: "images/NBAlogos/HoustonRockets.png",
    description: "Show your Houston pride with this Rockets sticker!"
  },
  "Indiana Pacers": {
    image: "images/NBAlogos/IndianaPacers.png",
    description: "Show your Indiana pride with this Pacers sticker!"
  },
  "Los Angeles Clippers": {
    image: "images/NBAlogos/LosAngelesClippers.png",
    description: "Show your Los Angeles pride with this Clippers sticker!"
  },
  "Los Angeles Lakers": {
    image: "images/NBAlogos/LosAngelesLakers.png",
    description: "Show your Los Angeles pride with this Lakers sticker!"
  },
  "Memphis Grizzlies": {
    image: "images/NBAlogos/MemphisGrizzlies.png",
    description: "Show your Memphis pride with this Grizzlies sticker!"
  },
  "Miami Heat": {
    image: "images/NBAlogos/MiamiHeat.png",
    description: "Show your Miami pride with this Heat sticker!"
  },
  "Milwaukee Bucks": {
    image: "images/NBAlogos/MilwaukeeBucks.png",
    description: "Show your Milwaukee pride with this Bucks sticker!"
  },
  "Minnesota Timberwolves": {
    image: "images/NBAlogos/MinnesotaTimberwolves.png",
    description: "Show your Minnesota pride with this Timberwolves sticker!"
  },
  "New Orleans Pelicans": {
    image: "images/NBAlogos/NewOrleansPelicans.png",
    description: "Show your New Orleans pride with this Pelicans sticker!"
  },
  "New York Knicks": {
    image: "images/NBAlogos/NewYorkKnicks.png",
    description: "Show your New York pride with this Knicks sticker!"
  },
  "Oklahoma City Thunder": {
    image: "images/NBAlogos/OklahomaCityThunder.png",
    description: "Show your Oklahoma City pride with this Thunder sticker!"
  },
  "Orlando Magic": {
    image: "images/NBAlogos/OrlandoMagic.png",
    description: "Show your Orlando pride with this Magic sticker!"
  },
  "Philadelphia 76ers": {
    image: "images/NBAlogos/Philadelphia76ers.png",
    description: "Show your Philadelphia pride with this 76ers sticker!"
  },
  "Phoenix Suns": {
    image: "images/NBAlogos/PhoenixSuns.png",
    description: "Show your Phoenix pride with this Suns sticker!"
  },
  "Portland Trail Blazers": {
    image: "images/NBAlogos/PortlandTrailBlazers.png",
    description: "Show your Portland pride with this Trail Blazers sticker!"
  },
  "Sacramento Kings": {
    image: "images/NBAlogos/SacramentoKings.png",
    description: "Show your Sacramento pride with this Kings sticker!"
  },
  "San Antonio Spurs": {
    image: "images/NBAlogos/SanAntonioSpurs.png",
    description: "Show your San Antonio pride with this Spurs sticker!"
  },
  "Toronto Raptors": {
    image: "images/NBAlogos/TorontoRaptors.png",
    description: "Show your Toronto pride with this Raptors sticker!"
  },
  "Utah Jazz": {
    image: "images/NBAlogos/UtahJazz.png",
    description: "Show your Utah pride with this Jazz sticker!"
  },
  "Washington Wizards": {
    image: "images/NBAlogos/WashingtonWizards.png",
    description: "Show your Washington pride with this Wizards sticker!"
  },
  "Arizona Cardinals": {
    image: "images/NFLlogos/ArizonaCardinals.png",
    description: "Show your Arizona pride with this Cardinals sticker!"
  },
  "Atlanta Falcons": {
    image: "images/NFLlogos/AtlantaFalcons.png",
    description: "Show your Atlanta pride with this Falcons sticker!"
  },
  "Baltimore Ravens": {
    image: "images/NFLlogos/BaltimoreRavens.png",
    description: "Show your Baltimore pride with this Ravens sticker!"
  },
  "Buffalo Bills": {
    image: "images/NFLlogos/BuffaloBills.png",
    description: "Show your Buffalo pride with this Bills sticker!"
  },
  "Carolina Panthers": {
    image: "images/NFLlogos/CarolinaPanthers.png",
    description: "Show your Carolina pride with this Panthers sticker!"
  },
  "Chicago Bears": {
    image: "images/NFLlogos/ChicagoBears.png",
    description: "Show your Chicago pride with this Bears sticker!"
  },
  "Cincinnati Bengals": {
    image: "images/NFLlogos/CincinnatiBengals.png",
    description: "Show your Cincinnati pride with this Bengals sticker!"
  },
  "Cleveland Browns": {
    image: "images/NFLlogos/ClevelandBrowns.png",
    description: "Show your Cleveland pride with this Browns sticker!"
  },
  "Dallas Cowboys": {
    image: "images/NFLlogos/DallasCowboys.png",
    description: "Show your Dallas pride with this Cowboys sticker!"
  },
  "Denver Broncos": {
    image: "images/NFLlogos/DenverBroncos.png",
    description: "Show your Denver pride with this Broncos sticker!"
  },
  "Detroit Lions": {
    image: "images/NFLlogos/DetroitLions.png",
    description: "Show your Detroit pride with this Lions sticker!"
  },
  "Green Bay Packers": {
    image: "images/NFLlogos/GreenBayPackers.png",
    description: "Show your Green Bay pride with this Packers sticker!"
  },
  "Houston Texans": {
    image: "images/NFLlogos/HoustonTexans.png",
    description: "Show your Houston pride with this Texans sticker!"
  },
  "Indianapolis Colts": {
    image: "images/NFLlogos/IndianapolisColts.png",
    description: "Show your Indianapolis pride with this Colts sticker!"
  },
  "Jacksonville Jaguars": {
    image: "images/NFLlogos/JacksonvilleJaguars.png",
    description: "Show your Jacksonville pride with this Jaguars sticker!"
  },
  "Kansas City Chiefs": {
    image: "images/NFLlogos/KansasCityChiefs.png",
    description: "Show your Kansas City pride with this Chiefs sticker!"
  },
  "Las Vegas Raiders": {
    image: "images/NFLlogos/LasVegasRaiders.png",
    description: "Show your Las Vegas pride with this Raiders sticker!"
  },
  "Los Angeles Chargers": {
    image: "images/NFLlogos/LosAngelesChargers.png",
    description: "Show your Los Angeles pride with this Chargers sticker!"
  },
  "Los Angeles Rams": {
    image: "images/NFLlogos/LosAngelesRams.png",
    description: "Show your Los Angeles pride with this Rams sticker!"
  },
  "Miami Dolphins": {
    image: "images/NFLlogos/MiamiDolphins.png",
    description: "Show your Miami pride with this Dolphins sticker!"
  },
  "Minnesota Vikings": {
    image: "images/NFLlogos/MinnesotaVikings.png",
    description: "Show your Minnesota pride with this Vikings sticker!"
  },
  "New England Patriots": {
    image: "images/NFLlogos/NewEnglandPatriots.png",
    description: "Show your New England pride with this Patriots sticker!"
  },
  "New Orleans Saints": {
    image: "images/NFLlogos/NewOrleansSaints.png",
    description: "Show your New Orleans pride with this Saints sticker!"
  },
  "New York Giants": {
    image: "images/NFLlogos/NewYorkGiants.png",
    description: "Show your New York pride with this Giants sticker!"
  },
  "New York Jets": {
    image: "images/NFLlogos/NewYorkJets.png",
    description: "Show your New York pride with this Jets sticker!"
  },
  "Philadelphia Eagles": {
    image: "images/NFLlogos/PhiladelphiaEagles.png",
    description: "Show your Philadelphia pride with this Eagles sticker!"
  },
  "Pittsburgh Steelers": {
    image: "images/NFLlogos/PittsburghSteelers.png",
    description: "Show your Pittsburgh pride with this Steelers sticker!"
  },
  "San Francisco 49ers": {
    image: "images/NFLlogos/SanFrancisco49ers.png",
    description: "Show your San Francisco pride with this 49ers sticker!"
  },
  "Seattle Seahawks": {
    image: "images/NFLlogos/SeattleSeahawks.png",
    description: "Show your Seattle pride with this Seahawks sticker!"
  },
  "Tampa Bay Buccaneers": {
    image: "images/NFLlogos/TampaBayBuccaneers.png",
    description: "Show your Tampa Bay pride with this Buccaneers sticker!"
  },
  "Tennessee Titans": {
    image: "images/NFLlogos/TennesseeTitans.png",
    description: "Show your Tennessee pride with this Titans sticker!"
  },
  "Washington Commanders": {
    image: "images/NFLlogos/WashingtonCommanders.png",
    description: "Show your Washington pride with this Commanders sticker!"
  },
  "Anaheim Ducks": {
    image: "images/NHLlogos/AnaheimDucks.png",
    description: "Show your Anaheim pride with this Ducks sticker!"
  },
  "Boston Bruins": {
    image: "images/NHLlogos/BostonBruins.png",
    description: "Show your Boston pride with this Bruins sticker!"
  },
  "Buffalo Sabres": {
    image: "images/NHLlogos/BuffaloSabres.png",
    description: "Show your Buffalo pride with this Sabres sticker!"
  },
  "Calgary Flames": {
    image: "images/NHLlogos/CalgaryFlames.png",
    description: "Show your Calgary pride with this Flames sticker!"
  },
  "Carolina Hurricanes": {
    image: "images/NHLlogos/CarolinaHurricanes.png",
    description: "Show your Carolina pride with this Hurricanes sticker!"
  },
  "Chicago Blackhawks": {
    image: "images/NHLlogos/ChicagoBlackhawks.png",
    description: "Show your Chicago pride with this Blackhawks sticker!"
  },
  "Colorado Avalanche": {
    image: "images/NHLlogos/ColoradoAvalanche.png",
    description: "Show your Colorado pride with this Avalanche sticker!"
  },
  "Columbus Blue Jackets": {
    image: "images/NHLlogos/ColumbusBlueJackets.png",
    description: "Show your Columbus pride with this Blue Jackets sticker!"
  },
  "Dallas Stars": {
    image: "images/NHLlogos/DallasStars.png",
    description: "Show your Dallas pride with this Stars sticker!"
  },
  "Detroit Red Wings": {
    image: "images/NHLlogos/DetroitRedWings.png",
    description: "Show your Detroit pride with this Red Wings sticker!"
  },
  "Edmonton Oilers": {
    image: "images/NHLlogos/EdmontonOilers.png",
    description: "Show your Edmonton pride with this Oilers sticker!"
  },
  "Florida Panthers": {
    image: "images/NHLlogos/FloridaPanthers.png",
    description: "Show your Florida pride with this Panthers sticker!"
  },
  "Los Angeles Kings": {
    image: "images/NHLlogos/LosAngelesKings.png",
    description: "Show your Los Angeles pride with this Kings sticker!"
  },
  "Minnesota Wild": {
    image: "images/NHLlogos/MinnesotaWild.png",
    description: "Show your Minnesota pride with this Wild sticker!"
  },
  "Montreal Canadiens": {
    image: "images/NHLlogos/MontrealCanadiens.png",
    description: "Show your Montreal pride with this Canadiens sticker!"
  },
  "Nashville Predators": {
    image: "images/NHLlogos/NashvillePredators.png",
    description: "Show your Nashville pride with this Predators sticker!"
  },
  "New Jersey Devils": {
    image: "images/NHLlogos/NewJerseyDevils.png",
    description: "Show your New Jersey pride with this Devils sticker!"
  },
  "New York Islanders": {
    image: "images/NHLlogos/NewYorkIslanders.png",
    description: "Show your New York pride with this Islanders sticker!"
  },
  "New York Rangers": {
    image: "images/NHLlogos/NewYorkRangers.png",
    description: "Show your New York pride with this Rangers sticker!"
  },
  "Ottawa Senators": {
    image: "images/NHLlogos/OttawaSenators.png",
    description: "Show your Ottawa pride with this Senators sticker!"
  },
  "Philadelphia Flyers": {
    image: "images/NHLlogos/PhiladelphiaFlyers.png",
    description: "Show your Philadelphia pride with this Flyers sticker!"
  },
  "Pittsburgh Penguins": {
    image: "images/NHLlogos/PittsburghPenguins.png",
    description: "Show your Pittsburgh pride with this Penguins sticker!"
  },
  "San Jose Sharks": {
    image: "images/NHLlogos/SanJoseSharks.png",
    description: "Show your San Jose pride with this Sharks sticker!"
  },
  "Seattle Kraken": {
    image: "images/NHLlogos/SeattleKraken.png",
    description: "Show your Seattle pride with this Kraken sticker!"
  },
  "St. Louis Blues": {
    image: "images/NHLlogos/St.LouisBlues.png",
    description: "Show your St. Louis pride with this Blues sticker!"
  },
  "Tampa Bay Lightning": {
    image: "images/NHLlogos/TampaBayLightning.png",
    description: "Show your Tampa Bay pride with this Lightning sticker!"
  },
  "Toronto Maple Leafs": {
    image: "images/NHLlogos/TorontoMapleLeafs.png",
    description: "Show your Toronto pride with this Maple Leafs sticker!"
  },
  "Utah Hockey Club": {
    image: "images/NHLlogos/UtahHockeyClub.png",
    description: "Show your Utah pride with this Hockey Club sticker!"
  },
  "Vancouver Canucks": {
    image: "images/NHLlogos/VancouverCanucks.png",
    description: "Show your Vancouver pride with this Canucks sticker!"
  },
  "Vegas Golden Knights": {
    image: "images/NHLlogos/VegasGoldenKnights.png",
    description: "Show your Vegas pride with this Golden Knights sticker!"
  },
  "Washington Capitals": {
    image: "images/NHLlogos/WashingtonCapitals.png",
    description: "Show your Washington pride with this Capitals sticker!"
  },
  "Winnipeg Jets": {
    image: "images/NHLlogos/WinnipegJets.png",
    description: "Show your Winnipeg pride with this Jets sticker!"
  },
};

const teamLogos = document.querySelectorAll('.team-logo');
const teamNameEl = document.getElementById('team-name');
const teamImageEl = document.getElementById('team-image');
const teamDescEl = document.getElementById('team-description');

teamLogos.forEach(logo => {
  logo.addEventListener('click', () => {
    const altText = logo.alt;
    const teamName = altText.replace(" logo", "");
    const teamInfo = teamData[teamName];

    if (teamInfo) {
      teamNameEl.textContent = teamName;
      teamImageEl.src = teamInfo.image;
      teamImageEl.alt = altText;
      teamDescEl.textContent = teamInfo.description;
    }
  });
});

/* CHECkOUT */

let itemCount = 0;
const itemPrice = 2.99;
const taxRate = 0.07;

const addToCartBtn = document.getElementById('add-to-cart');
const checkoutSection = document.getElementById('checkout-section');
const itemCountSpan = document.getElementById('item-count');
const subtotalSpan = document.getElementById('subtotal');
const taxSpan = document.getElementById('tax');
const totalSpan = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutMessage = document.getElementById('checkout-message');

addToCartBtn.addEventListener('click', () => {
  itemCount++;
  const subtotal = itemCount * itemPrice;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  itemCountSpan.textContent = itemCount;
  subtotalSpan.textContent = subtotal.toFixed(2);
  taxSpan.textContent = tax.toFixed(2);
  totalSpan.textContent = total.toFixed(2);

  checkoutSection.style.display = 'block';
  checkoutMessage.textContent = '';
});

checkoutBtn.addEventListener('click', () => {
  if (itemCount === 0) {
    checkoutMessage.textContent = 'Please add an item to the cart before checking out.';
    checkoutMessage.style.color = 'var(--red)';
  } else {
    const finalTotal = totalSpan.textContent;
    checkoutMessage.textContent = `Thank you for your order! Your total was $${finalTotal}.`;
    checkoutMessage.style.color = 'var(--green)';

    itemCount = 0;
    itemCountSpan.textContent = '0';
    subtotalSpan.textContent = '0.00';
    taxSpan.textContent = '0.00';
    totalSpan.textContent = '0.00';
  }
});

/* GAME */

document.getElementById('guess-btn').addEventListener('click', function() {
  const userGuess = parseInt(document.getElementById('guess-input').value);
  const randomNum = Math.floor(Math.random() * 10) + 1;

  let message = `You guessed ${userGuess}. The number was ${randomNum}. `;

  if (userGuess === randomNum) {
    message += "You win a FREE Sticker!";
    document.getElementById('game-result').style.color = 'var(--green)';
  } else {
    message += "Try again!";
    document.getElementById('game-result').style.color = 'var(--red)';
  }

  document.getElementById('game-result').textContent = message;
});

/* FORM */

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();


  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.getElementById('success-message').textContent = '';

  
  const fullName = document.getElementById('my-full-name').value.trim();
  const phone = document.getElementById('my-phone').value.trim();
  const email = document.getElementById('my-email').value.trim();
  const comments = document.getElementById('my-comments').value.trim();
  const contactPref = document.querySelector('input[name="contact-pref"]:checked').id === 'pref-phone' ? 'Phone' : 'Email';

  let isValid = true;

  if (fullName === '') {
    document.getElementById('name-error').textContent = 'Full name is required.';
    isValid = false;
  }

  
  if (phone !== '') {
    const phonePattern = /^\d{10}$/; 
    if (!phonePattern.test(phone.replace(/\D/g, ''))) {
      document.getElementById('phone-error').textContent = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }
  }

  
  if (email !== '') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('email-error').textContent = 'Enter a valid email address.';
      isValid = false;
  }
}

  
  if (comments === '') {
    document.getElementById('comments-error').textContent = 'Comments are required.';
    isValid = false;
  }

  if (isValid) {
    const customer = {
      fullName: fullName,
      phone: phone,
      email: email,
      comments: comments,
      contactPreference: contactPref
    };
    
    document.querySelector('form').reset();

    document.getElementById('success-message').innerHTML = `
      Thank you, ${customer.fullName}!<br>
      We will contact you via ${customer.contactPreference}.<br>
      Your message: "${customer.comments}"<br>
      Email: ${customer.email}${customer.phone ? `<br>Phone: ${customer.phone}` : ''}
    `;

    console.log('Customer object:', customer);
  }
});

/* CONTACT */
