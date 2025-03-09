import ENV from "./env";

const TRANSLATE_DATA = Object.freeze({
  OPENED_HOST: {
    pt: "host aberto em $0",
    us: "host open at $0",
    en: "host abierto a $0",
  },
  APP_LIFE_OK: {
    pt: "vida do aplicativo está ok",
    us: "app life is ok",
    en: "la vida de la aplicación está bien",
  },
});

export function tget(
  key: keyof typeof TRANSLATE_DATA,
  params?: (string | number)[]
) {
  const text = TRANSLATE_DATA[key][ENV.APP_LOCATION];

  if (!params) {
    return text;
  }

  return params.map((param, index) => {
    const searchValue = `$${index}`;
    if (text.includes(searchValue)) {
      return text.replaceAll(searchValue, String(param));
    }

    return text;
  })[0];
}

export default TRANSLATE_DATA;
