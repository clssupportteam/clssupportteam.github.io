function Getstats() {
  window.status = ('Attempting to Login to user area.')

  var PIN;
  var userName;
  PIN = document.login.PIN.value
  userName = document.login.userName.value

  if (PIN == "" || userName == "") {
    alert('\nERROR\nYou must enter ALL Details,\nto View your statistics.\n');
    window.status = ('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
  }
  else {

    var location = '';
    if (userName == 'AnnaSzuster' && PIN == '7095') {
      location = ("Anna Szuster/reports.html");
    }
    else if (userName == 'JornaBegum' && PIN == '0725') {
      location = ("Jorna Begum/reports.html");
    }
    else if (userName == 'BeverleyParker' && PIN == '5665') {
      location = ("Beverley Parker/reports.html");
    }
    else if (userName == 'LauraHewitt' && PIN == '3283') {
      location = ("Laura Hewitt/reports.html");
    }
    else if (userName == 'SeanWider' && PIN == '8317') {
      location = ("Sean Wider/reports.html");
    }
    else if (userName == 'PriyankaKukkala' && PIN == '3535') {
      location = ("Priyanka Kukkala/reports.html");
    }
    else if (userName == 'RebeccaFisher' && PIN == '2370') {
      location = ("Rebecca Fisher/reports.html");
    }
    else if (userName == 'SunaHilal' && PIN == '3341') {
      location = ("Suna Hilal/reports.html");
    }
    else if (userName == 'SaharaDennis' && PIN == '1750') {
      location = ("Sahara Dennis/reports.html");
    }
    else if (userName == 'JennySanchez' && PIN == '7150') {
      location = ("Jenny Sanchez/reports.html");
    }
    else if (userName == 'AneeqAjmal' && PIN == '0103') {
      location = ("Aneeq Ajmal/reports.html");
    }
    else if (userName == 'NikolasGalic' && PIN == '2643') {
      location = ("Nikolas Galic/reports.html");
    }
    else if (userName == 'PaulCook' && PIN == '1404') {
      location = ("Paul Cook/reports.html");
    }
    else if (userName == 'JulieMcGuinness' && PIN == '4510') {
      location = ("Julie McGuinness/reports.html");
    }
    else if (userName == 'SupportTeam' && PIN == '0000') {
      location = ("reports.html");
    }
    
    else alert('Error - Username or password is incorrect');

    this.location.href = location;


  }
}
