import Slider from "@material-ui/core/Slider";
import withStyles from "@material-ui/core/styles/withStyles";

export const livingArrangementsLabels = [
  {
    value: 0,
    label: "",
  },
  {
    value: 1,
    label: "Village",
  },
  {
    value: 2,
    label: "Town",
  },
  {
    value: 3,
    label: "Small City",
  },
  {
    value: 4,
    label: "Medium City",
  },
  {
    value: 5,
    label: "Large City",
  },
];

export const numInteractionsLabels = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
];

export const LivingSlider = withStyles({
  root: {
    color: "#58bbff",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  markLabel: {
    fontSize: "1.2rem",
    fontFamily: "Biotif-Medium"
  },
  mark: {
    display: "none",
  },
})(Slider);

export const SocialiseSlider = withStyles({
  root: {
    color: "#58bbff",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  markLabel: {
    fontSize: "1.2rem",
    fontFamily: "Biotif-Medium"
  },
  mark: {
    display: "none",
  },
})(Slider);
