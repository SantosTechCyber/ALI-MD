const fs = require("fs-extra");

if (fs.existsSync(".env")) {
    require("dotenv").config({
        path: __dirname + "/.env",
        quiet: true,
    });
}

module.exports = {
    PREFIX: process.env.PREFIX,

    OWNER_NAME: process.env.OWNER_NAME,
    OWNER_NUMBER: process.env.OWNER_NUMBER,
    BOT_NAME: process.env.BOT_NAME,
    FOOTER: process.env.FOOTER,
    CAPTION: process.env.CAPTION,
    BOT_PIC: process.env.BOT_PIC,
    MODE: process.env.MODE,
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    SESSION_ID: process.env.ALI-MD~H4sIAAAAAAAAA5VU27KiOhD9l7xqzQYFRKt21UFUREQEBZVT8xAhYJSbIVFgyn+fwn2ZeTgztQ9PoQmrV/da3T9AluMSGagGox+gIPgGKWqPtC4QGIExiyJEQBeEkEIwAh2lo1QSZp3reTzvmTFcrhia+GM2C+KpcmwCp1yw0r0f3fgVPLqgYMcEB38BrAlyQzOkO+Yb3OYSh97QmRl8baj5fiGoe2+nG+eLJJ8d/RU8WkSICc7iaXFCKSIwMVC9hph8jX5snU/VpX/oZUu6NIXBaVocFlNeHd8Wi8FJuOyFfsFrK6OZHb5G32B7e3sY25eT7yrUCifEYrWvr6yF6YcVUm6VNK28Umtc941+ieMMhXqIMopp/eW+3w3moZ560K89c+045tUfXreCv52dY94NetRGTHOPO0a46deIq4dm7RPPVr3YNdKeMK8sxx3kV8Fa+jK6ilkpHPnjCS3T+Hfia/Lhlcv/6Xuwwq6tpDNrrNO1cVtw10hNpIFdBfeJyZxmsDF2h4lOhxfha/TlEzFZoNiNvb7R9H7KsZgplzSp5uGuGNYbwZuoa8ZzqTv9RR9SRv7Gchs17EwKnxnGi6xTK3aIF/nrderLe1deXYZJkRK34AP//mKYkXls+oUcRUeZYze0XSjVqk8bc4n7JqVKB0e3l3l5ur8+K7qgWg/BiH90AUExLimBFOdZG+O6AIa3DQoIos/mggUW7htnIqS4b7/M5sNo5zVL2inRRTuMg5QGq8nBOg/Oydh9BV1QkDxAZYnCOS5pTmoTlSWMUQlG/37vggxV9E22NpnM97sgwqSkbsaKJIfhh6ifX2EQ5CyjmzoL1PaAyBvH9zCiFGdx2faRZZAEJ3xD6gnSEowimJTos0JEUAhGlDD0ObVqHraNd5yJO7P2IuiC9CkIDsEI9ERhwEm8zA0kbsTz/5Tf7i0sLIpvGaKgC5LnNb434LihKImC2BPl9mIb74IMtlhgxp4qPz4Jt/ghohAnZet7cz2moqtNDTQZUlfTlGmsqLECfhX44ZQ3LeRLWhlLqVqpmScqqyNS3HOdkGIKO9trZIqziktu/K5B2uH1P0DACLzovZ7fuRb4qusTTg57lXbAsoKtWT/nvP10Kmlbbm2E86nlUWXZMx2OmNrAmDSK0qQOVy/42DaVdRxaWc5IjOK5PLZf22whuuEA/Z7MyDCDEoz3/FkbSuLONu7rmWB23JcUUu0+TDcr+VQl+fngicfjwE6YMLtnV0FcQXEtmftgbs/7G79O6SSX/Crd30sVv3v4OUPJ++7CT3+10rWvEUbPVfAuwp80euP7NP2j+9uv7zvlD3M5jhaLcoM75dYueGRPdv14pssFlBztdpGyxnKCcHEcemX/lILH43sXFAmkUU5SMAIwC0n+TE5y1jpXz6L8b4tRifWxHattwQksqfJrGrY4RSWFaQFG/GDIyZwgcHwXpLVSFBsK6ccUAaV9tOsWPH4Ce5/dPWAHAAA=,
    VERSION: process.env.VERSION,
    WARN_COUNT: process.env.WARN_COUNT,
    TIME_ZONE: process.env.TIME_ZONE,
    DM_PRESENCE: process.env.DM_PRESENCE,
    GC_PRESENCE: process.env.GC_PRESENCE,
    CHATBOT: process.env.CHATBOT,
    CHATBOT_MODE: process.env.CHATBOT_MODE,
    STARTING_MESSAGE: process.env.STARTING_MESSAGE,

    ANTIDELETE: process.env.ANTIDELETE,
    ANTI_EDIT: process.env.ANTI_EDIT,
    ANTIVIEWONCE: process.env.ANTIVIEWONCE,
    ANTICALL: process.env.ANTICALL,
    ANTICALL_MSG: process.env.ANTICALL_MSG,
    
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS,
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS,
    STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS,
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS,
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT,
    AUTO_REACT: process.env.AUTO_REACT,
    AUTO_REPLY: process.env.AUTO_REPLY,
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES,
    AUTO_BIO: process.env.AUTO_BIO,
    AUTO_BLOCK: process.env.AUTO_BLOCK,
    
    YT: process.env.YT,
    NEWSLETTER_JID: process.env.NEWSLETTER_JID,
    GC_JID: process.env.GC_JID,
    NEWSLETTER_URL: process.env.NEWSLETTER_URL,
    BOT_REPO: process.env.BOT_REPO,
    PACK_NAME: process.env.PACK_NAME,
    PACK_AUTHOR: process.env.PACK_AUTHOR,
    SUDO_NUMBERS: process.env.SUDO_NUMBERS,
    PM_PERMIT: process.env.PM_PERMIT,
    DATABASE_URL: process.env.DATABASE_URL,
    // Postgres URL
    // Free: neon.tech / supabase / render / heroku
    // fallback => ./ali-md/database/database.db
};

let fileName = require.resolve(__filename);

fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);

    console.log(`Updated File: ${__filename}`);

    delete require.cache[fileName];

    require(fileName);
});
