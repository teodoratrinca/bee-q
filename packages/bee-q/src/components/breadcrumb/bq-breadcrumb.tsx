import { h, Component, Element } from '@stencil/core';

/**
 * A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid
 * in user interfaces and on web pages. It allows users to keep track and maintain awareness
 * of their locations within programs, documents, or websites.
 *
 * @part base - The component's internal wrapper that holds the navigation links.
 * @part ul - The component's internal wrapper that holds the slot.
 */

@Component({
  tag: 'bq-breadcrumb',
  styleUrl: './scss/bq-breadcrumb.scss',
  shadow: true,
})
export class BqBreadcrumb {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================
  @Element() host: HTMLElement;

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  // Prop lifecycle events
  // =======================

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <nav class="bq-breadcrumb" part="base">
        <ul
          class={
            this.host.children.length <= 4
              ? ' bq-breadcrumb bq-breadcrumb--extended'
              : ' bq-breadcrumb bq-breadcrumb--collapsable'
          }
          part="ul"
        >
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
