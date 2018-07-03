import ShieldIdenticon from 'console/components/common/ShieldIdenticon';

import { NORMANDY_API_ROOT_URL } from 'console/settings';

describe('<ShieldIdenticon>', () => {
  const props = {
    seed: 'test',
    size: null,
    className: null,
  };

  it('should work', () => {
    const wrapper = () => mount(<ShieldIdenticon {...props} />);

    expect(wrapper).not.toThrow();
  });

  it('should use the v2 api to resolve identicons', () => {
    const wrapper = mount(<ShieldIdenticon {...props} />);

    const nestedImg = wrapper.find('img');
    expect(nestedImg.length).toBe(1);
    expect(nestedImg.props().src).toBe(`${NORMANDY_API_ROOT_URL}v2/identicon/${props.seed}.svg`);
  });
});
