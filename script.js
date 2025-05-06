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
    image: "images/MLB logos/Arizona Diamondbacks.png",
    description: "Show your Arizona pride with this Diamondbacks sticker!"
  },
  "Atlanta Braves": {
    image: "images/MLB logos/Atlanta Braves.png",
    description: "Show your Atlanta pride with this Braves sticker!"
  },
  "Baltimore Orioles": {
    image: "images/MLB logos/Baltimore Orioles.png",
    description: "Show your Baltimore pride with this Orioles sticker!"
  },
  "Boston Red Sox": {
    image: "images/MLB logos/Boston Red Sox.png",
    description: "Show your Boston pride with this Red Sox sticker!"
  },
  "Chicago Cubs": {
    image: "images/MLB logos/Chicago Cubs.png",
    description: "Show your Chicago pride with this Cubs sticker!"
  },
  "Chicago White Sox": {
    image: "images/MLB logos/Chicago White Sox.png",
    description: "Show your Chicago pride with this White Sox sticker!"
  },
  "Cincinnati Reds": {
    image: "images/MLB logos/Cincinnati Reds.png",
    description: "Show your Cincinnati pride with this Reds sticker!"
  },
  "Cleveland Guardians": {
    image: "images/MLB logos/Cleveland Guardians.png",
    description: "Show your Cleveland pride with this Guardians sticker!"
  },
  "Colorado Rockies": {
    image: "images/MLB logos/Colorado Rockies.png",
    description: "Show your Colorado pride with this Rockies sticker!"
  },
  "Detroit Tigers": {
    image: "images/MLB logos/Detroit Tigers.png",
    description: "Show your Detroit pride with this Tigers sticker!"
  },
  "Houston Astros": {
    image: "images/MLB logos/Houston Astros.png",
    description: "Show your Houston pride with this Astros sticker!"
  },
  "Kansas City Royals": {
    image: "images/MLB logos/Kansas City Royals.png",
    description: "Show your Kansas City pride with this Royals sticker!"
  },
  "Las Vegas Athletics": {
    image: "images/MLB logos/Las Vegas Athletics.png",
    description: "Show your Las Vegas pride with this Athletics sticker!"
  },
  "Los Angeles Angels": {
    image: "images/MLB logos/Los Angeles Angels.png",
    description: "Show your Los Angeles pride with this Angels sticker!"
  },
  "Los Angeles Dodgers": {
    image: "images/MLB logos/Los Angeles Dodgers.png",
    description: "Show your Los Angeles pride with this sleek Diamondbacks sticker!"
  },
  "Miami Marlins": {
    image: "images/MLB logos/Miami Marlins.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "Milwaukee Brewers": {
    image: "images/MLB logos/Milwaukee Brewers.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "Minnesota Twins": {
    image: "images/MLB logos/Minnesota Twins.png",
    description: "Show your Arizona pride with this sleek Diamondbacks sticker!"
  },
  "New York Mets": {
    image: "images/MLB logos/New York Mets.png",
    description: "Show your New York pride with this Mets sticker!"
  },
  "New York Yankees": {
    image: "images/MLB logos/New York Yankees.png",
    description: "Show your New York pride with this Yankees sticker!"
  },
  "Philadelphia Phillies": {
    image: "images/MLB logos/Philadelphia Phillies.png",
    description: "Show your Philadelphis pride with this Phillies sticker!"
  },
  "Pittsburgh Pirates": {
    image: "images/MLB logos/Pittsburgh Pirates.png",
    description: "Show your Pittsburgh pride with this Pirates sticker!"
  },
  "San Diego Padres": {
    image: "images/MLB logos/San Diego Padres.png",
    description: "Show your San Diego pride with this Padres sticker!"
  },
  "San Francisco Giants": {
    image: "images/MLB logos/San Francisco Giants.png",
    description: "Show your San Francisco pride with this Giants sticker!"
  },
  "Seattle Mariners": {
    image: "images/MLB logos/Seattle Mariners.png",
    description: "Show your Seattle pride with this Mariners sticker!"
  },
  "St. Louis Cardinals": {
    image: "images/MLB logos/St. Louis Cardinals.png",
    description: "Show your St. Louis pride with this Cardinals sticker!"
  },
  "Tampa Bay Rays": {
    image: "images/MLB logos/Tampa Bay Rays.png",
    description: "Show your Tampa Bay pride with this Rays sticker!"
  },
  "Texas Rangers": {
    image: "images/MLB logos/Texas Rangers.png",
    description: "Show your Texas pride with this Rangers sticker!"
  },
  "Toronto Blue Jays": {
    image: "images/MLB logos/Toronto Blue Jays.png",
    description: "Show your Toronto pride with this Blue Jays sticker!"
  },
  "Washington Nationals": {
    image: "images/MLB logos/Washington Nationals.png",
    description: "Show your Washington pride with this Nationals sticker!"
  },
  "Atlanta Hawks": {
    image: "images/NBA logos/Atlanta Hawks.png",
    description: "Show your Atlanta pride with this Hawks sticker!"
  },
  "Boston Celtics": {
    image: "images/NBA logos/Boston Celtics.png",
    description: "Show your Boston pride with this Celtics sticker!"
  },
  "Brooklyn Nets": {
    image: "images/NBA logos/Brooklyn Nets.png",
    description: "Show your Brooklyn pride with this Nets sticker!"
  },
  "Charlotte Hornets": {
    image: "images/NBA logos/Charlotte Hornets.png",
    description: "Show your Charlotte pride with this Hornets sticker!"
  },
  "Chicago Bulls": {
    image: "images/NBA logos/Chicago Bulls.png",
    description: "Show your CHicago pride with this Bulls sticker!"
  },
  "Cleveland Cavaliers": {
    image: "images/NBA logos/Cleveland Cavaliers.png",
    description: "Show your Cleveland pride with this Cavaliers sticker!"
  },
  "Dallas Mavericks": {
    image: "images/NBA logos/Dallas Mavericks.png",
    description: "Show your Dallas pride with this sleek Mavericks sticker!"
  },
  "Denver Nuggets": {
    image: "images/NBA logos/Denver Nuggets.png",
    description: "Show your Denver pride with this Nuggets sticker!"
  },
  "Detroit Pistons": {
    image: "images/NBA logos/Detroit Pistons.png",
    description: "Show your Detroit pride with this Pistons sticker!"
  },
  "Golden State Warriors": {
    image: "images/NBA logos/Golden State Warriors.png",
    description: "Show your Golden State pride with this Warriors sticker!"
  },
  "Houston Rockets": {
    image: "images/NBA logos/Houston Rockets.png",
    description: "Show your Houston pride with this Rockets sticker!"
  },
  "Indiana Pacers": {
    image: "images/NBA logos/Indiana Pacers.png",
    description: "Show your Indiana pride with this Pacers sticker!"
  },
  "Los Angeles Clippers": {
    image: "images/NBA logos/Los Angeles Clippers.png",
    description: "Show your Los Angeles pride with this Clippers sticker!"
  },
  "Los Angeles Lakers": {
    image: "images/NBA logos/Los Angeles Lakers.png",
    description: "Show your Los Angeles pride with this Lakers sticker!"
  },
  "Memphis Grizzlies": {
    image: "images/NBA logos/Memphis Grizzlies.png",
    description: "Show your Memphis pride with this Grizzlies sticker!"
  },
  "Miami Heat": {
    image: "images/NBA logos/Miami Heat.png",
    description: "Show your Miami pride with this Heat sticker!"
  },
  "Milwaukee Bucks": {
    image: "images/NBA logos/Milwaukee Bucks.png",
    description: "Show your Milwaukee pride with this Bucks sticker!"
  },
  "Minnesota Timberwolves": {
    image: "images/NBA logos/Minnesota Timberwolves.png",
    description: "Show your Minnesota pride with this Timberwolves sticker!"
  },
  "New Orleans Pelicans": {
    image: "images/NBA logos/New Orleans Pelicans.png",
    description: "Show your New Orleans pride with this Pelicans sticker!"
  },
  "New York Knicks": {
    image: "images/NBA logos/New York Knicks.png",
    description: "Show your New York pride with this Knicks sticker!"
  },
  "Oklahoma City Thunder": {
    image: "images/NBA logos/Oklahoma City Thunder.png",
    description: "Show your Oklahoma City pride with this Thunder sticker!"
  },
  "Orlando Magic": {
    image: "images/NBA logos/Orlando Magic.png",
    description: "Show your Orlando pride with this Magic sticker!"
  },
  "Philadelphia 76ers": {
    image: "images/NBA logos/Philadelphia 76ers.png",
    description: "Show your Philadelphia pride with this 76ers sticker!"
  },
  "Phoenix Suns": {
    image: "images/NBA logos/Phoenix Suns.png",
    description: "Show your Phoenix pride with this Suns sticker!"
  },
  "Portland Trail Blazers": {
    image: "images/NBA logos/Portland Trail Blazers.png",
    description: "Show your Portland pride with this Trail Blazers sticker!"
  },
  "Sacramento Kings": {
    image: "images/NBA logos/Sacramento Kings.png",
    description: "Show your Sacramento pride with this Kings sticker!"
  },
  "San Antonio Spurs": {
    image: "images/NBA logos/San Antonio Spurs.png",
    description: "Show your San Antonio pride with this Spurs sticker!"
  },
  "Toronto Raptors": {
    image: "images/NBA logos/Toronto Raptors.png",
    description: "Show your Toronto pride with this Raptors sticker!"
  },
  "Utah Jazz": {
    image: "images/NBA logos/Utah Jazz.png",
    description: "Show your Utah pride with this Jazz sticker!"
  },
  "Washington Wizards": {
    image: "images/NBA logos/Washington Wizards.png",
    description: "Show your Washington pride with this Wizards sticker!"
  },
  "Arizona Cardinals": {
    image: "images/NFL logos/Arizona Cardinals.png",
    description: "Show your Arizona pride with this Cardinals sticker!"
  },
  "Atlanta Falcons": {
    image: "images/NFL logos/Atlanta Falcons.png",
    description: "Show your Atlanta pride with this Falcons sticker!"
  },
  "Baltimore Ravens": {
    image: "images/NFL logos/Baltimore Ravens.png",
    description: "Show your Baltimore pride with this Ravens sticker!"
  },
  "Buffalo Bills": {
    image: "images/NFL logos/Buffalo Bills.png",
    description: "Show your Buffalo pride with this Bills sticker!"
  },
  "Carolina Panthers": {
    image: "images/NFL logos/Carolina Panthers.png",
    description: "Show your Carolina pride with this Panthers sticker!"
  },
  "Chicago Bears": {
    image: "images/NFL logos/Chicago Bears.png",
    description: "Show your Chicago pride with this Bears sticker!"
  },
  "Cincinnati Bengals": {
    image: "images/NFL logos/Cincinnati Bengals.png",
    description: "Show your Cincinnati pride with this Bengals sticker!"
  },
  "Cleveland Browns": {
    image: "images/NFL logos/Cleveland Browns.png",
    description: "Show your Cleveland pride with this Browns sticker!"
  },
  "Dallas Cowboys": {
    image: "images/NFL logos/Dallas Cowboys.png",
    description: "Show your Dallas pride with this Cowboys sticker!"
  },
  "Denver Broncos": {
    image: "images/NFL logos/Denver Broncos.png",
    description: "Show your Denver pride with this Broncos sticker!"
  },
  "Detroit Lions": {
    image: "images/NFL logos/Detroit Lions.png",
    description: "Show your Detroit pride with this Lions sticker!"
  },
  "Green Bay Packers": {
    image: "images/NFL logos/Green Bay Packers.png",
    description: "Show your Green Bay pride with this Packers sticker!"
  },
  "Houston Texans": {
    image: "images/NFL logos/Houston Texans.png",
    description: "Show your Houston pride with this Texans sticker!"
  },
  "Indianapolis Colts": {
    image: "images/NFL logos/Indianapolis Colts.png",
    description: "Show your Indianapolis pride with this Colts sticker!"
  },
  "Jacksonville Jaguars": {
    image: "images/NFL logos/Jacksonville Jaguars.png",
    description: "Show your Jacksonville pride with this Jaguars sticker!"
  },
  "Kansas City Chiefs": {
    image: "images/NFL logos/Kansas City Chiefs.png",
    description: "Show your Kansas City pride with this Chiefs sticker!"
  },
  "Las Vegas Raiders": {
    image: "images/NFL logos/Las Vegas Raiders.png",
    description: "Show your Las Vegas pride with this Raiders sticker!"
  },
  "Los Angeles Chargers": {
    image: "images/NFL logos/Los Angeles Chargers.png",
    description: "Show your Los Angeles pride with this Chargers sticker!"
  },
  "Los Angeles Rams": {
    image: "images/NFL logos/Los Angeles Rams.png",
    description: "Show your Los Angeles pride with this Rams sticker!"
  },
  "Miami Dolphins": {
    image: "images/NFL logos/Miami Dolphins.png",
    description: "Show your Miami pride with this Dolphins sticker!"
  },
  "Minnesota Vikings": {
    image: "images/NFL logos/Minnesota Vikings.png",
    description: "Show your Minnesota pride with this Vikings sticker!"
  },
  "New England Patriots": {
    image: "images/NFL logos/New England Patriots.png",
    description: "Show your New England pride with this Patriots sticker!"
  },
  "New Orleans Saints": {
    image: "images/NFL logos/New Orleans Saints.png",
    description: "Show your New Orleans pride with this Saints sticker!"
  },
  "New York Giants": {
    image: "images/NFL logos/New York Giants.png",
    description: "Show your New York pride with this Giants sticker!"
  },
  "New York Jets": {
    image: "images/NFL logos/New York Jets.png",
    description: "Show your New York pride with this Jets sticker!"
  },
  "Philadelphia Eagles": {
    image: "images/NFL logos/Philadelphia Eagles.png",
    description: "Show your Philadelphia pride with this Eagles sticker!"
  },
  "Pittsburgh Steelers": {
    image: "images/NFL logos/Pittsburgh Steelers.png",
    description: "Show your Pittsburgh pride with this Steelers sticker!"
  },
  "San Francisco 49ers": {
    image: "images/NFL logos/San Francisco 49ers.png",
    description: "Show your San Francisco pride with this 49ers sticker!"
  },
  "Seattle Seahawks": {
    image: "images/NFL logos/Seattle Seahawks.png",
    description: "Show your Seattle pride with this Seahawks sticker!"
  },
  "Tampa Bay Buccaneers": {
    image: "images/NFL logos/Tampa Bay Buccaneers.png",
    description: "Show your Tampa Bay pride with this Buccaneers sticker!"
  },
  "Tennessee Titans": {
    image: "images/NFL logos/Tennessee Titans.png",
    description: "Show your Tennessee pride with this Titans sticker!"
  },
  "Washington Commanders": {
    image: "images/NFL logos/Washington Commanders.png",
    description: "Show your Washington pride with this Commanders sticker!"
  },
  "Anaheim Ducks": {
    image: "images/NHL logos/Anaheim Ducks.png",
    description: "Show your Anaheim pride with this Ducks sticker!"
  },
  "Boston Bruins": {
    image: "images/NHL logos/Boston Bruins.png",
    description: "Show your Boston pride with this Bruins sticker!"
  },
  "Buffalo Sabres": {
    image: "images/NHL logos/Buffalo Sabres.png",
    description: "Show your Buffalo pride with this Sabres sticker!"
  },
  "Calgary Flames": {
    image: "images/NHL logos/Calgary Flames.png",
    description: "Show your Calgary pride with this Flames sticker!"
  },
  "Carolina Hurricanes": {
    image: "images/NHL logos/Carolina Hurricanes.png",
    description: "Show your Carolina pride with this Hurricanes sticker!"
  },
  "Chicago Blackhawks": {
    image: "images/NHL logos/Chicago Blackhawks.png",
    description: "Show your Chicago pride with this Blackhawks sticker!"
  },
  "Colorado Avalanche": {
    image: "images/NHL logos/Colorado Avalanche.png",
    description: "Show your Colorado pride with this Avalanche sticker!"
  },
  "Columbus Blue Jackets": {
    image: "images/NHL logos/Columbus Blue Jackets.png",
    description: "Show your Columbus pride with this Blue Jackets sticker!"
  },
  "Dallas Stars ": {
    image: "images/NHL logos/Dallas Stars.png",
    description: "Show your Dallas pride with this Stars sticker!"
  },
  "Detroit Red Wings ": {
    image: "images/NHL logos/Detroit Red Wings.png",
    description: "Show your Detroit pride with this Red Wings sticker!"
  },
  "Edmonton Oilers": {
    image: "images/NHL logos/Edmonton Oilers.png",
    description: "Show your Edmonton pride with this Oilers sticker!"
  },
  "Florida Panthers": {
    image: "images/NHL logos/Florida Panthers.png",
    description: "Show your Florida pride with this Panthers sticker!"
  },
  "Los Angeles Kings": {
    image: "images/NHL logos/Los Angeles Kings.png",
    description: "Show your Los Angeles pride with this Kings sticker!"
  },
  "Minnesota Wild": {
    image: "images/NHL logos/Minnesota Wild.png",
    description: "Show your Minnesota pride with this Wild sticker!"
  },
  "Montreal Canadiens": {
    image: "images/NHL logos/Montreal Canadiens.png",
    description: "Show your Montreal pride with this Canadiens sticker!"
  },
  "Nashville Predators": {
    image: "images/NHL logos/Nashville Predators.png",
    description: "Show your Nashville pride with this Predators sticker!"
  },
  "New Jersey Devils": {
    image: "images/NHL logos/New Jersey Devils.png",
    description: "Show your New Jersey pride with this Devils sticker!"
  },
  "New York Islanders": {
    image: "images/NHL logos/New York Islanders.png",
    description: "Show your New York pride with this Islanders sticker!"
  },
  "New York Rangers": {
    image: "images/NHL logos/New York Rangers.png",
    description: "Show your New York pride with this Rangers sticker!"
  },
  "Ottawa Senators": {
    image: "images/NHL logos/Ottawa Senators.png",
    description: "Show your Ottawa pride with this Senators sticker!"
  },
  "Philadelphia Flyers": {
    image: "images/NHL logos/Philadelphia Flyers.png",
    description: "Show your Philadelphia pride with this Flyers sticker!"
  },
  "Pittsburgh Penguins": {
    image: "images/NHL logos/Pittsburgh Penguins.png",
    description: "Show your Pittsburgh pride with this Penguins sticker!"
  },
  "San Jose Sharks": {
    image: "images/NHL logos/San Jose Sharks.png",
    description: "Show your San Jose pride with this Sharks sticker!"
  },
  "Seattle Kraken": {
    image: "images/NHL logos/Seattle Kraken.png",
    description: "Show your Seattle pride with this Kraken sticker!"
  },
  "St. Louis Blues": {
    image: "images/NHL logos/St. Louis Blues.png",
    description: "Show your St. Louis pride with this Blues sticker!"
  },
  "Tampa Bay Lightning": {
    image: "images/NHL logos/Tampa Bay Lightning.png",
    description: "Show your Tampa Bay pride with this Lightning sticker!"
  },
  "Toronto Maple Leafs": {
    image: "images/NHL logos/Toronto Maple Leafs.png",
    description: "Show your Toronto pride with this Maple Leafs sticker!"
  },
  "Utah Hockey Club": {
    image: "images/NHL logos/Utah Hockey Club.png",
    description: "Show your Utah pride with this Hockey Club sticker!"
  },
  "Vancouver Canucks": {
    image: "images/NHL logos/Vancouver Canucks.png",
    description: "Show your Vancouver pride with this Canucks sticker!"
  },
  "Vegas Golden Knights": {
    image: "images/NHL logos/Vegas Golden Knights.png",
    description: "Show your Vegas pride with this Golden Knights sticker!"
  },
  "Washington Capitals": {
    image: "images/NHL logos/Washington Capitals.png",
    description: "Show your Washington pride with this Capitals sticker!"
  },
  "Winnipeg Jets": {
    image: "images/NHL logos/Winnipeg Jets.png",
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
