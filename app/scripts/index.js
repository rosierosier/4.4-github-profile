var $ = require('jquery');
var handlebars = require('Handlebars');
var githubtoken = require('./token.js').token;
var _ = require('underscore');

if(typeof(githubtoken) !== "undefined"){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken,
    }
  });
}

// var url = 'https://github.com/rosierosier?tab=repositories';
// function fetchJSONP(url, callback){
//   var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
//   var script = document.createElement('script');
//
//   window[callbackName] = function(data){
//     delete window[callbackName];
//     document.body.removeChild(script);
//     callback(data);
//   };
//   script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
//   document.body.appendChild(script);
// }

// var url = 'https://api.github.com/users/rosierosier';
//
// function logData(data){
//   var githubRepo = data.results;
//   console.log(githubRepo);
//   githubRepo.forEach(function(value, index, array){
//     var context = {
//       title: array[index].title,
//     };
//     $('.js-githubRepo').append(template(context));
//     console.log(context);
//   });
//   console.log(data.results[0].title);
// }
// logData(url, logData);

var baseUrl = 'https://api.github.com/users/rosierosier';
var githubUrlRepo = baseUrl + '/repos';

var source = $("#user-template").html();
var template = handlebars.compile(source);

function fetchGithub(){
  $.ajax(baseUrl).done(function(data){
    // console.log(data);
    var userData = {
      name: data.name,
      username: data.login,
      blog: data.blog,
      location: data.location,
      email: data.email,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
    }
    console.log(userData);

    // getInfo.forEach(function(value, index, array){
    //   console.log('working');
    //   //this line is correct except for the user.name section
    //   $('.js-repository-tab').append('<li>' + array[index].name + '</li>');
    // });
  });
}

fetchGithub();

// function logData(data){
//   var etsyImages = data.results;
//   console.log(etsyImages)
//   etsyImages.forEach(function(value, index, array){
//     var context = {
//       title: array[index].title,
//       currencyCode: array[index].currency_code,
//       price: array[index].price,
//       manufacturer: array[index].Shop.shop_name,
//       image: array[index].Images[0].url_fullxfull,
//     };
//     $('.tile').append(template(context));
//     console.log(context);
//   });
//   console.log(data.results[0].Images);
//   console.log(data.results[0].Images[0].url_fullxfull);
// }
// fetchJSONP(url, logData);













function fetchGibhubRepos(){
  $.ajax(githubUrlRepo).done(function(getRepo){
    console.log(getRepo);
    // getRepo[0].name.forEach(function(value, index, array){
    //   console.log('working');
    //   $(.'js-repository-tab').append('<li>' + array[index].name + '</li>');
    // });
  });
}
fetchGibhubRepos();



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
