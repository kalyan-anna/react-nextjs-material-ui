// Time To First Byte
// https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte
let ttfbValue: number;

// First Contentful Paint
// https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint
let fcpValue: number;

// Largest Contentful Paint
// https://web.dev/lcp/
let lcpValue: number;

// First Display Input
// https://web.dev/fid/
let fidValue: number;

// Cumulative Layout Shift
// https://web.dev/cls/
let clsValue: number;

const setTTFB = (value: number) => {
  ttfbValue = value;
};

const setFCP = (value: number) => {
  fcpValue = value;
};

const setLCP = (value: number) => {
  lcpValue = value;
};

const setFID = (value: number) => {
  fidValue = value;
};

const setCLS = (value: number) => {
  clsValue = value;
};

export const metricService = {
  get ttfb() {
    return ttfbValue?.toFixed();
  },
  setTTFB,

  get fcp() {
    return fcpValue?.toFixed();
  },
  setFCP,

  get lcp() {
    return lcpValue?.toFixed();
  },
  setLCP,

  get fid() {
    return fidValue?.toFixed();
  },
  setFID,

  get cls() {
    return clsValue?.toFixed();
  },
  setCLS,
};
