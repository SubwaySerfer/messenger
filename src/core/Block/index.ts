import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import EventBus from '../EventBus';
import cloneDeep from '../../utils/cloneDeep';
import { isEqual } from '../../utils/isEqual';

// Нельзя создавать экземпляр данного класса
class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block | Array<Block>>;
  private eventBus: () => EventBus;

  private _element: HTMLElement | null | DocumentFragment = null;

  private _meta: { tagName?: string; props?: object };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      props: props as P,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): {
    props: P;
    children: Record<string, Block>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _addEvents() {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _findInputInParent(
    parent: HTMLElement | null | DocumentFragment
  ): HTMLInputElement | HTMLTextAreaElement | null | undefined {
    return parent?.querySelector('input') || parent?.querySelector('textarea');
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = tagName
      ? document.createElement(tagName)
      : document.createDocumentFragment();
  }

  private _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (!Array.isArray(child)) {
        child.dispatchComponentDidMount();
      } else {
        child.forEach((arrayChild) => {
          arrayChild.dispatchComponentDidMount();
        });
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: P, _newProps: P) {
    return !isEqual(_oldProps, _newProps);
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    this._removeEvents();
    (this._element as HTMLElement).innerHTML = '';

    this._element!.append(fragment);

    this._addEvents();
  }

  protected compile(template: string, context: any): DocumentFragment {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${
        (component as Block).id
      }"></div>`;
    });

    const html = Handlebars.compile(template)(contextAndStubs);
    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, components]) => {
      const stub = temp.content.querySelector(
        `[data-id="${(components as Block).id}"]`
      );

      if (!stub) {
        return;
      }

      if (!Array.isArray(components)) {
        stub.replaceWith(components.getContent()!);
      } else {
        const fragment = document.createDocumentFragment();

        components.forEach((component) => {
          const content = component.getContent();
          if (content) {
            fragment.appendChild(content);
          }
        });

        stub.replaceWith(fragment);
      }
    });
    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value): boolean {
        const cloneOldTarget = cloneDeep(target);

        const newTarget = target;

        newTarget[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, newTarget, cloneOldTarget);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  block(tagName: string): HTMLElement | DocumentFragment {
    return tagName
      ? document.createElement(tagName)
      : document.createDocumentFragment();
  }

  show(): void {
    (this.getContent() as HTMLElement)!.style.display = 'block';
  }

  hide(): void {
    (this.getContent() as HTMLElement)!.style.display = 'none';
  }
}

export default Block;

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { v4 } from 'uuid';

// import EventBus from '../EventBus';
// import { isEqual } from '../../utils/isEqual';

// export default class Block<P extends Record<string, any> = any> {
//   static EVENTS = {
//     INIT: 'init',
//     FLOW_CDM: 'flow:component-did-mount',
//     FLOW_CDU: 'flow:component-did-update',
//     FLOW_RENDER: 'flow:render',
//   } as const;

//   protected props: P;

//   public children: Record<string, Block | Block[]>;

//   public id: string;

//   private _element: HTMLElement | null = null;

//   public _meta: { props: P };

//   private eventBus: () => EventBus;

//   constructor(propsWithChildren: P) {
//     const eventBus = new EventBus();

//     const { children, props } = this._getChildrenAndProps(propsWithChildren);

//     this.eventBus = () => eventBus;
//     this.id = v4();
//     this.children = children;
//     this.props = this._makePropsProxy(props) as P;
//     this._meta = {
//       props,
//     };

//     this._registerEvents(eventBus);
//     eventBus.emit(Block.EVENTS.INIT);
//   }

//   _getChildrenAndProps(childrenAndProps: P): {
//     props: P;
//     children: Record<string, Block>;
//   } {
//     const props: Record<string, unknown> = {};
//     const children: Record<string, Block> = {};

//     Object.entries(childrenAndProps).forEach(([key, value]) => {
//       if (
//         Array.isArray(value) &&
//         value.length > 0 &&
//         value.every((v) => v instanceof Block)
//       ) {
//         children[key as string] = value;
//       } else if (value instanceof Block) {
//         children[key as string] = value;
//       } else {
//         props[key] = value;
//       }
//     });

//     return { props: props as P, children };
//   }

//   _registerEvents(eventBus: EventBus) {
//     eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
//   }

//   private _init() {
//     this.init();

//     this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
//   }

//   init() {}

//   _componentDidMount() {
//     this.componentDidMount();

//     Object.values(this.children).forEach((child) => {
//       if (Array.isArray(child)) {
//         child.forEach((ch) => ch.dispatchComponentDidMount());
//       } else {
//         child.dispatchComponentDidMount();
//       }
//     });
//   }

//   componentDidMount() {}

//   _componentDidUpdate(oldProps: P, newProps: P) {
//     const isReRender = this.componentDidUpdate(oldProps, newProps);
//     if (!isReRender) {
//       return;
//     }
//     this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
//   }

//   componentDidUpdate(oldProps: P, newProps: P) {
//     return !isEqual(oldProps, newProps);
//   }

//   _render() {
//     const fragment = this.render();

//     const newElement = fragment.firstElementChild as HTMLElement;

//     if (this._element && newElement) {
//       this._element.replaceWith(newElement);
//     }

//     this._element = newElement;

//     this._addEvents();
//     this._addAttribute();
//   }

//   render(): DocumentFragment {
//     return new DocumentFragment();
//   }

//   _addEvents() {
//     const { events = {} } = this.props as P & {
//       events: Record<string, () => void>;
//     };

//     Object.keys(events).forEach((eventName) => {
//       this._element?.addEventListener(eventName, events[eventName]);
//     });
//   }

//   _removeEvents() {
//     const { events = {} } = this.props as P & {
//       events: Record<string, () => void>;
//     };

//     if (!events || !this._element) {
//       return;
//     }

//     Object.entries(events).forEach(([event, listener]) => {
//       this._element!.removeEventListener(event, listener);
//     });
//   }

//   _addAttribute() {
//     const { attr = {} } = this.props;

//     Object.entries(attr).forEach(([key, value]) => {
//       if (typeof value === 'string') {
//         this._element?.setAttribute(key, value);
//       }
//     });
//   }

//   protected compile(template: (context: any) => string, context: any) {
//     const contextAndStubs = { ...context };

//     Object.entries(this.children).forEach(([name, component]) => {
//       if (Array.isArray(component)) {
//         contextAndStubs[name] = component.map(
//           (child) => `<div data-id="${child.id}"></div>`
//         );
//       } else {
//         contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
//       }
//     });

//     const html = template(contextAndStubs);

//     const temp = document.createElement('template');

//     temp.innerHTML = html;

//     const replaceStub = (component: Block) => {
//       const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

//       if (!stub) {
//         return;
//       }

//       component.getContent()?.append(...Array.from(stub.childNodes));

//       stub.replaceWith(component.getContent()!);
//     };

//     Object.entries(this.children).forEach(([, component]) => {
//       if (Array.isArray(component)) {
//         component.forEach(replaceStub);
//       } else {
//         replaceStub(component);
//       }
//     });

//     return temp.content;
//   }

//   dispatchComponentDidMount() {
//     this.eventBus().emit(Block.EVENTS.FLOW_CDM);
//   }

//   setProps = (nextProps: Partial<P>) => {
//     if (!nextProps) {
//       return;
//     }

//     Object.assign(this.props, nextProps);
//   };

//   get element(): HTMLElement {
//     return this._element!;
//   }

//   getContent(): HTMLElement {
//     return this.element;
//   }

//   _makePropsProxy(props: Record<string, any>) {
//     return new Proxy(props, {
//       get(target, prop: string) {
//         const value = target[prop];
//         return typeof value === 'function' ? value.bind(target) : value;
//       },
//       set: (target: P, prop: string, value) => {
//         target[prop as keyof P] = value;

//         this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
//         return true;
//       },
//       deleteProperty() {
//         throw new Error('Нет доступа');
//       },
//     });
//   }

//   show() {
//     this.getContent().style.display = 'block';
//   }

//   hide() {
//     this.getContent().style.display = 'none';
//   }
// }
