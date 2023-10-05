interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const component = new ConcreteComponent();
const decorator = new ConcreteDecoratorB(new ConcreteDecoratorA(component));

clientCode(decorator);
