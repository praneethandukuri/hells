let currentDirectory = "~";
const promptMessage = "hells " + currentDirectory + " % ";

const performEcho = function (args) {
  return args.join(" ");
};

const runCommand = function (command, args) {
  switch (command) {
    case "echo":
      return performEcho(args);
    default:
      return "";
  }
};

const runHells = function () {
  while (true) {
    const commandToRun = prompt(promptMessage);
    const [command, ...args] = commandToRun.split(" ");
    console.log(runCommand(command, args));
  }

};

runHells();