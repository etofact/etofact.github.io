$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: '%current/%total',
  questions: [
    {
      'q': 'А теперь простой вопрос. ВИЧ и гомосексуалисты - они как-то связаны?',
      'options': [
        'Геи страдают от вируса иммунодефицита совсем немного чаще, чем натуралы.',
        'Они гораздо чаще являются носителями ВИЧ-инфекции.',
		'Понимаю, о чем вы:  “Далласский клуб покупателей” и все такое. Это миф! Геи страдают от ВИЧ не больше, чем натуралы.'
      ],
      'correctIndex': 1,
      'correctResponse': 'Верно. Геи в 60 раз чаще являются носителями ВИЧ, чем натуралы. Об этом есть исследование на сайте Национального центра биотехнологической информации США.',
      'incorrectResponse': 'Неверно. Геи в 60 раз чаще являются носителями ВИЧ, чем натуралы. Об этом есть <a target="_blank" href="http://sdfdsfdsfsfd">исследование</a> на сайте Национального центра биотехнологической информации США.'
    },
    {
      'q': 'How do you use it?',
      'options': [
        'Include jQuery, that\'s it!',
        'Include jQuery and the plugin javascript.',
        'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'The plugin can be configured to require a perfect score.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});