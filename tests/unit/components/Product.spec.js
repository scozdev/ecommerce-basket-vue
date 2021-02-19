import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils';
import Product from '@/components/Product';

describe('Product.vue', () => {
  let product;
  let wrapper;

  beforeEach(() => {
    product = {
      id: 1,
      name: 'Şampuan',
      price: '13',
      currency: 'TRY',
      image:
        'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
    };

    wrapper = shallowMount(Product, {
      propsData: {
        productData: product,
      },
    });
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('class property test', () => {
    expect(wrapper.classes()).toContain('product');
  });
});
