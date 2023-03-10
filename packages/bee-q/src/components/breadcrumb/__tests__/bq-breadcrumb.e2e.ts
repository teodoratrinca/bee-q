import { newE2EPage } from '@stencil/core/testing';

describe('bq-breadcrumb', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-breadcrumb></bq-breadcrumb>');

    const element = await page.find('bq-breadcrumb');

    expect(element).toHaveClass('hydrated');
  });

  it('should have shadow root', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-breadcrumb></bq-breadcrumb>');

    const element = await page.find('bq-breadcrumb');

    expect(element.shadowRoot).not.toBeNull();
  });

  it('should display text', async () => {
    const page = await newE2EPage();
    await page.setContent('<bq-breadcrumb></bq-breadcrumb>');

    const element = await page.find('bq-breadcrumb >>> p');

    expect(element).toEqualText('My name is Stencil');
  });
});
