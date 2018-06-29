export default class Console {
  constructor(listElement, oldConsole) {
    this.listElement = listElement;
    this.oldConsole = oldConsole;
    this.cleared = false;
  }

  clear() {
    if (!this.cleared) {
      self.window.console = this.oldConsole;
      this.cleared = true;
    }
  }

  write(type, msg) {
    if (this.cleared) { return; }
    this.oldConsole[type](msg);
    const item = document.createElement('li');
    const prefix = document.createElement('span');
    const message = document.createElement('span');

    item.classList.add(type);
    prefix.classList.add('prefix');
    message.classList.add('message');

    item.append(prefix);
    item.append(message);
    prefix.textContent = `${type}: `;
    message.textContent = msg;

    this.listElement.append(item);
  }

  debug() { this.write('debug', ...arguments); }
  error() { this.write('error', ...arguments); }
  info() { this.write('info', ...arguments); }
  log() { this.write('log', ...arguments); }
  warn() { this.write('warn', ...arguments); }
}

export function init(consoleOutput = document.createElement('ol')) {
  consoleOutput.classList.add('console');
  document.body.append(consoleOutput);
  console = new Console(consoleOutput, console);
};
