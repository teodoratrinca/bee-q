import { Component, h, Method, EventEmitter, Element, Event, Prop } from '@stencil/core';

/**
 * @part base - The component's internal wrapper of the breadcrumb component.
 * @part link - The native HTML `<input type="radio">` used under the hood.
 * @part prefix - The `<span>` element that holds the prefix.
 * @part dropdown - The `<span>` element that holds the dropdown.
 */

@Component({
  tag: 'bq-breadcrumb-item',
  styleUrl: './scss/bq-breadcrumb-item.scss',
  shadow: true,
})
export class BqBreadcrumbItem {
  private li: HTMLLinkElement;

  @Element() el!: HTMLBqBreadcrumbItemElement;
  /**
   * Contains a URL
   * If prop is set, an anchor tag will be rendered
   */
  @Prop() link: string;
  /**
   * Contains an arrow
   * If prop is set to true, it displays the options
   */
  @Prop() dropdown: boolean;

  /**
   * Sets focus on the native `<li>` HTML element used under the hood.
   * Use this method instead of the global `element.focus()`.
   */
  @Method()
  async vFocus() {
    this.li?.focus();
  }

  /** Handler to be called when the breadcrumb item gets focus */
  @Event() bqFocus: EventEmitter<HTMLBqBreadcrumbItemElement>;

  private handleOnFocus = () => {
    this.bqFocus.emit(this.el);
  };

  render() {
    return (
      <li class="bq-breadcrumb__item" part="base" onFocus={this.handleOnFocus}>
        <a href={this.link} part="link">
          <span class="bq-breadcrumb__item bq-breadcrumb__item--prefix" part="prefix">
            <slot name="prefix" />
          </span>
          <slot></slot>
          {/* {this.dropdown ? (
            <div class="bq-breadcrumb__item bq-breadcrumb__item--dropdown" part="dropdown">
              <bq-icon name="caret-down" size="10"></bq-icon>
            </div>
          ) : (
            ''
          )} */}
        </a>
      </li>
    );
  }
}
