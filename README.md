# Challenge EstudarComVc

A project created for the challenge 'Estudar Com Você'. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

This project is available at https://challenge-estudarcomvc.firebaseapp.com

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node 6+ (https://nodejs.org/en/download/)
* Git (https://git-scm.com/downloads)


### Clone repository

For this step, make sure the GIT is installed.

If you're in doubt whether you have installed, run the command ```git --version```. This command will display the GIT version if it's installed.

```sh
git clone https://github.com/RNunes13/challengeEstudarComVc
cd challengeEstudarComVc
```

### Install dependencies

For this step, make sure NodeJS and NPM are installed.

**Obs.:** NPM is already installed next to NodeJS.

If you're in doubt if both are installed, in the terminal the commands, ```node -v ``` (This command will display the NodeJS version, if installed) and ```npm -v ``` (This command will display the version of NPM, if installed).

Also, ensure that your computer has internet access at the time of the command execution

```sh
npm install
```

After running the command on the terminal, wait for the packages to download. This procedure can take time depending on the speed of your internet.

If you're running on a system that requires administrator permission, a error may occur.

If you're on a **Windows** system, simply open the terminal (Command Prompt or other) with administrator permission.

If you're on **Linux** or **MAC** system, run the same command with **sudo** (```sudo npm install```).

## Development

To compile the files and watch the changes in **Development** environment, and to be able to test the website, execute the command below

```sh
npm run start
```

On **Linux** or **MAC** systems, at times, you'll need to use **sudo** to execute this command. So, just added before the command (```sudo npm run start```).

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production

To compile the files in **Production** environment, run the command below.

```sh
npm run build
```

On **Linux** or **MAC** systems, at times, you'll need to use **sudo** to execute this command. So, just added before the command (```sudo npm run build```).

The build artifacts will be stored in the `dist/` directory. This script (```npm run build```) already has the `--prod` flag.

## External libs

### Styles
  * [SASS Rem](https://github.com/pierreburel/sass-rem)

## Methodology/Architeture
  * Styles with [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) + [7-1-pattern](https://sass-guidelin.es/#the-7-1-pattern) and [BEM](http://getbem.com/introduction)

## Versioning
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RNunes13/challengeEstudarComVc/tags).

## Authors
  * **Rodrigo Nunes** - Initial work - [RNunes](https://github.com/RNunes13)

See also the list of [contributors](https://github.com/RNunes13/challengeEstudarComVc/contributors) who participated in this project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
