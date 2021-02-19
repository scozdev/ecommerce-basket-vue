import { mount, shallowMount } from '@vue/test-utils';
import Button from '@/components/Button';

describe('Button.vue', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders props.val when passed', () => {
    const val = 'new message';
    const wrapper = shallowMount(Button, {
      props: { val: val },
    });
    expect(wrapper.text()).toMatch(val);
  });

  it('Val is ADD PRODUCT by default', () => {
    const wrapper = mount(Button);
    expect(wrapper.vm.val).toBe('ADD PRODUCT');
  });

  it('props.size passes with size type', () => {
    const size = Button.props.size;
    expect(size.validator('normal')).toBe(true);
    expect(size.validator('full')).toBe(true);
    expect(size.validator('qweqwe')).toBe(false);
  });

  it('renders props.size when passed', () => {
    const val = 'new message';
    const wrapper = shallowMount(Button, {
      props: { size: val },
    });
    expect(wrapper.props().size).toMatch(val);
  });

  it('Size is normal by default', () => {
    const wrapper = mount(Button);
    expect(wrapper.vm.size).toBe('normal');
  });

  it('props.color passes with color type', () => {
    const color = Button.props.color;
    expect(color.validator('primary')).toBe(true);
  });

  it('Color is primary by default', () => {
    const wrapper = mount(Button);
    expect(wrapper.vm.color).toBe('primary');
  });
});
