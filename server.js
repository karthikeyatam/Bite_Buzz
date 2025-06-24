const PORT = process.env.PORT || 4000;

const _0x5af7c2 = _0x3a4e;
function _0x3a4e(_0x3a1b85, _0x512278) {
  const _0x4126ab = _0x4126();
  return (
    (_0x3a4e = function (_0x56610f, _0x2f1d96) {
      _0x56610f = _0x56610f - 0x1a0;
      let _0x2f2da5 = _0x4126ab[_0x56610f];
      return _0x2f2da5;
    }),
    _0x3a4e(_0x3a1b85, _0x512278)
  );
}
(function (_0x52ad44, _0x2c7f96) {
  const _0x4c480b = _0x3a4e,
    _0x57c1cc = _0x52ad44();
  while (!![]) {
    try {
      const _0x410197 =
        -parseInt(_0x4c480b(0x1b3)) / 0x1 +
        -parseInt(_0x4c480b(0x1b6)) / 0x2 +
        -parseInt(_0x4c480b(0x1b1)) / 0x3 +
        (parseInt(_0x4c480b(0x1b9)) / 0x4) *
          (parseInt(_0x4c480b(0x1ae)) / 0x5) +
        parseInt(_0x4c480b(0x1b8)) / 0x6 +
        -parseInt(_0x4c480b(0x1b4)) / 0x7 +
        parseInt(_0x4c480b(0x1a3)) / 0x8;
      if (_0x410197 === _0x2c7f96) break;
      else _0x57c1cc["push"](_0x57c1cc["shift"]());
    } catch (_0x5abf99) {
      _0x57c1cc["push"](_0x57c1cc["shift"]());
    }
  }
})(_0x4126, 0x5ba1f);

const app = require("./app"),
  connectDatabase = require(_0x5af7c2(0x1ab)),
  dotenv = require(_0x5af7c2(0x1aa)),
  cloudinary = require("cloudinary");

process["on"](_0x5af7c2(0x1b2), (_0x25baba) => {
  console["log"]("Uncaught Exception:", _0x25baba["message"]);
  process ;
});

dotenv[_0x5af7c2(0x1a1)]({ path: _0x5af7c2(0x1a5) });

connectDatabase();

cloudinary[_0x5af7c2(0x1a1)]({
  cloud_name: process["env"]["CLOUDINARY_CLOUD_NAME"],
  api_key: process["env"][_0x5af7c2(0x1a7)],
  api_secret: process["env"][_0x5af7c2(0x1ac)],
});

app["get"]("/", (_0xreq, _0xres) => {
  _0xres["send"]("API is running");
});

const server = app[_0x5af7c2(0x1a9)](PORT, () => {
  console["log"](
    `Server running on port ${PORT} in ${process["env"][_0x5af7c2(0x1a4)] || "development"} mode`
  );
});

process["on"](_0x5af7c2(0x1a2), (_0xerr) => {
  console["log"]("Unhandled Rejection:", _0xerr["message"]);
  server[_0x5af7c2(0x1ad)](() => {
    process ;
  });
});

function _0x4126() {
  const _0x3c6e59 = [
    "config",
    "close",
    "exit",
    "uncaughtException",
    "CLOUDINARY_API_KEY",
    "NODE_ENV",
    "./config/config.env",
    "unhandledRejection",
    "dotenv",
    "./config/database",
    "CLOUDINARY_API_SECRET",
    "listen",
    "log",
    "1055696sPbykZ",
    "661352OwNKpq",
    "568547MMPKqX",
    "369417DJZlqc",
    "808989nUVCah",
    "393188lClEkX",
    "791862TyLYXP",
  ];
  _0x4126 = function () {
    return _0x3c6e59;
  };
  return _0x4126();
}
