var $ = require('jquery');
var handlebars = require('handlebars');

var url = 'https://github.com/rosierosier?tab=repositories';
function fetchJSONP(url, callback){
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  var script = document.createElement('script');

  window[callbackName] = function(data){
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
}

function logData(data){
  var githubRepo = data.results;
  console.log(githubRepo);
  githubRepo.forEach(function(value, index, array){
    var context = {
      title: array[index].title,
    };
    $('.js-githubRepo').append(template(context));
    console.log(context);
  });
  console.log(data.results[0].title);
}
fetchJSONP(url, logData);

function fetchGithub(){
  var githubUrl = 'https://api.github.com/users/rosierosier';
  var githubUrlRepo = githubUrl + '/repos';

  $.ajax(githubUrl).done(function(getRepo){
    getRepo.results.forEach(function(user){
      //this line is correct except for the user.name section
      $('.js-respository-tab').append('<li>' + user.name + '</li>');
    });
  });

  $.ajax(githubUrlRepo).done(function(){
    //
  })
}


// $('.js-planets-button').click(function(){
//   fetchPlanets();
// });
//
// function fetchPlanets(){
//   var planetsUrl = baseUrl + 'planets/';
//
//   $.ajax(planetsUrl).done(function(planetsList){
//     planetsList.results.forEach(function(planet){
//       $('.js-planets-list').append('<li>' + planet.name + '</li>');
//     });
//   });
// }
