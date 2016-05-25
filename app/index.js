var generators = require('yeoman-generator');
var path = require('path')

module.exports = generators.Base.extend({
  prompting() {
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Project Name',
      default: process.cwd().split(path.sep).pop()
    }, {
      type: 'input',
      name: 'author',
      message: 'Your full name',
      default: this.user.git.name()
    }, {
      type: 'input',
      name: 'gituser',
      message: 'Your GitHub username',
      store: true
    }, {
      type: 'input',
      name: 'gitemail',
      message: 'Your GitHub email',
      default: this.user.git.email()
    }, {
      type: 'input',
      name: 'description',
      message: 'Description',
      default: 'A JavaScript ES6 library'
    }, {
      type: 'input',
      name: 'license',
      message: 'License',
      default: 'MIT'
    }]
    return this.prompt(prompts).then(this._initializeCopy.bind(this))
  },

  _initializeCopy(options) {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      options
    )

    this.fs.copyTpl(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    )

    this.fs.copyTpl(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    )

    this.fs.copyTpl(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    )

    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    )

    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    )

    this.fs.copyTpl(
      this.templatePath('jshintrc'),
      this.destinationPath('.jshintrc')
    )

    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('main.js')
    )

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      options
    )

    this.fs.copyTpl(
      this.templatePath('yuidoc.json'),
      this.destinationPath('yuidoc.json')
    )

  }
})
