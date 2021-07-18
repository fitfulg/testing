import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import { findbyTestAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("should renders without error", () => {
  const wrapper = setup();
  const component = findbyTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("should not renders text when `success` prop is false ", () => {
  const wrapper = setup({ success: false });
  const component = findbyTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("should renders non-empty congrats when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findbyTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
